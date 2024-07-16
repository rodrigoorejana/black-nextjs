// pages/products.tsx

import ProductsList from "@/components/ProductsList";
import Header from "./../../src/components/Header";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Container } from "reactstrap";
import { fetchProducts, ProductType } from "@/services/products";
import { ReactNode } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts()
  return { props: { products } }
}

const Products: NextPage = (props: {
  children?: ReactNode
  products?: ProductType[]
}) => {
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Container className="mb-5">
          <h1 className="my-5">
            Nossos Produtos
          </h1>

          {<ProductsList products={props.products!} />}
        </Container>
      </main>
    </>
  )
}

export default Products