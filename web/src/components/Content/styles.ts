import styled from 'styled-components';

export const Container = styled.div`
  max-width: 70rem;
  width: 100%;
  background: #fff;
  color: black;

  margin: 0 auto;

  header {
    span.category {
      display: block;
      margin-top: 2rem;

      font-size: 2.25rem;
      font-weight: 600;
      color: black;
    }

    span {
      color: black;
    }
  }

  main {
    width: 100%;
    margin-top: 5.625rem;    
  }
`

export const Table = styled.table`
  width: 100%;

  td, th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;

    a {
      margin: auto 4px;
    }
  }

`