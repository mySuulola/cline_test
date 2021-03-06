import React, { Suspense } from "react";
import { connect } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { ErrorFallBack } from "./lib/components/ErrorFallBack/ErrorFallBack";
import routes from "./lib/routes";
import GuestNav from "./lib/components/Nav/GuestNav";
import UserNav from "./lib/components/Nav/UserNav";
import { Loader } from "./lib/components/Loaders/Loaders";
import "./assets/output.css";

function App({ auth, userData }) {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <Suspense fallback={<Loader fullscreen />}>
          <div className={`${auth ? 'bg-gray-100': 'bg-gray-100' } min-h-screen h-screen w-100`}>
            {auth && userData ? <UserNav userData={userData} /> : <GuestNav />}
            <Switch>
              {routes.map((route, i) => (
                <Route key={i} {...route} />
              ))}
            </Switch>
          </div>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.isLoggedIn,
    userData:
      state.auth.userData && state.auth.userData.profileObj
        ? state.auth.userData.profileObj
        : null,
  };
};

export default connect(mapStateToProps, null)(App);
