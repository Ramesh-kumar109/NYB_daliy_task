import React from 'react'

function Main(props) {
  return (
    <>
    <h2>Main Content</h2>
    <h2>Name:{props.name}</h2>
    <h2>Email:{props.email}</h2>
    <h2>company:{props.company}</h2>
    </>
  )
}

export default Main;