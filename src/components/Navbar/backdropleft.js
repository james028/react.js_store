import React from 'react'

const BackdropLeft = (props) => {
    return (
    props.showLeft ? <div style={BackdropClasses} onClick={props.closeLeft}></div> : null
    );
}
export default BackdropLeft;

const BackdropClasses = {
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: '#000',
    opacity: '0.6',
    width: '100%',
    height: '100vh',
    zIndex: '450'
};