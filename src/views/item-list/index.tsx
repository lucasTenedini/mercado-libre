import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemStateSelector } from '../../store/item/selector';
import { useSearchParams } from 'react-router-dom';
import ViewContainer from '../../shared/components/ViewContainer';
import { searchRequest } from '../../store/item/actions';
import ItemList from '../../shared/components/ItemList';
import ErrorMessage, { MessageError } from '../../shared/components/ErrorMessage';

const ItemListView: React.FC = () => {
    const {
        items,
        categories,
        error,
    } = useSelector(getItemStateSelector);

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const search = searchParams.get('search')
        if (!!search) {
            dispatch(searchRequest(search));
        }
    }, [dispatch, searchParams]);

    const itemList = items.length > 0 ? <ItemList items={items} /> : <ErrorMessage type={MessageError.NOT_FOUND}></ErrorMessage>;

    return (
        <ViewContainer
            pageDescription="Resultado de la búsqueda"
            categories={categories}>
            {error ? (<ErrorMessage type={MessageError.INTERNAL_SERVER_ERROR}></ErrorMessage>) : itemList}
        </ViewContainer >
    );
};

export default ItemListView;