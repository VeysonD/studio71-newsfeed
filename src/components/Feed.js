import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react';

class FeedView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Feed>
          Testing Feed
        </Feed>
      </div>
    )
  }
}

export default FeedView;
