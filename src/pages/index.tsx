import Header from "./../../src/components/Header";
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";
import { Container, Button } from "reactstrap";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container className="py-5 text-center">
          <h1 className="mt-5 display-1">O melhor jeito de comprar o que você ama</h1>
          <p className="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut sint quaerat nulla natus quibusdam officia veniam vero nihil earum eius consequatur repellendus fugit ipsum qui aliquid magni nisi, ducimus accusamus!
          </p>
          <Link href="/products">
          <Button color="dark" className="px-4 pb-2">
              Conheça nossos produtos!
            </Button>
          </Link>
        </Container>
      </main>
    </>
  )
}

export default Home
