import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import ContactPage from "./components/contact/ContactPage";
import ExperiencePage from "./components/pastWorks/ExperiencePage";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./components/shared/global.css";
import ScrollToTop from "./ScrollToTop";

const App = (props) => {
  return (
    <React.Fragment>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/experience" component={ExperiencePage} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
