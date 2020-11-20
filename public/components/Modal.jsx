import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  display: block;
  overflow: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 100;
  cursor: pointer;
`;

const Content = styled.div`
  margin: 15% auto;
  background-color: white;
  width:204px;
  height: 444px;
  padding: 44px;
  position: relative;
  font-size: 16px;
  line-height: 34px;
`;



const Modal = (props) => {


const closeIcon = () => (
  <div onClick={closeModal}
  style={{
    color: '#000000',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 0,
    position: 'absolute',
    top: '0.3rem',
    right: '0.5rem',
  }}>✕</div>
);


  const {closeModal} = props;
  return(
    <Overlay>
      <Content>
        {closeIcon()}
        {props.children}
      </Content>
    </Overlay>
  )
};



export default Modal;