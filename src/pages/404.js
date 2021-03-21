import React from 'react'

const NotFoundPage = (props) => {
  console.log(props);
  return (<div>
    <h1>NOT FOUND</h1>
    <p>{props.location.pathname} does not exist!</p>
  </div>
)}

export default NotFoundPage
