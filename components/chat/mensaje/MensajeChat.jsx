import styled from "styled-components"

const SMensajeWrapper = styled.div`
    display: flex;
    justify-content: ${ props => props.left ? 'left' : 'right' };
`

const SMensajeBody = styled.div`
    
    padding: 10px;
    border-radius: 10px 10px 0 10px;
    font-size: 16px;

    max-width: 75%;

    ${ props => props.left ? 'border-radius: 10px 10px 10px 0' : '' };
    background: ${ props => props.left ? 'var(--color3)' : 'var(--color6)' };
    color: ${ props => props.left ? 'var(--color7)' : 'var(--color1)' };
    font-weight: 500;

`

const STime = styled.div`
    font-weight: bold;
    font-size: 14px;
    margin-top: 10px;
`

const MensajeChat = props => {
    return(
        <SMensajeWrapper { ...props }>
            <SMensajeBody { ...props }>
                <p>
                    { props.children }
                </p>
                <STime>
                    { props.time }
                </STime>
            </SMensajeBody>
        </SMensajeWrapper>
    )
}

export default MensajeChat