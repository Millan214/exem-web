import styled from "styled-components"

const STitulo = styled.h1`
    font-size: 50px;
    font-family: 'Kaushan Script', cursive;
    color: var(--secundario1);
    font-size: 1.8em;
    text-shadow: 0 0.5px 0 black;
    /*, 0 0 5px #f4d3d319, 0 1px 3px rgba(0,0,0,0.3), 0 3px 5px rgba(0,0,0,0.2),
    0 5px 10px rgba(0,0,0,0.25), 0 10px 10px var(--secundario), 0 20px 20px #620e4f26;*/

    /*transition: transform .1s, color .4s;

        &:hover{
            color: white;
        }  */
    `


const ExemTextIcon = () => {
    return (<>
        <STitulo>Exem</STitulo>
    </>)
}

export default ExemTextIcon