import React from 'react';
import { useSelector } from 'react-redux';

import App from '../component/App';



const AppContainer = () => {
  const tokenSelector = useSelector((state) => state.tokenAuthentification);


  return (
    <App
      tokenAuthentification={tokenSelector.token}
    />
  );
 };

export default AppContainer;