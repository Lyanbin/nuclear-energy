import React from 'react';
import './index.css';
import { Route, Switch,Link, BrowserRouter as Router } from 'react-router-dom';
import Pinta from '../pinta/index';

const nav = [
  {
    name: '制作',
    path: '/'
  },
  {
    name: '换脸',
    path: '/a'
  }
]

function getMenus() {
  return <div className="menus-items">
    {
      nav.map(item => (
        <Link className="menus-item" key={item.path} to={item.path}>{item.name}</Link>
      ))
    }
  </div>
}

export default function Menus() {
  return (
    <section className="menus">
      <Router>
        { getMenus() }
        <Switch>
          <Route path="/" component={Pinta}></Route>
        </Switch>
      </Router>
    </section>
  );
}