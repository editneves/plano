import React from 'react'
import { useParams } from 'react-router'
import PlanSignature from '../components/PlanSignature'

const Plano = () => {
  let { id } = useParams()

  return (
    <>
      <h2>ID: {id}</h2>
      <PlanSignature />
    </>
  );
};

export default Plano