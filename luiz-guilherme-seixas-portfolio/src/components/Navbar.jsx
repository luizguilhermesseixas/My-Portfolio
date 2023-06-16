import React from 'react';
import { useHistory } from 'react-router-dom';

function Navbar() {
  const history = useHistory();
  return (

    <nav>
      <span>
        Luiz G. Seixas
      </span>
      <button onClick={ () => history.push('/') }>
        Home
      </button>
      <button onClick={ () => history.push('/about') }>
        About
      </button>
      <button onClick={ () => history.push('/projects') }>
        Projects
      </button>
    </nav>

  );
}

export default Navbar;
