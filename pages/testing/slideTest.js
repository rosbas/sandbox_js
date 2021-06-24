// https://interactjs.io/docs/

import styled from "styled-components"
import interact from 'interactjs'

const Sliders = styled.div`
    padding: 2em
`

const Slider = styled.div`
    & {
        position: relative;
        width: 100%;
        height: 1em;
        margin: 1.5em auto;
        background-color: #29e;
        border-radius: 0%.5em;
        box-sizing: border-box;
        font-size : 1em;
        -ms-touch-action: none;
        touch-action: none;
    }
    &:before{
        content: "";
        display: block;
        position: relative;
        top: -0.5em;

        width: 2em;
        height: 2em;
        margin-left: -1em;
        border: solid 0.25em #fff;
        border-radius: 1em;
        background-color: inherit;

        box-sizing: border-box;
    }
    &:after{
        content: attr(data-value);
        position: absolute;
        top: -1.5em;
        width: 2em;
        line-height:1em;
        margin-left: -1em;
        text-align: center;


    }
`

const slideTest = () => {
    return ( 
        <Sliders>
            <Slider></Slider>
        </Sliders>
     );
}
 
export default slideTest;