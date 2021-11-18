import React, { Component,useState } from 'react'
import dynamic from "next/dynamic";
import styled from 'styled-components';

const QrReader = dynamic(() => import('react-qr-reader'),{ ssr: false })

class CheckIn extends Component {
  state = {
    result: 'No result'
  }
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }

  render(
    click = {},
    
  ) {

     const container = {
       display:"flex",
       backgroundColor:'DodgerBlue',
       width:300,
       height:300,
       display:''
       }

      const styles = {
        width:300
      }

      const subcontainer = {
        display:"flex",
        backgroundColor:'DodgerBlue',
        display:"block",
        }

      const button ={
       width:300,
       height:50
      }  

      // const off =()=>{
      //   const [on,seton] = useState(false)
      // }

     return (
      <div style ={container}>
        <div className ="test" style ={subcontainer}>
          <button style ={button} onClick = {()=>(click)}>On</button>
        <QrReader
          delay={200}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{styles}}
        />
        <a href = {this.state.result}>{this.state.result}</a>
        </div>
      </div>
    )
   
    }
   
  }

export default CheckIn;