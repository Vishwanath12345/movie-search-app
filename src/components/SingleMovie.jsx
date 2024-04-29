import React from 'react'
import { useParams } from 'react-router-dom'

function SingleMovie() {

  const {id} = useParams();
  return (
    <h1>SingleMovie {id}</h1>
  )
}

export default SingleMovie