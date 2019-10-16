import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../helpers/authentication';



const getViewLazy = view => lazy(() => import('../containers/' + view));

const PrivateRoute = ({ component: Component, ...params }) => (
  <Route {...params} render={(props) => (
    isAuthenticated() === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

const Routes = () => (
  <Switch>
    <Suspense fallback={<div> Carregando...</div>}>
     <PrivateRoute exact path="/" component={getViewLazy('Home')} />
      <PrivateRoute exact path="/dragon/:id" component={getViewLazy('Dragon')} />
      <PrivateRoute exact path="/new" component={getViewLazy('Dragon')} />
      <Route exact path="/login" component={getViewLazy('Login')} /> 
    </Suspense>
  </Switch>
);

export default Routes;