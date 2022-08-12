import { Route } from 'react-router-dom';
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import HomeCarousel from './layouts/HomeCarousel/HomeCarousel';

function HomeTemplate({ Component, ...props }) {
  //path, exact, Component
  return (
    <Route
      {...props}
      render={(propsRoute) => {
        return (
          <>
            <Header {...propsRoute} />
            <HomeCarousel {...propsRoute} />
            <Component {...propsRoute} />
            <Footer />
          </>
        );
      }}
    />
  );
}

export default HomeTemplate;
