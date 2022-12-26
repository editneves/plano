import React from 'react';
import { useParams } from 'react-router';

const Plano = () => {
  let { id } = useParams()
  return (
    <div>
      <div>
        <h2>ID: {id}</h2>
      </div>
    </div>
  );
};

export default Plano;