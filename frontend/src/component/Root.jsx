import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Links from "./Links";
import Link from "./Link";

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
`;

class Root extends Component {
  render() {
    return (
      <Router>
        <>
          <Title>Link Repository</Title>
          <Switch>
            <Route path="/" exact component={Links} />
            <Route path="/links" exact component={Links} />
            <Route path="/links/:id" component={Link} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default Root;
