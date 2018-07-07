import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authactions";
import { Provider } from "react-redux";
import store from "./store";
import Appointments from "./pages/appointments";
import Homepage from "./pages/homepage";
import Main from "./pages/main";
import Signup from "./pages/signup";
import Medications from "./pages/medications";
import Overview from "./pages/overview";
import background from "./pictures/wallpaper.png";
import Navbar from "./components/Navbar";
import About from "./pages/about";
import Profile from "./pages/profile";
import EditProfile from "./pages/editProfile";
import screen1 from "./pictures/test.png";
import "./css/desktop.css";
import "./device-mockups/device-mockups.min.css";


const SomeComponent = withRouter(props => <Navbar {...props} />);
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
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  componentDidMount() {
    document.body.style.backgroundImage = `url(${background})`;
    // ------    put on page load js here ------ //
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 400;
    if (isMobile) {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <SomeComponent />
            <Route exact path="/" component={Main} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/appointments" component={Appointments} />
            <Route exact path="/homepage" component={Homepage} />
            <Route path="/medications" component={Medications} />
            <Route path="/overview" component={Overview} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/editProfile" component={EditProfile} />
          </div>
        </Router>
      </Provider>
    );
  } else {
      return (
        <div className="wrapper">
          <header className="masthead">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-7 my-auto">
                  <div className="header-content mx-auto">
                    <h1 className="mb-5">RX Tracker is an app which aims to simplify keeping track of your pills. </h1>
                  </div>
                </div>
                <div className="col-lg-5 my-auto">
                  <div className="device-container">
                    <div className="device-mockup iphone6_plus portrait black">
                      <div className="device">
                        <div className="screen">
                          <img src={screen1} className="img-fluid mockImg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="download bg-primary text-center" id="download">
            <div className="container">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <h2 className="section-heading">Meet the team behind RX Tracker</h2>
                  <p></p>
                </div>
              </div>
            </div>
          </section>

          <section className="features" id="features">
            <div className="container">
  
              <div className="row">
                <div className="col-lg-4 my-auto">
                  <div className="device-container">
                    <div className="device-mockup iphone6_plus portrait white">
                      <div className="device">
                        <div className="screen">
                          <img src="img/test.png" class="img-fluid" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 my-auto">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="feature-item">
                          <i className="icon-screen-smartphone text-primary"></i>
                          <h3>Device Mockups</h3>
                          <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="feature-item">
                          <i className="icon-camera text-primary"></i>
                          <h3>Flexible Use</h3>
                          <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="feature-item">
                          <i className="icon-present text-primary"></i>
                          <h3>Free to Use</h3>
                          <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="feature-item">
                          <i className="icon-lock-open text-primary"></i>
                          <h3>Open Source</h3>
                          <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="cta">
            <div className="cta-content">
              <div className="container">
                <h2>Stop waiting.<br />Start building.</h2>

              </div>
            </div>
            <div className="overlay"></div>
          </section>
        </div>
      );
    }
  }
}

export default App;
