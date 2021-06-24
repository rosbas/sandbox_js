import styled from 'styled-components'

const Single = styled.a`
    padding: 2px 16px;
    background: #fff;
    display: block;
    margin: 20px 10px;
    border-left: 8px solid #fff;
    &:hover{
        border-left: 8px solid #4979ff;
        background-color: whitesmoke;
    }
`

//run at build time
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users') //await is use in async func
    const data = await res.json()

    return {
        props: {datas:data}
    }
}

const Listing = ({datas}) => {
    return ( 
        <>
        <h1>All users</h1>
        {datas.map(user => (
            <div key={user.id}>
                <Single>
                    <h3>{user.name}</h3>
                </Single>
            </div>
        ))}
        </>
     );
}
 
export default Listing;