import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  color: #fff;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  } 
  
  input {   
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;

    &::placeholder {
      color: #fff;
    }     
  }

  svg {
    margin-right: 16px;
  }

`