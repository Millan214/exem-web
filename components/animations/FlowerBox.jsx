import anime from "animejs"
import { useEffect } from "react"
import styled from "styled-components"

const SWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 50px;
`

const SBackgroundPetal = styled.div`
    background: var(--color3);
    border-radius: 30px;

    width: 110px;
    height: 110px;

    position: absolute;
`

const SForegroundPetal = styled.div`
    background: var(--color2);
    border-radius: 30px;

    width: 110px;
    height: 110px;

    transform: rotate(45deg);

    position: absolute;
`

const SContentPetal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    background: var(--color1);

    width: 100px;
    height: 100px;

    font-weight: bold;
    color: var(--color6);

    font-size: 30px;

    z-index: 2;
`

const SContentPetalText = styled.div`
    color: var(--color4);
    font-weight: bold;
    font-size: 20px;

    text-align: center;
    text-transform: uppercase;
    width: 150px;

    position: absolute;

    transform: translateY(100px);
`


export const FlowerBox = props => {

    const animated = true

    useEffect(() => {
        if(animated) {
            anime({
                targets: '.sBackgroundPetal',
                rotate: '360',
                easing: 'linear',
                loop: true,
                autoplay: true,
                duration: 10000
            })
            anime({
                targets: '.sForegroundPetal',
                rotate: '-360',
                easing: 'linear',
                loop: true,
                autoplay: true,
                duration: 10000
            })
        }
    })

    return (
        <SWrapper>
            <SBackgroundPetal className="sBackgroundPetal"></SBackgroundPetal>
            <SForegroundPetal className="sForegroundPetal"></SForegroundPetal>
            <SContentPetal>
                {props.content}
            </SContentPetal>
            <SContentPetalText>
                {props.text}
            </SContentPetalText>
        </SWrapper>
    )
}