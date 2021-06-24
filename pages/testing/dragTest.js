import styled from "styled-components"
import interact from 'interactjs'

const DragObject = styled.div`
    width: 25%;
    min-height: 6.5em;
    margin: 1rem 0 0 1rem;
    color: #000;
    display:flex;
    padding: 4%;
    justify-content: space-between;
    background: peachpuff;
    align-items: center;
    touch-action: none;
    user-select: none;
` 
const DragImage = styled.p`
    padding: 0rem 0rem;
`

const dragMoveListener = (event) => {
    var target = event.target
    var x =(parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y =(parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    target.setAttribute('data-x',x)
    target.setAttribute('data-y',y)
}

const dragTest = () => {
    return ( 
        <DragObject>
            <DragImage>
                Drag Me
            </DragImage>
        </DragObject>
     );
}
 
export default dragTest;