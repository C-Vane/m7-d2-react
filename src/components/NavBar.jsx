import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='d-flex'>
      <div className='ml-5 mr-0'>
        <Link to='/'>
          <h1 className='title mt-3 mb-5 '>Strive Jobs Search Engine</h1>
        </Link>
      </div>
      <div className='ml-auto mr-3'>
        <Link to='/favorites' calssName=''>
          <Button variant='light' className='mt-3 mb-5'>
            Favorites
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
