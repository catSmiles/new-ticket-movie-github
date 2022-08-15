/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import HomeMenu from './HomeMenu/HomeMenu';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapActions';
import HomeCarousel from '../../templates/HomeTemplate/layouts/HomeCarousel/HomeCarousel';

// Kêt nối redux
import { useSelector, useDispatch } from 'react-redux';
// import Film from '../../components/Film/Film';
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick';

function Home(props) {
  console.log('Home: ', props);
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  console.log('arrFilm: ', arrFilm);
  const dispatch = useDispatch();
  console.log('propsHome: ', arrFilm);

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action); //dispatch function từ thunk
    dispatch(layDanhSachHeThongRapAction());
  }, []);

  // const renderFilms = () => {
  //     return arrFilm.map((phim, index) => {
  //         return <Film key={index} />
  //     })
  // }

  return (
    <>
      <HomeCarousel />
      <section className="text-gray-600 body-font">
        <div className="container max-w-screen-xl px-5 py-24 mx-auto">
          <MultipleRowSlick arrFilm={arrFilm} />
          {/* <div
            className="flex flex-wrap  "
            style={{ justifyContent: 'center' }}
          >
            {renderFilms()}
          </div> */}
        </div>
      </section>
      <HomeMenu heThongRapChieu={heThongRapChieu} />
    </>
  );
}

export default Home;
