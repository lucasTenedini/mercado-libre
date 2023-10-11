import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemStateSelector } from '../../store/item/selector';
import { useParams } from 'react-router-dom';
import ViewContainer from '../../shared/components/ViewContainer';
import { itemRequest } from '../../store/item/actions';
import ItemDetail from '../../shared/components/ItemDetail';
import { formatNumberToCurrency } from '../../shared/utils/formatter.util';
import ErrorMessage, { MessageError } from '../../shared/components/ErrorMessage';

const ItemDetailView: React.FC = () => {
    const {
        categories,
        error,
        selectedItem,
    } = useSelector(getItemStateSelector);

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (!!id) {
            dispatch(itemRequest(id));
        }
    }, [dispatch, id]);

    const errorMessage = (<ErrorMessage type={MessageError.INTERNAL_SERVER_ERROR}></ErrorMessage>)

    const itemDetail =
        !!selectedItem ? (
            <ItemDetail
                condition={selectedItem.condition}
                description={String(selectedItem.description)}
                title={selectedItem.title}
                picture={selectedItem.picture}
                sales={Number(selectedItem.sold_quantity)}
                value={formatNumberToCurrency(selectedItem?.price?.currency, selectedItem?.price?.decimals)}
            />
        ) : errorMessage;

    return (
        <ViewContainer
            pageDescription="Detalle del producto"
            categories={categories}>
            {error ? errorMessage : itemDetail}
        </ViewContainer>
    );
};

export default ItemDetailView;
