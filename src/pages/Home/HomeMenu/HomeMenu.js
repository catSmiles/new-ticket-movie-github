import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import React, { Fragment } from 'react';
const { TabPane } = Tabs;

class HomeMenu extends React.PureComponent {
  state = {
    tabPosition: 'left',
  };

  renderHeThongRap = () => {
    return this.props.heThongRapChieu?.map((heThongRap, index) => {
      let { tabPosition } = this.state;
      return (
        <TabPane
          tab={
            <img
              src={heThongRap.logo}
              className="rounded-full"
              width="50"
              alt="default"
            />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div style={{ width: '300px', display: 'flex' }}>
                      <img
                        src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg"
                        width="50"
                        alt="Default"
                      />{' '}
                      <br />
                      <div className="text-left ml-2">
                        {cumRap.tenCumRap}
                        <p className="text-red-200">Chi tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {/*Load phim tương ứng */}
                  {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="my-5">
                          <div style={{ display: 'flex' }}>
                            <img
                              style={{ height: 75, width: 75 }}
                              src={phim.hinhAnh}
                              alt={phim.tenPhim}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://picsum.photos/75/75';
                              }}
                            />

                            <div className="ml-2">
                              <h1 className="text-2xl text-green-700">
                                {phim.tenPhim}
                              </h1>
                              <p>{cumRap.diaChi}</p>
                              <div className="grid grid-cols-6 gap-6">
                                {phim.lstLichChieuTheoPhim
                                  ?.slice(0, 12)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        className="text-2xl text-green-400"
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        key={index}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format('hh:mm A')}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  render() {
    const { tabPosition } = this.state;
    return (
      <div className="container max-w-screen-xl mx-auto">
        <Tabs tabPosition={tabPosition}>{this.renderHeThongRap()}</Tabs>
      </div>
    );
  }
}

export default HomeMenu;

// function HomeMenu() {
//   const tabPosition = 'left';

//   return (
//     <>
//       <Tabs
//         tabPosition={tabPosition}
//         className="container max-w-screen-xl mx-auto"
//       >
//         <TabPane
//           tab={
//             <img
//               alt="default"
//               src="https://picsum.photos/200"
//               className="rounded-full"
//               width="50"
//             />
//           }
//           key="1"
//         ></TabPane>
//         <TabPane
//           tab={
//             <img
//               alt="default"
//               src="https://picsum.photos/200"
//               className="rounded-full"
//               width="50"
//             />
//           }
//           key="2"
//         >
//           Content of Tab 2
//         </TabPane>
//         <TabPane
//           tab={
//             <img
//               alt="default"
//               src="https://picsum.photos/200"
//               className="rounded-full"
//               width="50"
//             />
//           }
//           key="3"
//         >
//           Content of Tab 3
//         </TabPane>
//       </Tabs>
//     </>
//   );
// }
