import styled from "styled-components"

const SFooter = styled.footer`
    display: flex;
    flex-direction: column;

    margin-top: 100px;
`

const SFooterBody = styled.div`
    background: var(--color7);
`

const Footer = props => {
    return (
        <SFooter>
            <svg  viewBox="0 0 1920 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1920 19.3228L1920 233.791L0 233.791L4.80686e-05 3.62504C153.833 23.439 554.2 54.3181 925 19.3227C1295.8 -15.6726 1742.83 4.74136 1920 19.3228Z" fill="var(--color2)"/>
                <path d="M1920 79.1831L1920 234L0 233.791L0.000279708 63.4857C594 33.279 834.627 155.238 1168.5 79.1831C1506 2.30224 1742.83 64.6017 1920 79.1831Z" fill="var(--color4)"/>
                <path d="M1920 189.182V234H0L0.000134665 173.485C335 83.5121 403.006 218.62 767.5 173.485C1022.5 141.907 1425 92.0933 1920 189.182Z" fill="var(--color7)"/>
            </svg>
            <SFooterBody>
                { props.children }
            </SFooterBody>
        </SFooter>
    )
}

export default Footer