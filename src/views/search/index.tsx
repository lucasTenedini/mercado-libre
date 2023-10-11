import React from 'react';
import { useSelector } from 'react-redux';
import { getSearchQuerySelector } from '../../store/item/selector';
import { useNavigate } from 'react-router-dom';
import Header from '../../shared/components/Header';
import SeoMetaTags from '../../shared/components/SeoMetaTags';

const SearchView: React.FC = () => {
    const navigate = useNavigate()
    const searchQuery = useSelector(getSearchQuerySelector);

    function onSearchSubmit(query: string) {
        navigate(`/items?search=${query}`)
    }

    return <>
        <SeoMetaTags description="Caja de búsqueda"></SeoMetaTags>
        <Header handleSearch={onSearchSubmit} searchText={searchQuery} />
    </>;
};

export default SearchView;
