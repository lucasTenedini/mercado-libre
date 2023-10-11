import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import SearchView from '../views/search';

//Lazy loading
const ItemListView = React.lazy(() => import('../views/item-list'));
const ItemDetailView = React.lazy(() => import('../views/item-detail'));

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SearchView></SearchView>} />
                <Route path="/items" element={
                    <React.Suspense fallback={<></>}>
                        <ItemListView />
                    </React.Suspense>
                } />
                <Route path="/items/:id" element={
                    <React.Suspense fallback={<></>}>
                        <ItemDetailView />
                    </React.Suspense>
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
