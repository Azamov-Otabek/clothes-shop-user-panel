import {Header, Container, Footer } from "@components"
import { Carusel, Card } from "@ui"
import { Products } from "@store"
import { useStore } from "zustand"
import { useEffect } from "react"

function Index() {
  const { products, getProducts } = useStore(Products)
  async function getData(){
      const payload = {
        page: 1,
        limit: 50
      }
      await getProducts(payload)
    }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
          <Header/>
          <Carusel/>
          <div className="mt-[50px] mb-[100px]">
            <Container>
              <div className="flex flex-wrap gap-[40px]">
                {products.map((item, i) => {
                  return <Card key={i} datas={item} />
                })}
              </div>
            </Container>
          </div>
          <Footer/>
    </>
  )
}

export default Index