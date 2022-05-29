import anime from "animejs"
import { useEffect } from "react"
import styled from "styled-components"
import ExemTextIcon from "../icons/ExemTextIcon"
import Meditation from "../icons/Meditation"
import Petal from "../icons/Petal"

const SPetal = styled.div`
    position: absolute;
    z-index: -1;
    margin-bottom: 150px;
    transform-origin: bottom;
`
const SCirculoInterior = styled.div`
    background: var(--color);

    position: absolute;

    z-index: -2;

    width: 400px;
    height: 400px;

    border-radius: 50%;
`

const SCirculoExterior = styled.div`
    background: var(--color);

    position: absolute;

    z-index: -2;

    width: 550px;
    height: 550px;

    border-radius: 50%;
    opacity: .5;
`

const SExemTextIcon = styled.div`
    position: absolute;
    margin-top: 300px;
    font-weight: bold;
    font-size: 50px;
`

const SDownIcon = styled.svg`
    position: absolute;
    margin-top: 400px;
    opacity: .25;
`

const IntroAnimation = props => {
    /*
    const [petalos, setPetalos] = useState([])

    const cargarPetalos = () => {
        let petarray = []

        for (let i = 0; i < props.numPetalos; i++) {
            petarray =
                [...petarray,
                    <SPetal className="petaloAnim" key={i}>
                        <Petal />
                    </SPetal>
                ]
        }

        setPetalos(petarray)
    }
    */
    useEffect(() => {

        //cargarPetalos()

        anime({
            targets: '.petaloAnim',
            rotate: anime.stagger([-90, 90]),
            easing: 'easeInOutQuad',
            delay: anime.stagger(100, { direction: 'reverse' }),
            duration: 3000
        })

        anime({
            targets: '.meditationAnim',
            easing: 'easeInOutQuad',
            translateY: [0, 30],
            duration: 3000
        })

        anime({
            targets: '.circuloInteriorAnim',
            width: [ 0, 400 ],
            height: [ 0, 400 ],
            easing: 'easeInOutQuad',
            duration: 4000,
            delay: 1000,
        })

        anime({
            targets: '.circuloExteriorAnim',
            width: [ 0, 550 ],
            height: [ 0, 550 ],
            easing: 'easeInOutQuad',
            duration: 4000,
        })

    }, [])

    /**
     * Pongo los pétalos a mano porque generándolos programáticamente tardan y la animación no los pilla
     * por lo que numPetalos no funciona, para implementar la generación de pétalos de forma programática
     * hay que introducir la variable { petalos }
     */
    return (
        <>
            <SPetal className="petaloAnim" >
                <Petal />
            </SPetal>
            <SPetal className="petaloAnim" >
                <Petal />
            </SPetal>
            <SPetal className="petaloAnim" >
                <Petal />
            </SPetal>
            <SPetal className="petaloAnim" >
                <Petal />
            </SPetal>
            <SPetal className="petaloAnim" >
                <Petal />
            </SPetal>
            <SPetal className="petaloAnim" >
                <Petal />
            </SPetal>
            <SPetal className="petaloAnim" >
                <Petal />
            </SPetal>

            <Meditation className="meditationAnim" />

            <SCirculoInterior className="circuloInteriorAnim"/>
            <SCirculoExterior className="circuloExteriorAnim" />
            
            <SExemTextIcon className="sExemTextIcon">
                <ExemTextIcon  />
            </SExemTextIcon>

        </>
    )
}

export default IntroAnimation