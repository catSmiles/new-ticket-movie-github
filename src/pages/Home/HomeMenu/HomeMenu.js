import { Tabs } from 'antd';

const { TabPane } = Tabs;
function HomeMenu() {
  const tabPosition = 'left';

  return (
    <>
      <Tabs
        tabPosition={tabPosition}
        className="container max-w-screen-xl mx-auto"
      >
        <TabPane
          tab={
            <img
              alt="default"
              src="https://picsum.photos/200"
              className="rounded-full"
              width="50"
            />
          }
          key="1"
        ></TabPane>
        <TabPane
          tab={
            <img
              alt="default"
              src="https://picsum.photos/200"
              className="rounded-full"
              width="50"
            />
          }
          key="2"
        >
          Content of Tab 2
        </TabPane>
        <TabPane
          tab={
            <img
              alt="default"
              src="https://picsum.photos/200"
              className="rounded-full"
              width="50"
            />
          }
          key="3"
        >
          Content of Tab 3
        </TabPane>
      </Tabs>
    </>
  );
}

export default HomeMenu;
