import { Container } from '@components';
import { Carousel } from 'antd';


function index() {
  return (
    <>
    <div className='mt-[100px]'>
      <Container>
        <Carousel arrows infinite={true} autoplay>
          <div>
            <img className='w-full h-[500px] object-cover' src="https://images.sbs.com.au/dims4/default/6883055/2147483647/strip/true/crop/3230x1817+0+609/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fdrupal%2Ftopics%2Fpublic%2Fwomen_clothes_.jpg" alt="" />
          </div>
          <div>
          <img className='w-full h-[500px] object-cover' src="https://ctnbee.com/blog/en/wp-content/uploads/sites/2/2021/07/ubrania-na-lato-1.jpg" alt="" />
          </div>
          <div>
          <img className='w-full h-[500px] object-cover' src="https://clothesmentor.com/cdn/shop/files/ClothesMentor_Main_Spring_Shop_Cash_Shopify2.jpg?v=1707346739&width=1500" alt="" />
          </div>
          <div>
          <img className='w-full h-[500px] object-cover' src="https://images.contentstack.io/v3/assets/bltacc1a01c4d280f24/bltb7f90c73ddfcb1df/62c3c05ac75c5836dbd33262/pexels-mart-production-7679720.jpg" alt="" />
          </div>
        </Carousel>
      </Container>
    </div>
   </>
 );
}

export default index