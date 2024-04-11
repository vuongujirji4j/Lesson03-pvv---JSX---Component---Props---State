import React, { Component } from 'react'

export default class PVV_Classcomp extends Component {
    constructor(props){
        super(props);
        // tao doi tuong du lieu
        this.state={
            fistname:"phan viet ",
            lastname:"vuong",
             username:"k22cntt3",
        }
    }
  render() {
    return (
      <div className='alert alert-danger'>
         <h2>class component demo</h2>
         <hr/>
         <h3>du lieu trong state</h3>
         <h3>xin chao:{this.state.fistname} {this.state.lastname}</h3>
         <hr/>
         <h3>du lieu tu props</h3>
      </div>
    )
  }
}
