import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { List, Row, Select } from 'antd';
import RealEstateItem from '../../components/RealEstateItem';
import { RealEstateItemType } from '../../types/LandingPageType';

const { Option } = Select;

const list = require('./mock.json').data;

const LandingPage: React.FC = () => {
  const [data, setData] = React.useState(list);
  const [filteredData, setFilteredData] = React.useState(list);
  const [filterStatus, setFilterStatus] = React.useState('all');

  useEffect(() => {
    const filtered = data.filter(
      (item: RealEstateItemType) =>
        filterStatus === 'all' || filterStatus === item.status,
    );
    setFilteredData(filtered);
  }, [filterStatus, data]);

  const onMarkAsExprie = (item: RealEstateItemType) => {
    // todo
    const newData = [...data];
    const foundExpiredIndex = newData.findIndex(
      (currentValue: RealEstateItemType) => currentValue.id === item.id,
    );
    newData[foundExpiredIndex].status = 'expired';

    setData(newData);
  };

  const handleChange = (status) => {
    setFilterStatus(status);
  };

  return (
    <div data-testid="landing-test-id" style={{ padding: '20px' }}>
      <Row justify="end" style={{ marginBottom: 20 }}>
        <Select
          style={{ width: 100 }}
          defaultValue="all"
          onChange={handleChange}
        >
          <Option value="all">All</Option>
          <Option value="active">Active</Option>
          <Option value="expired">Expired</Option>
        </Select>
      </Row>
      <Row>
        <List
          grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }}
          itemLayout="horizontal"
          dataSource={filteredData}
          renderItem={(item: RealEstateItemType) => (
            <List.Item>
              <RealEstateItem onClickExpired={onMarkAsExprie} item={item} />
            </List.Item>
          )}
        />
      </Row>
    </div>
  );
};

export default LandingPage;
