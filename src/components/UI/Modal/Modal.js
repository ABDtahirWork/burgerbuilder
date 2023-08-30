import React from 'react'
import classes from './Modal.module.css'
import BackDrop from '../BackDrop/BackDrop'
import Auxilary from '../../../hoc/Auxilary'

const Modal = (props) => {
  return (
    <Auxilary>
      <BackDrop show={props.show} closeModal={props.closeModal}/>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </Auxilary>
  )
}

export default Modal
