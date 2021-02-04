import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Toast } from "react-bootstrap";
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToFavotites: (job) => dispatch({ type: "ADD_JOB_TO_FAVORITES", payload: job }),
  removeFromFavorite: (id) => dispatch({ type: "REMOVE_JOB_FROM_FAVORITES", payload: id }),
});

const JobDetails = ({ currentJob, jobs, favorites, addToFavotites, removeFromFavorite }) => {
  const { id, type, url, company, company_url, location, title, description, company_logo, how_to_apply } = currentJob;
  const [fav, setFav] = useState([0]);
  const [showPopover, setShowPopover] = useState([false, 0]);
  useEffect(() => {
    fav.length > favorites.length ? setShowPopover([true, 1]) : setShowPopover([true, 0]);
    setFav(favorites);
    setTimeout(() => {
      setShowPopover([false, 0]);
    }, 3000);
  }, [favorites]);
  return (
    <div>
      <Container>
        <Row className='justify-content-between'>
          <Link to={jobs.length ? "/jobs" : "/favorites"}>
            <Button variant='link'>
              <i class='fa fa-arrow-left' aria-hidden='true'></i>
            </Button>
          </Link>
          <Button variant='link' className='text-warning' onClick={() => (fav.some((f) => f.id === id) ? removeFromFavorite(id) : addToFavotites(currentJob))}>
            {fav.some((f) => f.id === id) ? <i className='fa fa-star'></i> : <i className='fa fa-star-o'></i>}
          </Button>
        </Row>
        <Row className='detailPage'>
          <Col sm={10}>
            <h2 calssName='m-0 p-0'>
              {title} <span className='text-black-50 h6'>{type}</span>
            </h2>

            <span className='text-black-50 h5'>{location}</span>
            <div className='my-4' dangerouslySetInnerHTML={{ __html: description }}></div>
          </Col>
          <Col>
            <Image src={company_logo} fluid />
            <p>{company}</p>
          </Col>
        </Row>
      </Container>
      <Toast
        className={showPopover[1] === 0 ? "border border-success" : "border border-danger"}
        style={{ position: "sticky", bottom: 15, left: 15 }}
        show={showPopover[0]}
        onClose={() => setShowPopover([false, 0])}
      >
        <Toast.Header>
          <img src={company_logo} height='20px' width='20px' className='rounded mr-2 img-fluid' alt='' />
          <span>
            Job from {company} {showPopover[1] === 0 ? "added to" : "removed form"} favorite
          </span>
        </Toast.Header>
      </Toast>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);
