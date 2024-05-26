import { Container, Header, Footer } from "@components";
import useProductStore from "../../store/products";
import { useStore } from "zustand";
import { useEffect, useMemo, useState } from "react";
import "./index.css";
import ImageGallery from "react-image-gallery";
import { HeartOutlined, MinusOutlined, PlusOutlined, QuestionCircleOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

function index() {
  const { getProductbyId, getProductPhoto } = useStore(useProductStore);
  const [arrow, setArrow] = useState('Show');
  const [data, setData]:any = useState([] || {});
  const [img, setImg] = useState([]);
  const [count, setCount] = useState(1);
  let id = localStorage.getItem("id") || "";
  id = id?.slice(1, -1);
  let text ='Мы доставляем товары на следующий день после заказа до собственных пунктов выдачи. Выберите на этапе оформления заказа наиболее удобный для вас адрес.'
  const sale = data.cost - ((data.cost / 100) * 10)


  async function getProduct() {
    const response = await getProductbyId({ id });
    const response2 = await getProductPhoto({ id });
    const rasm = response2?.data?.images.map((e: any) => {
      return e.image_url;
    });

    const images = rasm.map((e: any) => {
      return {
        original: e,
        thumbnail: e,
      };
    });
    setImg(images);
    setData(response.data);
  }
  console.log(data);
  useEffect(() => {
    getProduct();
  }, []);

  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }

    if (arrow === 'Show') {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  return (
    <>
      <Header />
      <div className="mt-[120px] mb-[400px]">
        <Container>
          <div className="flex justify-between">
            <div className="w-[500px] rounded-md overflow-hidden">
              <ImageGallery
                autoPlay={true}
                infinite={true}
                thumbnailPosition={"left"}
                showPlayButton={false}
                showFullscreenButton={false}
                items={img}
              />
            </div>
            <div className="w-[600px]">
              <div className="flex justify-between items-center">
                <div className="flex gap-[10px]">
                  <p className="text-[13px] text-[#00000084]">4.5 ( 61 оценка )</p>
                  <p className="text-[13px] text-[#00000084]">Более 600 заказов</p>
                </div>
                <div className="flex gap-[10px] cursor-pointer" onClick={() => console.log(data?.product_id)}>
                <HeartOutlined />
                <p>В желания</p>
                </div>
              </div>
              <p className="mt-[20px] mb-[10px] text-[24px] font-medium">{data.description}</p>
              <p className=" text-[24px] font-medium">Made in: {data.made_in}</p>
              <div className="flex gap-[30px] mb-[10px]">
                <p className="w-[100px] text-[15px] text-[#000000d2]">Продавец:</p>
                <p>ComFore</p>
              </div>
              <div className="flex gap-[30px] mb-[20px]">
                <div className="w-[100px] flex gap-2">
                <p className="text-[15px] text-[#000000d2]">Доставка:</p>
                <Tooltip placement="top" title={text} arrow={mergedArrow}>
                <QuestionCircleOutlined />
                </Tooltip>
                </div>
                <p className="text-[#000000d2]">1 день, бесплатно</p>
              </div>
              <hr />
              <p className="mt-[20px]">Количество:</p>
              <div className="flex mt-[10px] gap-[30px] items-center">
                <div className="flex border p-[10px] gap-[20px]">
                {count == 1 ? <MinusOutlined disabled/> : <MinusOutlined onClick={() => setCount(count - 1)} />}
                <p>{count}</p>
                {count == data.count ? <PlusOutlined disabled/> : <PlusOutlined onClick={() => setCount(count + 1)} />}
                </div>
                <p className="text-[16px] text-[#4fac3f]">В наличии {data.count}</p>
              </div>
              <p className="mt-[20px] mb-[10px]">Цена:</p>
              <div className="flex gap-[30px] items-center">
                <p className="font-bold text-[20px]">{sale * count} сум</p>
                <p className="text-[#000000ad] font-medium" style={{textDecoration: 'line-through'}}>{data.cost} сум</p>
                <p className="bg-[yellow] p-1 font-medium">Распродажа</p>
              </div>
              <div className="flex justify-between gap-2 mt-[20px]">
                <button className="bg-[#7000FF] block w-full h-[50px] rounded-lg text-white  font-semibold">Добавить в корзину</button>
                <button className="text-[#7000FF] block w-full h-[50px] rounded-lg border-[#7000FF] border font-semibold">Купить в 1 клик</button>
              </div>
              <div className="border rounded-xl px-[10px] py-[15px] mt-[40px]">
                <div className="mb-[10px]">
                  <p className="font-semibold">Быстрая доставка от 1 дня</p>
                  <p className="text-[15px] text-[#000000a1]">В пункты выдачи Uzum или курьером</p>
                </div>
                <hr/>
                <div className="mt-[10px] mb-[10px]">
                  <p className="font-semibold">Безопасная оплата удобным способом</p>
                  <p className="text-[15px] text-[#000000a1]">Оплачивайте картой, наличными или в рассрочку</p>
                </div>
                <hr/>
                <div className="mt-[10px]">
                  <p className="font-semibold">Простой и быстрый возврат</p>
                  <p className="text-[15px] text-[#000000a1]">Примем товары в течение 10 дней и сразу вернём деньги</p>
                </div>
              </div>
              <div className="mt-[20px] flex gap-[10px] px-[20px] py-[10px] bg-[#FFF8E6]">
                <ShoppingOutlined className="text-[22px]"/>
                <p>371 человек купил на этой неделе</p>
              </div>
              <p className="mt-[60px] mb-[10px]">Кратко о товаре:</p>
              <ul>
                  <li>Цвет: {data.color}</li>
                  <li>Для кого: {data.for_gender}</li>
                  <li>Минималный возраст: {data.age_min}</li>
                  <li>Максимальный возраст: {data.age_max}</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default index;
