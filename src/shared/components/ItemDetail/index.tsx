import React from 'react';
import './item-detail.scss';
import Picture from '../Picture';

interface Props {
  condition: string;
  title: string;
  sales: number;
  value: string;
  description: string;
  picture: string;
}


const ItemDetail: React.FC<Props> = ({
  condition,
  title,
  sales,
  value,
  description,
  picture,
}) => {

  return (
    <section id="item-detail" className="m-1">
      <div className="row">
        <div className="img-container">
          <Picture alt={title} src={picture} large />
        </div>
        <div className="item-info">
          <span className="condition-sales">{`${condition} - ${sales} vendidos`}</span>
          <h1 className="title">{title}</h1>
          <p className="price text-bold mb-2">{value}</p>
          <div className="mr-2">
            <button
              className="btn btn-primary"
              onClick={() => alert('teste')}
              type="button">
              Comprar
            </button>
          </div>
        </div>
      </div>
      <div className="item-description">
        <h2 className="text-bold">Descripción del producto</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}
export default ItemDetail;
