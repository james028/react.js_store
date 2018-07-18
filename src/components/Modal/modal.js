import React from 'react'
import './modal.css'
import Backdrop from '../Modal/backdrop'

const Modal = (props) => {
        return (
                <div>
                        <Backdrop 
                        closeBack={props.close}
                        showBack={props.show}/>
                        <div className="modal" style={{opacity: props.show ? '1' : '0'}}>
                                <div onClick={props.close}>X</div>  
                        </div>
                </div>
        );
}
export default Modal;