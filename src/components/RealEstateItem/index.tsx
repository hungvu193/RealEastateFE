import React from 'react';
import { RealEstateItemType } from '../../types/LandingPageType';
import { Button, Image } from 'antd';
import ReadMoreReact from 'read-more-react';
import styles from './styles.module.scss';
import StatusView from './StatusView';

const RealEstateItem: React.FC<{
  item: RealEstateItemType;
  onClickExpired: (item: RealEstateItemType) => void;
}> = ({ item, onClickExpired }) => (
  <div datatest-id="real-estate-item" className={styles.item_container}>
    <Image className={styles.bg_estate} src={item.image} alt="img" />
    <div className={styles.info_estate}>
      <div className={styles.price_and_status}>
        <h4>
          Asking Price:
          <br />
          <div>
            <b className={styles.price}>{item.askingPrice}</b>
          </div>
        </h4>
        <StatusView
          datatest-id="estate-item-status"
          isExpried={item.status === 'expired'}
        />
      </div>

      <p>
        Postal Code: {item.postCode}
        <br />
        Address: {item.address}
      </p>
      <span>
        <div className={styles.dot} />
        Number of Bedrooms: {item.numberOfBedroom}
      </span>
      <ReadMoreReact
        text={item.desc}
        min={100}
        ideal={100}
        max={item.desc.length}
        readMoreText="Read more"
      />
      <div>
        <Button
          datatest-id="estate-button"
          disabled={item.status === 'expired'}
          onClick={() => onClickExpired(item)}
        >
          {item.status === 'expired' ? 'Expired' : 'Mark as Expire'}
        </Button>
      </div>
    </div>
  </div>
);

export default RealEstateItem;
