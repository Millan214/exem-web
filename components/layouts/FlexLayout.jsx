import styled from "styled-components"

export const FlexLayout = styled.div`
    display: flex;
    align-items: ${ props => props.vcenter ? 'center' : 'top' };
    justify-content: ${ props => props.hcenter ? 'center' : 'left' };
    height: ${ props => props.fullheight ? '100%' : 'auto' };
`