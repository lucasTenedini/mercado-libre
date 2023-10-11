import React from 'react';
import HighShippingIcon from '../../../assets/icons/ic_shipping@2x.png';
import LowShippingIcon from '../../../assets/icons/ic_shipping.png';
import './item-info.scss';

interface Props {
  className?: string;
  title: string;
  address?: string;
  value: number | string;
  freeShipping?: boolean;
}


const ItemInfo: React.FC<Props> = ({
  value,
  freeShipping,
  title,
  address,
}) => {

  const validFreeShipping = () => {
    if (freeShipping)
      return <img
        alt="Frete disponível"
        className="shipping-icon"
        src={LowShippingIcon}
        srcSet={`${LowShippingIcon} 500w, ${HighShippingIcon} 768w `}
      />
  }

  return (
    <section id="item-info">
      <div className="price mt-1">
        <span>{value}</span>
        {validFreeShipping()}
        <p className="address">{address}</p>
      </div>
      <h1 className="title">{title}</h1>
    </section >
  );
};

export default ItemInfo;
