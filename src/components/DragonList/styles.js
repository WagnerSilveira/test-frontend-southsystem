import styled from 'styled-components'

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    margin: 20px;
    grid-gap: 15px;
    
`
export const GridItem = styled.div`
    border: 10px solid white;
    background-color: white;
    border-radius: 6px 6px;
    box-shadow: 4px -5px 2px 2px #105050;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        opacity:1 !important;
    }
    ${GridContainer}:hover &{
        opacity:0.2;
    }
    

`
export const GridItemPicture = styled.div`
    background: url( ${props => props.image || "https://i.pinimg.com/originals/ae/82/97/ae829770a6ef209fdfc9820f42ed0483.jpg"});
    width: auto;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const GridItemInfo = styled.div`
    margin: 10px 1px;
    font-size: 1.5rem;
    text-align: center;
 
`