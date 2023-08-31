import React from 'react';
import classes from './Modal.module.css';
import BackDrop from '../BackDrop/BackDrop';
import Auxilary from '../../../hoc/Auxilary';

const Modal = React.memo((props) => {
  console.log('Modal is Rendering');

  return (
    <Auxilary>
      <BackDrop show={props.show} clicked={props.closeModal} />
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
  );
}, (prevProps, nextProps) => prevProps.show === nextProps.show);

export default Modal;
