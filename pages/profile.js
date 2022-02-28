import React, { Component } from 'react'
import Nav from "../components/Nav"

export default class profile extends Component {
  render() {
    return (
      
      <div >
        <Nav />
        <div className="bg-gray-100 flex  w-full h-full min-h-screen justify-center items-center">
         <h1>profile</h1>
        </div>
      </div>
    )
  }
}
