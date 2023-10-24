import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../assets/css/ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      err: {} 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    this.setState(
      {err : 
        { error: error, errorInfo: errorInfo }
      });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className='Error-Wrapper'>
          <div>
          <h3>Something went wrong</h3>
          <h6>Error boundary caught an Error:  </h6>
          <div >

          {JSON.stringify(this.state.err.errorInfo)}

          </div>
   
          </div>
         </div>
      );

    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {

};

export default ErrorBoundary;