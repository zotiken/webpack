import React from "react";
import img from "./assets/webpack-logo.png";
import { connect } from "react-redux";
import { Route, Switch, NavLink } from "react-router-dom";
import Link2 from "./Link2";
import Link1 from "./Link1";
import Home from "./Home";

import "./app.scss";

function App() {
  return (
    <>
        <Switch>
        <Route path="/Link2" exact component={Link2} />
        <Route path="/Link1" exact component={Link1} />
        <Route path="/" exact component={Home} />
      </Switch>

      <section className="page__wrapper wrapper">
        <h1>Hello World</h1>
        <div className="page__block block">
          <img className="block__img" src={img} alt="" />
          <NavLink to="/Home">ссылка 1</NavLink>
          <NavLink to="/Link2">ссылка 2</NavLink>
          <NavLink to="/Link1">ссылка 3</NavLink>
        </div>
      </section>
    </>
  );
}

export default connect(null, null)(App);
