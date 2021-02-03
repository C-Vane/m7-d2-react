import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader speed={2} className='w-100' height={300} viewBox='0 0 200 300' backgroundColor='#f3f3f3' foregroundColor='#ecebeb' {...props}>
    <rect x='151' y='107' rx='3' ry='3' width='30' height='30' />
    <rect x='23' y='154' rx='3' ry='3' width='170' height='6' />
    <rect x='25' y='174' rx='3' ry='3' width='140' height='6' />
    <rect x='0' y='0' rx='0' ry='0' width='200' height='100' />
    <rect x='24' y='193' rx='3' ry='3' width='100' height='6' />
    <rect x='23' y='212' rx='3' ry='3' width='190' height='6' />
  </ContentLoader>
);

export default MyLoader;
