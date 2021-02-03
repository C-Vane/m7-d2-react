import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setError: (error) => dispatch({ type: "SET_ERROR", payload: error }),
  setJobs: (jobs) => dispatch({ type: "SET_JOBS", payload: jobs }),
});

const Home = ({ setError, setJobs }) => {
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState(false);
  const handleSearch = (e) => {
    setSearch(true);
    e.preventDefault();
    getJobs(position, location);
  };
  const getJobs = async (position, location) => {
    setJobs([]);
    setError({ status: 0, message: "" });
    try {
      const response = await fetch(process.env.REACT_APP_JOB_URL + "?description=" + position + "&location=" + location);

      if (response.ok) {
        const jobsArray = await response.json();
        setTimeout(() => {
          jobsArray.length > 0 ? setJobs(jobsArray) : setError({ status: 404, message: "No Jobs Found" });
        }, 1000);
      } else {
        setError({ status: response.status, message: response.toString() });
      }
    } catch (error) {
      setError({ status: 500, message: error.message });
    }
  };
  return (
    <div className='searchPage'>
      {search ? (
        <Redirect to='/jobs' />
      ) : (
        <Container>
          <Form onSubmit={handleSearch}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className='h5 text-white'>Position</Form.Label>
                  <Form.Control type='text' placeholder='Front-End' value={position} onChange={(e) => setPosition(e.target.value)} />
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group>
                  <Form.Label className='h5 text-white'>Location</Form.Label>
                  <Form.Control type='text' placeholder='Berlin' value={location} onChange={(e) => setLocation(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Button type='submit' className='w-25 py-3' variant='dark'>
                Search
              </Button>
            </Row>
          </Form>
        </Container>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
