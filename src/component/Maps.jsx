import React, { Component } from 'react';

class Maps extends Component {
  render() {
    return (
      <div style={{ borderBottom: 'thin solid #c6c6c6' }}>
        <div style={{ width: '100%', height: '350px', marginTop: '-46px' }}>
          <div dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.google.com/maps/d/embed?mid=1vMzFGh3vreEMtTQ3Ndu5YybVhCgj97wM&hl=en" width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>' }}></div>
        </div>
      </div>
    );
  }
}

export default Maps;