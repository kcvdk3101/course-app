import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

function ManageAuthorList({ authors }) {
  return (
    <Container>
      <Row>
        {authors.map((author) => {
          return (
            <Col key={author.id}>
              <Card>
                <CardBody>
                  <CardImg
                    top
                    height="100%"
                    src={author.thumbnailSrc}
                    alt={author.name}
                  />
                  <CardTitle tag="h5">{author.name}</CardTitle>
                  <CardText>{author.description}</CardText>
                  <Button style={{ marginRight: 5 }}>Edit</Button>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

ManageAuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
};

export default ManageAuthorList;
