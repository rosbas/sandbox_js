import Head from 'next/head'
import styled from 'styled-components'

const Main = styled.h1`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`

const Text = styled.p`
  height: 40vh;
  display: flex;
  padding: 2rem 5rem;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Boss's Sandbox | Home</title>
      </Head>
      <Main>
        Hello World
      </Main>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus iusto, non, repellendus voluptate consequuntur, veniam dolorem perferendis officiis fuga voluptatibus sint dolore magni fugiat voluptatum. Nihil eum doloremque aut autem?
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus iusto, non, repellendus voluptate consequuntur, veniam dolorem perferendis officiis fuga voluptatibus sint dolore magni fugiat voluptatum. Nihil eum doloremque aut autem?
      </Text>
    </>
  )
}
