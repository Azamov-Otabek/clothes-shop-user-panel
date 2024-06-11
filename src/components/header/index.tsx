import { Container } from "@components"
import { PicCenterOutlined, UserOutlined, HeartOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import { Button, Input } from 'antd';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { getCookies, removeCookies } from "@cookie";
import type { MenuProps} from 'antd';
import { Dropdown, Space } from 'antd';

function Index() {
  function logout(){
    removeCookies('token')
    removeCookies('first_name')
    removeCookies('refresh_token')
  }

  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '0',
    },
    {
      label: '2nd menu item',
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: <p onClick={logout}>Log Out</p>,
      key: '2',
    }
  ];
  const { Search } = Input;
  const [user] = useState(getCookies('first_name') || '')
  return (
    <header className='py-[20px] shadow-lg fixed top-0 w-full z-50 bg-white'>
      <Container>
         <nav className="flex items-center justify-between gap-9">
              <NavLink to={'/'}>
              <img className="w-[200px] h-[50px] object-cover" src="https://bevingrosso.it/wp-content/uploads/2020/12/logo-astoria.png" alt="" />
              </NavLink>
              <div className="flex items-center justify-between w-full gap-[20px]">  
                <Button className="h-[40px]" icon={<PicCenterOutlined />} iconPosition={'start'}>
                  Категория
                </Button>
                <Search className="h-[40px]" placeholder="Напишите что вы искаете ?" enterButton="Search" size="large"/>
                {
                      user != '' ? (            
                        <Dropdown menu={{ items }} trigger={['click']}>        
                          <Space onClick={(e) => e.preventDefault()}>
                            <Button className="h-[40px] font-semibold text-[16px]" type="text" icon={<UserOutlined />} iconPosition={'start'}>
                              {user}
                            </Button>
                          </Space>
                        </Dropdown>
                      ) : (
                        <NavLink to={'/login'}>
                          <Button className="h-[40px] font-semibold text-[16px]" type="text" icon={<UserOutlined />} iconPosition={'start'}>
                            Войти
                          </Button>
                        </NavLink>
                      )
                  }
                <NavLink to={'/likes' }>
                  <Button className="h-[40px] font-semibold text-[16px]" type="text" icon={<HeartOutlined />} iconPosition={'start'}>
                    Избранное
                  </Button>
                </NavLink>
                <Button className="h-[40px] font-semibold text-[16px]" type="text" icon={<ShoppingCartOutlined />} iconPosition={'start'}>
                  Корзина
                </Button>
              </div>
         </nav>
      </Container>
    </header>
  )
}

export default Index

