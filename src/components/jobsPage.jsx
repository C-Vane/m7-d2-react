import React, { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import Job from "./job";
import { connect } from "react-redux";
import MyLoader from "./loader";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (id) => dispatch({ type: "ADD_JOB_TO_FAVORITES", payload: id }),
  removeFromFavorite: (id) => dispatch({ type: "REMOVE_JOB_FROM_FAVORITES", payload: id }),
});
const JobsPage = ({ jobs, error, msg }) => {
  const [data, setJobs] = useState([]);
  const [errors, setErrors] = useState();
  const [massages, setMassages] = useState("");
  useEffect(() => {
    setJobs(jobs);
    setMassages(msg);
    setErrors(error.massage);
  }, [jobs, error, msg]);
  return (
    <div className='jobsPage'>
      <Container>
        <Row className='col-container'>
          {massages ? (
            <Alert variant={errors ? "warning" : "success"}>{massages}</Alert>
          ) : data.length > 0 ? (
            data.map((job, index) => <Job key={index} {...job} />)
          ) : (
            [...Array(8).keys()].map((key) => (
              <Col md={3} className='mt-4'>
                <Card key={key} className='p-0'>
                  <MyLoader />
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsPage);
