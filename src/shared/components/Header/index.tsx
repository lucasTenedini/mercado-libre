import React, { useEffect, useState } from 'react';
import LowSearchIcon from '../../../assets/icons/ic_Search.png';
import HighSearchIcon from '../../../assets/icons/ic_Search@2x.png';
import LogoHighImage from '../../../assets/icons/Logo_ML@2x.png';
import LogoLowImage from '../../../assets/icons/Logo_ML.png';

import "./header.scss"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetQuery } from '../../../store/item/actions';

interface HeaderProps {
  handleSearch(query: string): void;
  searchText: string;
}

const Header: React.FC<HeaderProps> = ({ handleSearch, searchText }) => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch()

  useEffect(() => {
    setSearch(searchText);
  }, [searchText]);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search) {
      handleSearch(search);
    }
  }

  const handleClickLogo = () => {
    dispatch(resetQuery())
  }

  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={() => handleClickLogo()}>
            <img
              alt="Mercado Livre"
              src={LogoLowImage}
              srcSet={`${LogoLowImage} 500w, ${LogoHighImage} 768w`}
            />
          </Link>
        </div>
        <form
          className="products-search"
          onSubmit={(e) => handleSearchSubmit(e)}>
          <input
            onChange={({ target }) => setSearch(target.value)}
            placeholder="Nunca dejes de buscar"
            value={search}
          />
          <button type="submit">
            <img
              alt="Search items"
              src={LowSearchIcon}
              srcSet={`${LowSearchIcon} 500w, ${HighSearchIcon} 768w`}
            />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;