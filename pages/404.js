import Link from 'next/link'
import styled from 'styled-components'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFoundPage = styled.div`
    background: #fff;
    color: #000;
    text-align: center;
`

const BackHome = styled.a`
    color: blueviolet;
    opacity: 0.6;
    transition: 0.5s;
    &:hover{
        cursor: pointer;
        opacity: 1;
    }
`

const NotFound = () => {

    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            console.log('use effect ran')
            // router.go(1)
            router.push('/')
        },3000)
    }, [])

    return ( 
        <NotFoundPage>
            <h1>Ooooops.....</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to <Link href="/"><BackHome>Homepage</BackHome></Link></p>
        </NotFoundPage>
     );
}
 
export default NotFound;