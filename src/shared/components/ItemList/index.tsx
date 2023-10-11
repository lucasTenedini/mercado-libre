import React, { ReactNode } from 'react';

import './item-list.scss';
import { Link, } from 'react-router-dom';
import { Item } from '../../../store/item/types';
import Picture from '../Picture';
import ItemInfo from '../ItemInfo';
import { formatNumberToCurrency } from '../../utils/formatter.util';
interface Props {
    items: Item[];
}

const ItemList: React.FC<Props> = ({ items }) => {

    return (
        <ol className="item-list">
            {items.map(
                ({
                    id,
                    title,
                    picture,
                    free_shipping,
                    price,
                    address,
                }) => (
                    <li className="item-row" key={id}>
                        <Link to={`/items/${id}`}>
                            <div className="img-container">
                                <Picture alt={title} src={picture} />
                            </div>
                            <ItemInfo
                                address={address}
                                freeShipping={free_shipping}
                                title={title}
                                value={formatNumberToCurrency(price.currency, price.decimals)}
                            />
                        </Link>
                    </li>
                ),
            )}
        </ol>
    );
};

export default React.memo(ItemList);
