import ReactDOM from 'react-dom'
import './index.css'


const Backdrop=(props)=>{
    return(
        <div className='backdrop' onClick={props.onClick}></div>
    )
}

const ModalOverlay=(props)=>{
    return(
        <div className='modal'>
        <div className='content'>{props.children}</div>
        </div>
    )
}


const Modal=(props)=>{
    return(
        <>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>,document.getElementById('overlay'))}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlay'))}

        </>
    )

}


export default Modal