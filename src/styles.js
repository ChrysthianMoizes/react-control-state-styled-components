import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100vh;
  min-height: 100vh;
  flex-direction: column;
  background-color: #282c34;
`;

export const Title = styled.h1`
    color: #61dafb;
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : '24px'};

    p {
        font-size: 12px;
    }
`;

export const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    background: ${props => props.primary ? 'palevioletred' : 'white'};
    color: ${props => props.primary ? 'white' : 'palevioletred'};
`;