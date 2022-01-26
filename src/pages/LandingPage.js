import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import landingpage from "json/landingPage.json";
import Categories from "parts/Categories";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingpage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingpage.mostPicked}
        />
        <Categories data={landingpage.categories} />
      </>
    );
  }
}
