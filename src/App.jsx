
import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import CustomNavBar from './component/CustomNavBar';
import Footer from './component/Footer';

import Home from './page/Home';
import Tutorial from './page/Tutorial';
import SearchResult from './page/SearchResult';
import HotelInfo from './page/HotelInfo';
import Profile from './page/Profile';
import CreateHotel from './page/CreateHotel';
import MyHotel from './page/MyHotel';
import Request from './page/Request';
import Payment from './page/Payment';

class App extends Component {
  componentWillMount() {
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", JSON.stringify({}));
    }

    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([]));
    }

    if (!localStorage.getItem("reviews")) {
      localStorage.setItem("reviews", JSON.stringify([]));
    }

    if (!localStorage.getItem("hotels")) {
      localStorage.setItem("hotels", JSON.stringify([]));
    }

    if (!localStorage.getItem("requests")) {
      localStorage.setItem("requests", JSON.stringify([]));
    }

    if (!localStorage.getItem("reservations")) {
      localStorage.setItem("reservations", JSON.stringify([]));
    }

    this.setState({
      mode: "view"
    });
  }

  toggleMode = () => {
    this.setState({
      mode: this.state.mode === "view" ? "edit" : "view"
    })
  }

  render() {
    return (
      <>
        <div className="scroll-snap-container">
          <CustomNavBar mode={this.state.mode} toggleMode={this.toggleMode} />
          <Router>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route path="/tutorial" render={() => <Tutorial />} />
              <Route path="/search" render={() => <SearchResult />} />

              <Route path="/payment" render={() => <Payment />} />
              
              <Route path="/request" render={() => <Request />} />
              
              <Route path="/hotel/create" render={() => <CreateHotel />} />
              <Route path="/myhotel" render={() => <MyHotel />} />
              <Route path="/hotel" render={() => <HotelInfo mode={this.state.mode} />} />

              <Route path="/profile" render={() => <Profile />} />
            </Switch>
          </Router>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;