import React, { Component } from 'react';
import Header from './HeaderComponent'
import HomeComponent from './HomeComponent';
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes'
import FooterComponent from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {

    const HomePage = () => {
      return (
        <HomeComponent />
      )
    }

    return (

      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        <FooterComponent></FooterComponent>
      </div>
    )
  }
}

export default Main;
