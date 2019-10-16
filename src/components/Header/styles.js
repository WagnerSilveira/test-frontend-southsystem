import styled from 'styled-components';

export const HeaderStyle = styled.header`
    display: flex;
    width: auto;
    height: 7vh;
    padding: 20px;
    background: #ffffff;
    box-shadow: -1px 4px 20px 2px #243535;
    justify-content: space-between;
`
export const HeaderLogo = styled.img`
    width: 50px;
    margin: 0 10px;
` 
export const HeaderUserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeaderLogout = styled.span`
    cursor:pointer;
    &:hover {
        font-weight: bold;
    }
`