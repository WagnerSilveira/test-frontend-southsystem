import styled from 'styled-components';

export const Container = styled.label`
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
`;

export const Label = styled.span`
    position: absolute;
    top: 13px;
    left: 7px;
    font-size: 16px;
    color: ${(props) => props.theme.secondaryColor};
    font-weight: 500;
    transform-origin: 0 0;
    transition: all 0.2s ease;
`;

export const Border = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background #0077FF;
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: all .15s ease;
`;

export const InputStyle = styled.input`
    width: fill-available;
    border: 0;
    font-family: inherit;
    padding: 12px 7px;
    height: 20px;
    font-size: 16px;
    font-weight: 500;
    border: 2px solid ${(props) => props.theme.secondaryColor};
    background: none;
    border-radius: 6px 6px;
    color:  ${(props) => props.theme.secondaryColor};
    transition: all 0.15s ease;

    &:hover {
        background: rgba(34,50,84,0.03);
    };
    &:not(:placeholder-shown) + ${Label} {
        color: ${(props) => props.theme.secondaryColor};
        transform: translateY(-26px) scale(0.75);
    };
    &:focus {
        background: none;
        border-color: ${(props) => props.theme.secondaryColor};
        outline: none;
    };
    &:focus + ${Label} {
        color: ${(props) => props.theme.secondaryColor};
        transform: translateY(-26px) scale(0.75);
    };
`;
