import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, ButtonToggle } from "reactstrap";
import { Link } from "react-router-dom";

function AuthorList({ authors }) {
  return (
    <Container>
      <Row>
        {authors.map((author) => {
          return (
            <Col md={4} key={author.id} className="d-flex flex-column">
              <img
                src={author.thumbnailSrc}
                alt={author.name}
                style={{ flexShrink: 0, marginBottom: 3, borderRadius: "50%" }}
              />
              <div
                className="d-flex flex-column justify-content-center align-items-start"
                style={{ flex: 1, marginTop: "auto" }}
              >
                <div className="d-flex flex-column" style={{ flex: 1 }}>
                  <h3 className="flex-shrink-0">{author.name}</h3>
                  <p>{author.description}</p>
                </div>
                <div>
                  <ButtonToggle color="primary" onClick={() => {}}>
                    <Link to={"/author/" + author.id}>Edit</Link>
                  </ButtonToggle>{" "}
                  <ButtonToggle color="danger">Delete</ButtonToggle>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
};

export default AuthorList;
