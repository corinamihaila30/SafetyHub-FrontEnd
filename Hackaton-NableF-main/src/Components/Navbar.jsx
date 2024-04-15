import React, { useRef, useState, useEffect, createRef} from 'react'
import { gsap } from 'gsap';
import "./Navbar.css"
  
  /*--------------------
  Menu
  --------------------*/
  const items = [
    {
      name: "Home",
      color: "#f44336",
      href: "/"
    },
    {
      name: "About us",
      color: "#e91e63",
      href: "/about"
    },
    {
      name: "Map",
      color: "#9c27b0",
      href: "/map"
    },
     {name: "Profile",
      color: "#673ab7",
      href: "/profile"
    },
    {
      name:"Login",
      color: "#667ab9",
      href:"/login"
    }
  ];



  
  const Navbar = () => {
    if (localStorage.getItem("token") !== null && items.length !== 4) items.pop();
    const $root = useRef()
    const $indicator1 = useRef()
    const $indicator2 = useRef()
    const $items = useRef(items.map(createRef))
    const [ active, setActive ] = useState(0)
    
    const animate = () => {
      const menuOffset = $root.current.getBoundingClientRect()
      const activeItem = $items.current[active].current
      const { width, height, top, left } = activeItem.getBoundingClientRect()
      
      const settings = {
        x: left - menuOffset.x,
        y: top - menuOffset.y,
        width: width,
        height: height,
        backgroundColor: items[active].color,
        ease: 'elastic.out(.7, .7)',
        duration: .8
      }
      
      gsap.to($indicator1.current, {
        ...settings,
      })
      
      gsap.to($indicator2.current, {
        ...settings,
        duration: 1
      })
    }
    
    useEffect(() => {
      animate()
      window.addEventListener('resize', animate)
      
      return (() => {
        window.removeEventListener('resize', animate)
      })    
    }, [active])
    
    return (
      <div className="navbar">
      <div>
      <img src = "/images/logo.jpeg" className="logo" alt ="logo"></img>
      </div>
      <div
        ref={$root}
        className="menu"
      >
        {items.map((item, index) => (
          <a
            key={item.name}
            ref={$items.current[index]}
            className={`item ${active === index ? 'active' : ''}`}
            onMouseEnter={() => {
              setActive(index)
            }}
            href={item.href}
           >
            {item.name}
          </a>
        ))}
        <div
          ref={$indicator1}
          className="indicator"
         />
        <div
          ref={$indicator2}
          className="indicator"
         />
      </div>
      </div>
    )
  }
  

export default Navbar