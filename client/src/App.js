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
import screen2 from "./pictures/screenshot2.png";
import "./css/desktop.css";
import "./device-mockups/device-mockups.min.css";
import corey from "./pictures/corey.jpeg"
import joey from "./pictures/joey.jpeg"
import wes from "./pictures/wes.jpeg"
import patrick from "./pictures/patrick.jpg"
import geina from "./pictures/geina.jpeg"

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
            <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="my-4">Meet the team behind RX Tracker</h2>
              </div>
              <div className="col-lg-2 offset-3 col-sm-6 text-center mb-4">
                  <img className="rounded-circle img-fluid d-block mx-auto profileImg" src={wes} alt=""/>
                  <h3>Wesley Hanson</h3>
                  <br />
                  <p>Wesley provided backend management for the project, creating the MongoDB structure and Authentication as well as handling all the back end API routes for user data </p>
              </div>
                <div className="col-lg-2 col-sm-6 text-center mb-4">
                  <img className="rounded-circle img-fluid d-block mx-auto profileImg" src={joey} alt=""/>
                  <h3>Joey Bridges</h3>
                  <br />
                  <p>Joey Designed and implimented the React calendar to keep track of user appointments.</p>
              </div>
                <div className="col-lg-2 col-sm-6 text-center mb-4">
                  <img className="rounded-circle img-fluid d-block mx-auto profileImg" src={patrick} alt=""/>
                  <h3>Patrick Marrin</h3>
                  <br />
                    <p>Worked with dynamically generating SVG shape and color based on pill selection and pushing it to the overview page for rendering</p>
              </div>
          </div>
          <div className="row">
                <div className="col-lg-2 offset-4 col-sm-6 text-center mb-4">
                  <img className="rounded-circle img-fluid d-block mx-auto profileImg" src={corey} alt=""/>
                  <h3>Corey Richard</h3>
                  <br/>
                    <p>Provided UI/UX project direction, mobile responsiveness and desktop layout. </p>
              </div>
                <div className="col-lg-2 col-sm-6 text-center mb-4">
                  <img className="rounded-circle img-fluid d-block mx-auto profileImg" src={geina} alt=""/>
                  <h3>Angeleena Corrente</h3>
                  <br />
                  <p>Provided project design and worked with integrating SVG into the Medication page</p>
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
                          <img src={screen2} className="img-fluid mockImg" alt="" />
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
                          <h3>Mobile Oriented</h3>
                          <p className="text-muted">Using Bootstrap 4 and SCSS the Team was able to create a Mobile First application which can be used at a glance and on the go. </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="feature-item">
                          <i className="icon-calendar text-primary"></i>
                          <h3>Keep Track
                          </h3>
                          <p className="text-muted"> Using a combination of React-Calendar and MongoDB has allowed our users to add an appointment or event to their calendar and ensure it is available at a moments glance. </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="feature-item">
                          <i className="icon-speedometer text-primary"></i>
                          <h3>Fast</h3>
                          <p className="text-muted">We built our app from the ground up using Node, NPM and React.</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="feature-item">
                          <i className="icon-lock text-primary"></i>
                          <h3>Other Tech Used</h3>
                          <p className="text-muted">We wanted our app to be secure, with JSON Web tokens and authentication with Passport, your data is only available to your sign in.</p>
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
                <h2>Stop Guessing.<br />Start tracking.</h2>

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
