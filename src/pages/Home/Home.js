/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import HomeMenu from './HomeMenu/HomeMenu';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';

// Kêt nối redux
import { useSelector, useDispatch } from 'react-redux';
// import Film from '../../components/Film/Film';
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick';

function Home(props) {
  console.log('Home: ', props);
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  console.log('arrFilm: ', arrFilm);
  const dispatch = useDispatch();
  console.log('propsHome: ', arrFilm);

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action); //dispatch function từ thunk
  }, []);

  // const renderFilms = () => {
  //     return arrFilm.map((phim, index) => {
  //         return <Film key={index} />
  //     })
  // }

  return (
    <>
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
      <HomeMenu />
    </>
  );
}

export default Home;
