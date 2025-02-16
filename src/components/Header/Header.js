import React from 'react'
import './Header.css'
import Image from 'next/image'
import { IoMenu } from "react-icons/io5";
export default function Header() {
  return (
    <header className='main-header'>
        <div className='lhs'>
            <button id='menu-btn'><IoMenu className='menu-icon'/></button>
            <Image src="/logo.svg" width={98} height={20} alt="logo" />
        </div>
        <div className='center'>
            <nav id='main-nav'>
                <ul className='parent-ul'>
                <li className='parent-li'>
                        <a href="#">Products</a>
                        <ul className='child-ul'>
                            <li><a href="#">Product 1</a></li>
                            <li><a href="#">Product 2</a></li>
                            <li><a href="#">Product 3</a></li>
                        </ul>
                    </li>
                    <li className='parent-li'>
                        <a href="#">Tools</a>
                        <ul className='child-ul'>
                            <li><a href="#">Tool 1</a></li>
                            <li><a href="#">Tool 2</a></li>
                            <li><a href="#">Tool 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='rhs'>
            <button className='login-btn'>Login</button>
            <button className='schedule-btn'>Sechedule a Call</button>
        </div>
    </header>
  )
}
