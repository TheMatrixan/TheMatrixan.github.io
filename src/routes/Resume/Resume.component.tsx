import React from 'react';
import { Link } from 'react-router-dom';

const Resume: React.FC = () => {
  console.log('Loaded Resume');
  return (
    <div>
      <Link to="/">home</Link>
    </div>
  );
};

export default Resume;
