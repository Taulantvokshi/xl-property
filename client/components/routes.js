import React, { lazy, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './routes.scss';
const HomePage = lazy(() => import('../components/home-page/_homepage'));
const About = lazy(() => import('../components/about-page/index'));
const Services = lazy(() => import('../components/services_page/index'));
const Owners = lazy(() => import('../components/owners-page/index'));
const ContactPage = lazy(() =>
  import('../components/owners-page/contact_page')
);

const Routes = () => {
  return (
    <section className="routes">
      <Suspense
        fallback={
          <div className="fallback-component">
            <img src="images/Loader.gif" />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about-us" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/owners" component={Owners} />
          <Route path="/contacts" component={ContactPage} />
        </Switch>
      </Suspense>
    </section>
  );
};

export default withRouter(Routes);
