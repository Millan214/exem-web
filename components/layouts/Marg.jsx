import styled from "styled-components"

const Marg = styled.div`
    ${ props => props.vh ? "padding: "+props.vh+"%;" : "" };
    ${ props => props.px ? "padding: "+props.px+"px;" : "" };
`
export default Marg