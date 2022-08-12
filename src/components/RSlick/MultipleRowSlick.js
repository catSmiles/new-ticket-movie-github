import Slider from 'react-slick';
// import { LeftOutlined, RightOutlined } from '@ant-design/icons';

// reactSlick css
import 'slick-carousel/slick/slick-theme.css';

import styleSlick from './MultipleRowSlick.module.css'; // Tang do uu tien css
import Film from '../Film/Film';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: 'block', left: '-50px' }}
      onClick={onClick}
    ></div>
  );
}

function MultipleRowSlick({ arrFilm }) {
  console.log('arrFilm: ', arrFilm);
  const renderFilms = () => {
    return arrFilm.map((item, index) => {
      return (
        <div className={`${styleSlick['width-item']}`} key={index}>
          <Film />
        </div>
      );
    });
  };
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <h2>Multiple Rows</h2>
      <Slider {...settings}>
        {renderFilms()}
        {renderFilms()}
        {renderFilms()}
        {renderFilms()}
        {renderFilms()}
        {renderFilms()}
        {renderFilms()}
        {renderFilms()}
        {renderFilms()}
        {renderFilms()}
      </Slider>
    </>
  );
}

export default MultipleRowSlick;
