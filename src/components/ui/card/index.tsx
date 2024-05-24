import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { getCard } from "../../../interface/products"


function index(props:getCard) {
  const {datas} = props
  let card = Number(datas?.description?.length)
  let desc = ''
  if(card > 30){
      desc = datas?.description?.slice(0, 30) + '...'
  }
  return (
    <div className="w-[270px] h-[400px] border rounded-lg overflow-hidden hover:shadow-xl duration-300 cursor-pointer relative">
      <img className="h-[200px] bg-[#f2efef95] object-contain w-full" src={datas?.image_url} alt="IMG" />
      <div className="p-[10px] h-[130px]">
        <p className="text-[16px] text-[#0000008a] h-[50px] w-[200px]">{desc ? desc : datas?.description}</p>
        <p className="text-[13px] text-[#0000008a]">4.5 (43отзыва)</p>
        <p className="font-bold mb-6"><span className="text-[#0000008a]">for:</span> {datas?.for_gender}</p>
      </div>
      <div className="p-[10px] h-[50px]">
        <p className="text-[#00000067]" style={{textDecoration: 'line-through'}}>{datas?.count}$</p>
        <p className="font-bold bg-yellow-400 w-11 text-center rounded-md">{datas?.discount}$</p>
      </div>
        <HeartOutlined className=" absolute top-4 text-[24px] right-4"/>
        <ShoppingCartOutlined className=" absolute bottom-4 text-[24px] right-4"/>
    </div>
  )
}

export default index