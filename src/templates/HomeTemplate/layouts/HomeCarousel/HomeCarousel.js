import { Carousel } from 'antd';

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function HomeCarousel() {
  return (
    <Carousel effect="fade">
      <div>
        <div style={contentStyle}>
          <img src="https://picsum.photos/1000" className="w-full" alt="123" />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src="https://picsum.photos/1000" className="w-full" alt="123" />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src="https://picsum.photos/1000" className="w-full" alt="123" />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src="https://picsum.photos/1000" className="w-full" alt="123" />
        </div>
      </div>
    </Carousel>
  );
}

export default HomeCarousel;
