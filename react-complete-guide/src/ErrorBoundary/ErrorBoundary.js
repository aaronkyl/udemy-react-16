import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error})
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>
    } else {
      // if no error, then whatever was wrapped in the ErrorBoundary component is returned (default case)
      return this.props.children
    }
  }
}

export default ErrorBoundary
