import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authactions";
import { Provider } from "react-redux";
import store from "./store";

import Appointments from "./pages/appointments";
import Homepage from "./pages/homepage";
import Main from "./pages/main";
import Medications from "./pages/medications";
import Overview from "./pages/overview";
import background from "./pictures/wallpaper.png";

// Check for token
if (localStorage.jwtToken) {
  // Set auth header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and IsAuthenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends React.Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url(${background})`;
    // ------    put on page load js here ------ //
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/appointments" component={Appointments} />
            <Route exact path="/homepage" component={Homepage} />
            <Route path="/medications" component={Medications} />
            <Route path="/overview" component={Overview} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
