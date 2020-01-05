import React from 'react';

import Header from './elements/Header';
import {GlobalStyle} from './styles/GlobalStyle';

import Home from './Home';

const App = () => {
return <div>
    <Header />
    <Home />
    <GlobalStyle />
</div>
}
export default App;



//1.JSX is a synthetic sugar for React.createElement
//2.JSX selfcloses
//3.User defined components must start in caputal letter
//4. You can use javascript in between components
//5. Components can be nested
