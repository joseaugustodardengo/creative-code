import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    margin: 30px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }      

    a {
      color: #1B1919;
      text-decoration: none;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }

    select {
      background: #232129;
      color: #fff;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 8px;
      
    }
  }

  > a {
    color: #1B1919;
    display: block;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#4A36B9')};
    }
  }
  
`