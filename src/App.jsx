import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./features/home/HomePage.jsx";
import AboutPage from "./features/about/AboutPage.jsx";
import Header from "./features/template/Header.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import CoursesPage from "./features/courses/CoursesPage.jsx";
import ManageCourseForm from "./features/courses/ManageCourseForm.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthorsPage from "./features/authors/AuthorsPage.jsx";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />

        {/* Courses Page  */}
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCourseForm} />
        <Route path="/course" component={ManageCourseForm} />

        {/* Authors Page  */}
        <Route path="/authors" component={AuthorsPage} />
        <Route path="/author/:id" component={ManageCourseForm} />
        <Route path="/author" component={ManageCourseForm} />

        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={2000} hideProgressBar />
    </div>
  );
};

export default App;
