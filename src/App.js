import logo from './logo.svg';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Main from './pages/main';
import Detail from './pages/detail';
import Form from './pages/form';
import EduForm from './pages/eduform';
import NotFound from './pages/notfound';
import Barifurcation from './pages/barifurcation';
import EduLanding from './pages/eduLanding';
import Edu from './pages/edu';
import { SccContextProvider } from './context/scc';
import Info from './pages/info';
import ScrollToTop from './components/common/scrollToTop';
import Test from './pages/test';
import Consult from './pages/consult';

function App() {
  const history = useHistory();
  return (
    <SccContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/form" component={Form} />
          <Route path="/barifurcation" component={Barifurcation} />
          <Route path="/detail" component={Detail} />
          <Route path="/info" component={Info} />
          <Route path="/eduform" component={EduForm} />
          <Route path="/edu" component={Edu} />
          <Route path="/eduLanding" component={EduLanding} />
          <Route path="/test" component={Test} />
          <Route path="/consult" component={Consult} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </SccContextProvider>
  );
}

export default App;
