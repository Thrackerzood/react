import React from 'react';
import {Nav} from './components/nav';
import { GlobalStyle } from './components/style';

const App:React.FC = () => {
  return (<>
    <GlobalStyle/>
      <Nav/>
  </>)
}

export default App;