import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { authorsActions } from "../../redux/actions/authorsActions";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner.jsx";
import ManageAuthorList from "./ManageAuthorList.jsx";

export const AuthorsPage = ({ authors, getAuthors, loading }) => {
  const [redirectToAddAuthorPage, setRedirectToAddAuthorPage] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        await getAuthors();
      } catch (error) {
        toast.error("Error" + error);
      }
    })();
  }, []);

  return (
    <>
      {redirectToAddAuthorPage && <Redirect to="/author" />}
      <h1>Authors</h1>
      <button
        className="btn btn-primary"
        onClick={() => setRedirectToAddAuthorPage(true)}
      >
        Add new author
      </button>
      {loading ? (
        <Spinner />
      ) : authors.length === 0 ? (
        <h2>No more courses</h2>
      ) : (
        <ManageAuthorList authors={authors} />
      )}
    </>
  );
};

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  getAuthors: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  getAuthors: authorsActions.getAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
