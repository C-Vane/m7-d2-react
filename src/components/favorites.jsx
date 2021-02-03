import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Job from "./job";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorite: (id) => dispatch({ type: "REMOVE_JOB_FROM_FAVORITES", payload: id }),
});
const Favorites = ({ favorites }) => {
  const [data, setJobs] = useState([]);
  useEffect(() => {
    setJobs(favorites);
  }, [favorites]);
  return (
    <div>
      <Container>
        <Row>{data.length > 0 && data.map((job, index) => <Job key={index} {...job} />)}</Row>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
