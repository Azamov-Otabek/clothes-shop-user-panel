import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input} from 'antd';
import { Container } from '@components';
import { EyeInvisibleOutlined, EyeTwoTone, GithubOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';


type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const index: React.FC = () => {
  const [load, isload] = useState(false)
  return (
    <Container>
    <div className='w-[500px] mx-auto mt-[200px] border p-[40px] rounded-lg shadow-lg'>
       <Form
         initialValues={{ remember: true }}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
         autoComplete="off">
           
         <p className='text-[18px] text-[#00000054] cursor-default'>Email</p>
         <Form.Item
           name="email"
           rules={[{ required: true, message: 'Iltimos emailingizni kiriting!' }]}
           >
           <Input className='text-[18px] font-medium py-[3px]'/>
         </Form.Item>
          <p className='text-[18px] text-[#00000054] cursor-default' >Password</p>
          <Form.Item
          name='password'
          rules={[{ required: true, message: "Iltimos parolingizni kiriting!"}]}
          >
            <Input.Password className='text-[18px] font-medium py-[3px]' iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
          </Form.Item>

          <div className='flex justify-between items-center'>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Eslab qolish</Checkbox>
            </Form.Item>
            <NavLink to={'/register'}>
              <p className='text-[16px] text-[#2C87FF]'>Parolni unutdingizmi?</p>
            </NavLink>
          </div>

          <Form.Item>
            <Button type='primary' htmlType='submit' loading={load} className='w-full h-[40px] mt-[20px] bg-[#2C87FF] text-[#FFFFFF] rounded-lg'>
              Kirish
            </Button>
          </Form.Item>
       </Form>
       <NavLink to={'/register'}>
         <p className='text-[15px] text-center text-[#2C87FF]'>Yangi akkaunt ochish</p>
       </NavLink>
       <br/>
       <hr/>

       <div className='flex justify-center items-center mt-[30px] gap-[40px]'>
            <GithubOutlined className='text-[30px] cursor-pointer text-[#8e8a8a]' />         
            <GoogleOutlined className='text-[30px] cursor-pointer text-[red]' />               
            <FacebookOutlined className='text-[30px] cursor-pointer text-[blue]'/>
       </div>
    </div>
 </Container>
  )
}

export default index;