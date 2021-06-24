import styled from 'styled-components'
import Link from "next/link"
import Image from 'next/image'

const Nav = styled.nav`
    height: 80px;
    background: #eee;
    color: #000;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 5px;
`

const StyledLink = styled.a`
    padding: 1rem 1rem;
    margin: 0rem 1rem;
    cursor: pointer;
    transition: 0.3s;
    opacity: 0.4;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
    &:hover {
    background-color: darkgray;
    border-radius: 5px 10px;
    opacity: 1;
  }
`

// const StyledImage = styled.img`
//     cursor: pointer;
//     max-width: 20%;
//     height: auto;
// `

const Navbar = () => {
    return ( 
        <Nav>
            {/* <div>
                <StyledImage src="/simp.png"></StyledImage>
            </div> */}
            <div>
                <Image src="/simp.png" width={128} height={77}></Image>
            </div>
            <div>
                <Link href="/">
                    <StyledLink>Home</StyledLink>
                </Link>
                <Link href="/about">
                    <StyledLink>About</StyledLink>
                </Link>
                <Link href="/projects">
                    <StyledLink>Projects</StyledLink>
                </Link>
                <Link href="/contact">
                    <StyledLink>Contact</StyledLink>
                </Link>
            </div>
        </Nav>
     );
}
 
export default Navbar;