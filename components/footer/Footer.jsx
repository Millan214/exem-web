import styled from "styled-components"

const SFooter = styled.footer`
    display: flex;
    flex-direction: column;

    margin-top: 400px;
`

const SFooterBody = styled.div`
    background: var(--color7);
`

const Footer = props => {
    return (
        <SFooter>
            <svg viewBox="0 0 1920 559" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1920 46.1599L1920 558.501L0 558.501L4.80686e-05 8.65982C153.833 55.9932 554.2 129.76 925 46.1598C1295.8 -37.4401 1742.83 11.3266 1920 46.1599Z" fill="var(--color2)"/>
                <path d="M1920 189.16L1920 559L0 558.501L0.000279708 151.66C594 79.4998 834.627 370.846 1168.5 189.16C1506 5.49979 1742.83 154.326 1920 189.16Z" fill="var(--color4)"/>
                <path d="M1920 451.934V559H0L0.000134665 414.435C335 199.501 403.006 522.26 767.5 414.435C1022.5 339.001 1425 220.001 1920 451.934Z" fill="var(--color7)"/>
            </svg>

            <SFooterBody>
                { props.children }
            </SFooterBody>
        </SFooter>
    )
}

export default Footer