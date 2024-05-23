import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Select, Form, Input} from 'antd';
import { Container } from '@components';
import { EyeInvisibleOutlined, EyeTwoTone, GithubOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { NavLink} from 'react-router-dom'
import { Auth } from '@store';
import { useStore } from 'zustand';
import { ToastContainer, toast } from 'react-toastify';
import { Register } from '../../../interface/auth';
import { PasswordValidation } from '../../../utils/register-validate';
import { ModalRegister } from '@ui';

const index: React.FC = () => {
  const [load, isload] = useState(false)
  const {Register} = useStore(Auth)
  const { Option } = Select;
  const [isactive, setisactive] = useState(false)
  const [email, setemail]:[string, any] = useState('')
  
  const onFinish: FormProps<Register>['onFinish'] = async (values) => {
    setemail(values.email)
    isload(true)
    const response = await Register(values)
    if(response.status == 201){
        isload(false)
        setisactive(true)
    }else if(response.response.status != 201){
        isload(false)
        toast.error('Xatolik mavjud')
    }
  };

  
  
  
  return (
    <>
    <ModalRegister active={isactive} setactive={setisactive} email={email} />
    <ToastContainer />
       <Container>
    <div className='max-w-[500px] mx-auto mt-[100px] border p-[40px] rounded-lg shadow-lg'>
       <Form
         initialValues={{ remember: true }}
         onFinish={onFinish}
         autoComplete="off">
          <p className='text-[18px] text-[#00000054] cursor-default'>Ismingiz</p>
         <Form.Item
           name="first_name"
           rules={[{ required: true, message: 'Iltimos ismingizni kiriting!' }]}
           >
           <Input className='text-[18px] font-medium py-[3px]'/>
         </Form.Item>
         <p className='text-[18px] text-[#00000054] cursor-default'>Familyangiz</p>
         <Form.Item
           name="last_name"
           rules={[{ required: true, message: 'Iltimos familyangizni kiriting!' }]}
           >
           <Input className='text-[18px] font-medium py-[3px]'/>
         </Form.Item>          
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
          rules={PasswordValidation}
          >
            <Input.Password className='text-[18px] font-medium py-[3px]' iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
          </Form.Item>
          <Form.Item name="gender" rules={[{ required: true, message: "Jinsingizni kiriting!" }]}>
            <Select
              placeholder="Jinsingizni kiriting"
              allowClear
            >
              <Option value="male">Erkak</Option>
              <Option value="female">Ayol</Option>
              <Option value="other">Boshqa</Option>
            </Select>
          </Form.Item>

         

          <Form.Item>
            <Button type='primary' htmlType='submit' loading={load} className='w-full h-[40px] mt-[20px] bg-[#2C87FF] text-[#FFFFFF] rounded-lg'>
              Register
            </Button>
          </Form.Item>
       </Form>







       <NavLink to={'/login'}>
         <p className='text-[15px] text-center text-[#2C87FF]'>Akkauntingiz bormi ?</p>
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
    </>
  )
}

export default index;