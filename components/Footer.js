import styled from 'styled-components'

const FooterSection = styled.div`
    background: #eee;
    color: #000;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid lightgrey;
    opacity: 0.6;
`

const Footer = () => {
    return ( 
        <FooterSection>
            <div>Helloooo</div>
        </FooterSection>
     );
}
 
export default Footer;