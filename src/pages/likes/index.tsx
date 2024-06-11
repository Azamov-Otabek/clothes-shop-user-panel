import { useStore } from "zustand"
import useLikesStore from "../../store/likes"
import { useEffect, useState } from "react"
import { Container } from "@components"
import { Card } from "@ui"


function index() {
  const {Getlike} = useStore(useLikesStore)
  const [data, setData] = useState([])

  async function GetData(){
    const response = await Getlike({page: 1, limit: 20})
    setData(response.data.products)
  }


  useEffect(()=> {
    GetData()
  }, [])


  return (
    <div className="mt-[120px] mb-[150px]">
      <Container>
        <div className="flex gap-[30px]">
            {
              data?.map((item, i) => {
                return <Card key={i} datas={item} />
              })
            }
        </div>
      </Container>
    </div>
  )
}

export default index