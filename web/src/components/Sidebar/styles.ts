import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;

  max-width: 24rem;
  width: 100%;

  padding: 2rem;

  background: #2E303C;

  > span {
    margin-bottom: 4.5rem;
    font-size: 3rem;
    font-weight: 600;
    color: var(--yellow);

    p {
      display: inline;
      color: var(--white);
    }
  }

  ul {
    margin: 16px 0;
  }

  li {
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 20rem;
    width: 100%;

    border: 0;
    background: #373945;
    padding: 1.1875rem 2rem;
    border-radius: 0.25rem;

    font-size: 1.125rem;
    color: #fff;

    a {
      color: #fff;
      display: block;
      text-decoration: none;
      transition: color 0.2s;
      display: flex;
      align-items: center;

      svg {
        margin-right: 16px;
      }
    }
  }
`