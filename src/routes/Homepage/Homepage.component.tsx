import React from 'react';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  console.log('loaded Homepage');
  return (
    <div>
      <Link to="/resume">resume</Link>
    </div>
  );
};

export default Homepage;
