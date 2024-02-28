import React, { ReactNode } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

interface ILayoutRoute {
  exact?: boolean;
  path: string;
  component: ReactNode;
  title?: string;
}

function App() {
  const LayoutRoute = ({ exact, path, component, title }: ILayoutRoute) => {
    return (
      <Route
        exact={exact}
        path={path}
        render={() => {
          return <Layout title={title}>{component}</Layout>;
        }}
      ></Route>
    );
  };

  return (
    <Router>
      <Switch>
        <LayoutRoute title="Home" exact path="/" component={<HomePage />} />
      </Switch>
    </Router>
  );
}

export default App;
