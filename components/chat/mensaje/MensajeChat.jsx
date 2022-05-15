import styled from "styled-components"

const SMensajeWrapper = styled.div`
    display: flex;
    justify-content: ${ props => props.right ? 'right' : 'left' };
`

const SMensajeBody = styled.div`
    
    padding: 10px;
    border-radius: 10px 10px 10px 0;
    font-size: 16px;

    max-width: 75%;

    ${ props => props.right ? 'border-radius: 10px 10px 0 10px' : '' };
    background: ${ props => props.right ? 'var(--color6)' : 'var(--color3)' };
    color: ${ props => props.right ? 'var(--color1)' : 'var(--color7)' };
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