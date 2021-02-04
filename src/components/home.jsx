import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setError: (error) => dispatch({ type: "SET_ERROR", payload: error }),
  setJobs: (position, location) =>
    dispatch(async (dispatch) => {
      try {
        const response = await fetch(process.env.REACT_APP_JOB_URL + "?description=" + position + "&location=" + location);
        if (response.ok) {
          const jobsArray = await response.json();
          setTimeout(() => {
            dispatch({ type: "SET_JOBS", payload: jobsArray });
          }, 1000);
        } else {
          console.log("Error:" + response.statusText);
        }
      } catch (error) {
        console.log("Error:" + error);
      }
    }),
});
const Home = ({ setError, setJobs }) => {
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState(false);
  const handleSearch = (e) => {
    setSearch(true);
    e.preventDefault();
    setJobs(position, location);
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
