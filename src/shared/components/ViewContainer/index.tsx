import React, { ReactNode } from 'react';

import './view-container.scss';
import Breadcrumb from '../Breachcrumb';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoadingSelector, getSearchQuerySelector } from '../../../store/item/selector';
import Loader from '../loader';
import SeoMetaTags from '../SeoMetaTags';

interface Props {
    pageDescription: string;
    categories: string[];
    children: string | JSX.Element | JSX.Element[] | ReactNode;
}

const ViewContainer: React.FC<Props> = ({ pageDescription, categories, children }) => {
    const navigate = useNavigate()
    const searchQuery = useSelector(getSearchQuerySelector);
    const loading = useSelector(getLoadingSelector)

    function onSearchSubmit(query: string) {
        navigate(`/items?search=${query}`)
    }

    return (
        <main id="page">
            <SeoMetaTags description={pageDescription}></SeoMetaTags>
            <Header handleSearch={onSearchSubmit} searchText={searchQuery}></Header>
            <div className="container">
                {loading ? (
                    <div className="content-loader"><Loader></Loader></div>
                ) : (
                    <>
                        <Breadcrumb categories={categories}></Breadcrumb>
                        <div className="content mb-2">
                            {children}
                        </div>
                    </>)}
            </div>
        </main>
    );
};

export default ViewContainer;
