import { Component } from "react";
import { createPortal } from "react-dom";
import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component{
    handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClose()
        }
        
    }
    handleEscapeClick = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose() 
        }
        
    }

    componentDidMount() {
        window.addEventListener('keydown',this.handleEscapeClick)
        
    }
    componentDidUpdate() {
        window.removeEventListener('keydown',this.handleEscapeClick)
    }
    
    render() {
        return createPortal(
        <div className={css.Overlay} onClick={this.handleBackdropClick}>
            <div className={css.Modal}>
                <img src={this.props.url} alt="" />
            </div>
        </div>, modalRoot
    )
    }
    
}
export default Modal