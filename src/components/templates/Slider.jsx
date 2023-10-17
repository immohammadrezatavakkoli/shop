import { Carousel } from 'antd';
import Image from 'next/image';``
import SlideOne from "../../assets/1.webp";
import SlideTwo from "../../assets/2.webp";
import SlideThree from "../../assets/3.webp";

const contentStyle = {
  height: '320px',
  textAlign: 'center',
};

const Slider = () => (
  <Carousel autoplay className='w-full'>
    <div>
      <Image
      style={contentStyle}
      src={SlideOne}
      alt="Slide 1"
      loading="lazy"
      />
    </div>
    <div>
      <Image
      style={contentStyle}
      src={SlideTwo}
      alt="Slide 2"
      loading="lazy"
      />
    </div>
    <div>
      <Image
      style={contentStyle}
      src={SlideThree}
      alt="Slide 3"
      loading="lazy"
      />
    </div>
  </Carousel>
);

export default Slider;
