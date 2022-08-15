/* eslint-disable react/jsx-pascal-case */
import Slider from 'react-slick';
// import { LeftOutlined, RightOutlined } from '@ant-design/icons';

// reactSlick css
import 'slick-carousel/slick/slick-theme.css';

import styleSlick from './MultipleRowSlick.module.css'; // Tang do uu tien css.
// import Film from '../Film/Film';
import Film_Flip from '../Film/Film_Flip';
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from '../../redux/actions/types/QuanLyPhimType';

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
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  console.log('arrFilm: ', arrFilm);
  const renderFilms = () => {
    return arrFilm.slice(0, 12).map((item, index) => {
      return (
        <div className="mt-2" key={index}>
          <Film_Flip item={item} />
        </div>
      );
    });
  };
  let activeClassDC = dangChieu === true ? 'active_Film' : 'none_active_Film';
  let activeClassSC = sapChieu === true ? 'active_Film' : 'none_active_Film';
  console.log('activeSC: ', activeClassSC);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <button
        className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`}
        onClick={() => {
          const action = { type: SET_FILM_DANG_CHIEU };
          dispatch(action);
        }}
      >
        PHIM ĐANG CHIẾU
      </button>
      <button
        className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`}
        onClick={() => {
          const action = { type: SET_FILM_SAP_CHIEU };
          dispatch(action);
        }}
      >
        PHIM SẮP CHIẾU
      </button>
      <Slider {...settings}>{renderFilms()}</Slider>
    </>
  );
}

export default MultipleRowSlick;
