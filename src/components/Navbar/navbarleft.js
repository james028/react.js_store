import React from 'react'

const NavbarLeft = (props) => (
    <div style={navbarleft}>
    <div onClick={props.closeLeft}>X</div>
        <nav>
            <ul>
                <li><a href="/">Homepage</a></li>
                <li><a href="/">Orders</a></li>
            </ul>
        </nav>
    </div>
)
export default NavbarLeft;


const navbarleft = {
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: '#f4f4f4',
    color: '#000',
    width: '300px',
    height: '100vh',
    boxShadow: '24px 10px 97px 0px rgba(187,190,237,0.7)',
    zIndex: '600'
};