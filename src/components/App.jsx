import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage.jsx";
import AboutPage from "./about/AboutPage.jsx";
import Header from "./common/Header.jsx";
import PageNotFound from "./PageNotFound.jsx";
import CoursesPage from "./courses/CoursesPage.jsx";
import ManageCourseForm from "./courses/ManageCourseForm.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCourseForm} />
        <Route path="/course" component={ManageCourseForm} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={2000} hideProgressBar />
    </div>
  );
};

export default App;
