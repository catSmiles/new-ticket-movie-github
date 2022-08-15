/* eslint-disable react-hooks/exhaustive-deps */
// import { Button, CustomCard } from '@tsamantanis/react-glassmorphism'
import { useEffect } from 'react';
import { CustomCard } from '@tsamantanis/react-glassmorphism';
import '@tsamantanis/react-glassmorphism/dist/index.css';
import '../../assets/Styles/circle.scss';
// import { Tabs, Radio, Space, Rate } from 'antd';
import { Tabs, Rate } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
// import { SET_CHI_TIET_PHIM } from '../../redux/actions/types/QuanLyRapType';
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapActions';
import moment from 'moment'; //npm i moment
// import { StarFilled, StarOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
const { TabPane } = Tabs;

function Detail(props) {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);

  console.log('filmDetail: ', filmDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    //Lấy thông tin param từ url
    let { id } = props.match.params;
    dispatch(layThongTinChiTietPhim(id));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: '100vh' }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={'0px'} // default border radius value is 10px
      >
        <div className="grid grid-cols-12 container max-w-screen-xl mx-auto">
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-3">
              <img
                className="col-span-1"
                src={filmDetail.hinhAnh}
                style={{
                  width: '100%',
                  height: 300,
                  objectFit: 'cover',
                  borderRadius: '4px',
                }}
                alt="123"
              />
              <div className="col-span-2 ml-5">
                <p className="text-sm">
                  <span className="mr-2"> Ngày chiếu:</span>
                  {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}
                </p>
                <p className="text-4xl my-2">{filmDetail.tenPhim}</p>
                <p className="text-base">{filmDetail.moTa}</p>
              </div>
            </div>
          </div>

          <div className="col-span-4 ml-4">
            <h1
              style={{
                marginLeft: '16px',
                color: 'yellow',
                fontWeight: 'bold',
                fontSize: 15,
              }}
            >
              Đánh giá
            </h1>
            <h1
              style={{ marginLeft: '16px' }}
              className="text-green-400 text-2xl"
            >
              <Rate
                allowHalf
                value={filmDetail.danhGia / 2}
                style={{ color: '#78ed78', fontSize: 30 }}
              />
            </h1>
            <div className={`c100 p${filmDetail.danhGia * 10} big`}>
              <p className="text-white text-base ml-4 mt-1">
                {filmDetail.danhGia * 10}%
              </p>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <br />
          </div>
        </div>
        <div className="mt-10 container max-w-screen-xl mx-auto bg-white px-5 py-5">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
              <div>
                <Tabs tabPosition={'left'}>
                  {filmDetail.heThongRapChieu?.map((htr, index) => {
                    return (
                      <TabPane
                        tab={
                          <div className="flex flex-row items-center justify-center">
                            <img
                              src={htr.logo}
                              className="rounded-full w-full"
                              style={{ width: 50 }}
                              alt="default"
                            />
                            <div className="text-center ml-2">
                              {htr.tenHeThongRap}
                            </div>
                          </div>
                        }
                        key={index}
                      >
                        {htr.cumRapChieu?.map((cumRap, index) => {
                          return (
                            <div className="mt-5" key={index}>
                              <div className="flex flex-row">
                                <img
                                  style={{ width: 60, height: 60 }}
                                  src={cumRap.hinhAnh}
                                  alt="default"
                                />
                                <div className="ml-2">
                                  <p
                                    style={{
                                      fontSize: 20,
                                      fontWeight: 'bold',
                                      lineHeight: 1,
                                    }}
                                  >
                                    {cumRap.tenCumRap}
                                  </p>
                                  <p
                                    className="text-gray-400"
                                    style={{ marginTop: 0 }}
                                  >
                                    {cumRap.diaChi}
                                  </p>
                                </div>
                              </div>
                              <div className="thong-tin-lich-chieu grid grid-cols-4">
                                {cumRap.lichChieuPhim
                                  ?.slice(0, 12)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        to="/"
                                        key={index}
                                        className="col-span-1 text-green-800 font-bold"
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format('hh:mm A')}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          );
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </div>
            </TabPane>
            <TabPane tab="Thông tin" key="2" style={{ minHeight: 300 }}>
              Thông tin
            </TabPane>
            <TabPane tab="Đánh giá" key="3" style={{ minHeight: 300 }}>
              Đánh giá
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}

export default Detail;
