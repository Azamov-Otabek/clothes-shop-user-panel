import { Modal } from 'antd';
import {Input, Typography } from 'antd';
import type { GetProp } from 'antd';
import type { OTPProps } from 'antd/es/input/OTP'
import { Auth } from '@store';
import { useStore } from 'zustand';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import { useState } from 'react';


const App = (props:any) => {
  const { Title } = Typography;
  const {VerifyCode} = useStore(Auth)
  const navigate = useNavigate()
  const [inputDisabled, setInputDisabled] = useState(false);


  const onChange: GetProp<typeof Input.OTP, 'onChange'> = async (text) => {
    if (text.length === 8) {
      setInputDisabled(true); // Disable input
      setTimeout(() => {
        setInputDisabled(false); // Enable input after 5 seconds
      }, 3000);
    }
    
    const payload = {
      otp: text,
      email: props.email,
    }
    const response = await VerifyCode(payload)
    if(response.status == 200){
      toast.success("Ro'yhatdan muvaffaqiyatli o'tildi", {autoClose: 900})
      setTimeout(() => {
        navigate('/login')
      }, 1200);
    }else{
      toast.error("Xatolik mavjud", {autoClose: 900})
    }

  };

  const sharedProps: OTPProps = {
    onChange,
    disabled: inputDisabled,
  };


  const handleOk = () => {
    props.setactive(false);
  };

  const handleCancel = () => {
    props.setactive(false);
  };

  return (
    <>
      <Modal className='mt-[180px]' title="Email pochtangizni tasdiqlash kodi yuborildi. " open={props.active} onOk={handleOk} onCancel={handleCancel} footer={false}>
      <Title level={5}>8 raqamdan iborat son yuborildi</Title>
      <Input.OTP length={8} {...sharedProps} />
      </Modal>
    </>
  );
};

export default App;