import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;
export const ButtonStyle = styled.button`
  background: ${(props) => props.theme.secondaryColor};
  border-radius: 3px;
  border: 2px solid white;
  color: ${(props) => props.theme.primaryColor};
  margin: 2px 0;
  padding: 0.25em 1em;
  font-weight: bold;
  font-family: inherit;
  width: 100%;
  height: 40px;
  font-size: 21px;
  cursor:pointer;
  transition: all 0.4s ease;

  &:hover {
    background: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
    border-color: ${(props) => props.theme.secondaryColor};
  }
`;

export const ButtonDanger = styled(ButtonStyle)`
  color: #d40f0f;
  border-color: #d40f0f;
  &:hover  {
    background-color: #d40f0f;
  }
`;
