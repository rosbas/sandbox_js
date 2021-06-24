import {useState} from 'react'
import styled from 'styled-components'

const Button = styled.button`
    display: inline-block;
    color: darkcyan;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
`
const Result = styled.button`
    display: inline-block;
    color: darkcyan;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
`

const Counting = () => {

    const plusOne = () => {
        setX(x + 1)
    }

    const [x, setX] = useState(0)
    return ( 
        <>
            <Button onClick={() => plusOne()}>Add one</Button>
            <Result>{x}</Result>
        </>
     );
}
 
export default Counting;