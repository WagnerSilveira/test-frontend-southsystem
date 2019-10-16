import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;
export const ButtonStyle =  styled.button`
  background: ${(props) => props.theme.secondaryColor};
  border-radius: 3px;
  border: 2px solid white;
  color: ${(props) => props.theme.primaryColor};
  margin: 0;
  padding: 0.25em 1em;
  font-weight: bold;
  font-family: inherit;
  width: 100%;
  height: 40px;
  font-size: 21px;
`