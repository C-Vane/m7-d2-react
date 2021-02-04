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
const JobsPage = ({ jobs, favorites, msg }) => {
  const [data, setJobs] = useState([]);
  const [massages, setMassages] = useState("");
  useEffect(() => {
    setJobs(jobs);
  }, [jobs]);

  useEffect(() => {
    setTimeout(() => {
      setMassages("No Jobs Found!");
    }, 2000);
  }, []);

  return (
    <div className='jobsPage'>
      <Container>
        <Row className='col-container'>
          {data.length > 0 ? (
            data.map((job, index) => <Job key={index} {...job} />)
          ) : massages ? (
            <Alert variant='success'>{massages}</Alert>
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
