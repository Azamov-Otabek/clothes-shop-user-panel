import { Container } from "@components"
import { PicCenterOutlined, UserOutlined, HeartOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import { Button, Input } from 'antd';
import { NavLink } from "react-router-dom";


function index() {
  const { Search } = Input;
  return (
    <header className='py-[20px] shadow-lg fixed top-0 w-full'>
      <Container>
         <nav className="flex items-center justify-between gap-9">
              <img className="w-[200px] h-[50px] object-cover" src="https://bevingrosso.it/wp-content/uploads/2020/12/logo-astoria.png" alt="" />
              <div className="flex items-center justify-between w-full gap-[20px]">  
                <Button className="h-[40px]" icon={<PicCenterOutlined />} iconPosition={'start'}>
                  Search
                </Button>
                <Search className="h-[40px]" placeholder="input search text" enterButton="Search" size="large"/>
                <NavLink to={'/login'}>
                  <Button className="h-[40px] font-semibold text-[16px]" type="text" icon={<UserOutlined />} iconPosition={'start'}>
                    Войти
                  </Button>
                </NavLink>
                <Button className="h-[40px] font-semibold text-[16px]" type="text" icon={<HeartOutlined />} iconPosition={'start'}>
                  Избранное
                </Button>
                <Button className="h-[40px] font-semibold text-[16px]" type="text" icon={<ShoppingCartOutlined />} iconPosition={'start'}>
                  Корзина
                </Button>
              </div>
         </nav>
      </Container>
    </header>
  )
}

export default index