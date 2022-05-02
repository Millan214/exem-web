import styled from "styled-components"

/**
 * @param up:boolean    Define si la dirección es hacia arriba o hacia abajo
 *                      Con este parámetro la dirección forma una ^ mientras que en su ausencia la forma es v  
 */
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

    & > div:nth-child( ${ props => props.up ? 'odd' : 'even' } ) {
        margin-top: 10%;
    }
    
`

export default VLayout