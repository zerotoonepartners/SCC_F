import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Main from './pages/main';
import Detail from './pages/detail';
import Form from './pages/form';
import EduForm from './pages/eduform';
import NotFound from './pages/notfound';
import Barifurcation from './pages/barifurcation';
import Edu from './pages/edu';
import { SccContextProvider } from './context/scc';
import Info from './pages/info';
// d
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/form" exact component={Form} />
      <Route path="/barifurcation" exact component={Barifurcation} />
      <Route path="/detail" exact component={Detail} />
      <Route path="/info" exact component={Info} />
      <SccContextProvider>
        <Route path="/eduform" exact component={EduForm} />
        <Route path="/edu" exact component={Edu} />
      </SccContextProvider>
      <Route path="/*" component={NotFound} />
    </BrowserRouter>
  );
}

export default App;
