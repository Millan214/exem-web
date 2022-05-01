import styled from "styled-components"

const VLayout = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    ${ props => props.margTop ? `margin-top: ${props.margTop}px;` : ''}
    
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    & > div:nth-child(odd) {
        margin-top: 300px;
    }
    
`

export default VLayout