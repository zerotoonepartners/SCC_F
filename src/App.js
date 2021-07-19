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

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/form" component={Form} />
        <Route path="/barifurcation" component={Barifurcation} />
        <Route path="/detail" component={Detail} />
        <Route path="/info" component={Info} />
        <Route component={NotFound} />
        <SccContextProvider>
          <Route path="/eduform" component={EduForm} />
          <Route path="/edu" component={Edu} />
        </SccContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
