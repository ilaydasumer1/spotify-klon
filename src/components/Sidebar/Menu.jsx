import React from 'react'
import { Icon } from '../../icons';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="px-2">
      <ul flex flex-col>
        <li>
          <NavLink activeClassName="bg-active text-white"
           to={"/"} className="h-10 flex items-center text-sm font-semibold text-white hover:text-white px-4 rounded bg-active gap-x-4">
            <span>
              <Icon name="home" size={24} />
            </span>
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/search"}
            className="h-10 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded gap-x-4"
          >
            <span>
              <Icon name="search" size={24} />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/collection"}
            className="h-10 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded gap-x-4"
          >
            <span>
              <Icon name="collection" size={24} />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu
