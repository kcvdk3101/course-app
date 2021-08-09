import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
  ButtonGroup,
} from "reactstrap";

function ManageAuthorList({ authors }) {
  return (
    <CardDeck>
      {authors.map((author) => {
        return (
          <Card key={author.id}>
            <CardImg
              top
              width="100%"
              src={author.thumbnailSrc}
              alt={author.name}
            />
            <CardBody>
              <CardTitle tag="h5">{author.name}</CardTitle>
              <CardText>{author.description}</CardText>
              <ButtonGroup size="lg">
                <Button>Edit</Button>
                <Button>Button</Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        );
      })}
    </CardDeck>
  );
}

ManageAuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
};

export default ManageAuthorList;
