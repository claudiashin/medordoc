import React, { Component } from 'react'
import dynamic from "next/dynamic";
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
  render() {
    return (
      <div>
        <QrReader
          delay={200}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '300px' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}
export default CheckIn;