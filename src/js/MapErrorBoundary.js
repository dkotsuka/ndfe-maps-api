import React from 'react';

export default class MapErrorBoundary extends React.Component {
  constructor(props) {
    super();
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, info) {
    console.log('catch')
    this.setState({
      error,
      info,
    });
  }
  render() {
    if (this.state.error) {
      console.log(this.props.name)
      return (
        <div className='error-container' style={{ width : '250px', margin: '80px auto', padding: '15px' }}>
          <h3>Sorry Something went wrong!</h3>
          <p>GoogleMaps API didn't load correctly.</p>
          <p>{this.state.error && this.state.error.toString()}</p>
        </div>
      );
    }
    return this.props.children;
  }
}