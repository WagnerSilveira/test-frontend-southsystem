import React, { lazy, Suspense } from 'react';
import PropType from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../helpers/authentication';
import Loader from '../components/Loader';

const getViewLazy = (view) => lazy(() => import(`../containers/${view}`));

const PrivateRoute = ({ component: Component, exact, path }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      isAuthenticated() === true
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  />
);
PrivateRoute.propTypes = {
  component: PropType.object.isRequired,
  exact: PropType.bool.isRequired,
  path: PropType.string.isRequired,
};

const Routes = () => (
  <Switch>
    <Suspense fallback={<Loader />}>
      <PrivateRoute exact path="/" component={getViewLazy('Home')} />
      <PrivateRoute exact path="/dragon/:id" component={getViewLazy('Dragon')} />
      <PrivateRoute exact path="/new" component={getViewLazy('Dragon')} />
      <Route exact path="/login" component={getViewLazy('Login')} />
    </Suspense>
  </Switch>
);

export default Routes;
