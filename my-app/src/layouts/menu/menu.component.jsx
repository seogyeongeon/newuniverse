import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Code</Link>
        </li>
        <li>
          <Link to="/intro">Issues</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Menu;