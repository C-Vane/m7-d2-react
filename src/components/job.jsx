import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setCurrentJob: (job) => dispatch({ type: "SET_CURRENT_JOB", payload: job }),
});

const Job = ({ id, type, company, title, company_logo, setCurrentJob, history, favorites, jobs }) => {
  const [fav, setFav] = useState([]);
  useEffect(() => {
    setFav(favorites);
  }, [favorites]);
  const redirect = () => {
    setCurrentJob(jobs.filter((job) => job.id === id)[0] || favorites.filter((job) => job.id === id)[0]);
    history.push("/jobDetails");
  };

  return (
    <Col md={3} className='mt-4'>
      <Card className='job-border p-2' style={{ cursor: "pointer" }} onClick={redirect}>
        <Card.Img variant='top' src={company_logo} height='150vh' fluid />
        <Row className='justify-content-end mr-3'>
          <Button variant='link' className='text-warning '>
            {fav.some((f) => f.id === id) ? <i className='fa fa-star'></i> : <i className='fa fa-star-o'></i>}
          </Button>
        </Row>
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text>
            <Col>
              <Row>
                <b>Company:</b> {company}
              </Row>
              <Row>
                <b>Type:</b>
                {type}
              </Row>
            </Col>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Job));
