import React,{useState} from 'react'
import "./Navbar.css"

export default function Navbar() {

  
  const [toggle, setToggle]= useState(false)
  
  const activate= ()=>{
      setToggle(!toggle)
  }

  return (
    <nav>
        <ul 
        className={ !toggle  ? "liste" : "liste toggle" }>
            <li className="items"> <a href="#">HOME</a> </li>
            <li className="items"> <a href="#">ABOUT</a> </li>
            <li className="items"> <a href="#">SERVICES</a> </li>
            <li className="items"> <a href="#">PROGRAMS</a> </li>
            <li className="items"> <a href="#">FAQ</a> </li>
        </ul>

        <div className="menu" onClick={activate}>
            <div 
            className={ !toggle  ? "box" : "box toggle" }>
                <div className="burger"></div>
                <div className="burger"></div>
                <div className="burger"></div>
            </div>
        </div>
    </nav>
  )
}
