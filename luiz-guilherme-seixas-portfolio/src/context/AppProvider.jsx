import PropTypes from 'prop-types';
/* import { useState } from 'react'; */
import AppContext from './AppContext';

function AppProvider({ children }) {
/*   const [projects, setProjects] = useState([]); */
  const values = {
    /* projects, */
  };
  return (
    <AppContext.Provider value={ values }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
