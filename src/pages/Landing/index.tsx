import React from 'react';
import 'antd/dist/antd.css';
import { List } from 'antd';
import RealEstateItem from '../../components/RealEstateItem';
import { RealEstateItemType } from '../../types/LandingPageType';

const list = require('./mock.json').data;

const LandingPage: React.FC = () => {
  const [data, setData] = React.useState(list);

  const onMarkAsExprie = React.useCallback(
    (item: RealEstateItemType) => {
      // todo
      const newData = [...data];
      const foundExpiredIndex = newData.findIndex(
        (currentValue: RealEstateItemType) => currentValue.id === item.id,
      );
      newData[foundExpiredIndex].status = 'expired';

      setData(newData);
    },
    [data],
  );

  return (
    <List
      grid={{ gutter: 16, column: 2 }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item: RealEstateItemType) => (
        <List.Item>
          <RealEstateItem onClickExpired={onMarkAsExprie} item={item} />
        </List.Item>
      )}
    />
  );
};

export default LandingPage;
