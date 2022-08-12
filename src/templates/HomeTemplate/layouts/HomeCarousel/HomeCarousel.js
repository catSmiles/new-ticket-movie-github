/* eslint-disable react-hooks/exhaustive-deps */
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCarouselAction } from '../../../../redux/actions/CarouselAction';

const contentStyle = {
  height: '600px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundPosition: 'top center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
};
function HomeCarousel() {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  console.log('arrImg: ', arrImg);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarouselAction());
  }, []);

  const renderImg = () => {
    return arrImg.map((item) => {
      return (
        <div key={item.maBanner}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              src={item.hinhAnh}
              className="w-full opacity-0"
              alt={item.maBanner}
            />
          </div>
        </div>
      );
    });
  };

  return <Carousel effect="fade">{renderImg()}</Carousel>;
}

export default HomeCarousel;
