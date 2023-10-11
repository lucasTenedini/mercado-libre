import React from 'react';

import './breadcrumb.scss';
import { Link } from 'react-router-dom';
import RightIcon from '../../../assets/icons/right.svg';

interface Props {
    categories: string[];
}

const Breadcrumb: React.FC<Props> = ({ categories }) => {

    const isLast = (index: number): boolean => {
        return index === categories.length - 1;
    }

    return (
        <section id="breadcrumb">
            <ul className="list">
                {categories.map((element: string, index: number) => (
                    <li
                        className={isLast(index) ? 'element-active' : ''}
                        key={`${element.replace(' ', '')}-${index}`}>
                        <Link to={`/items?search=${element}`}>{element}</Link>
                        {!isLast(index) && (
                            <img
                                alt="Arrow right icon"
                                className="icon-arrow-right"
                                src={RightIcon}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Breadcrumb;
