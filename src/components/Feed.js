import React, { Component } from 'react';
import { Card, Grid, Segment } from 'semantic-ui-react';

import FeedItem from './FeedItem';
import VideoItem from './VideoItem';

class FeedView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedData: [],
      loaded: false,
    };
    
    this.key = 0;
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }

  checkFeedType(item) {
    if (item.entity_type === 'video') {
      return (
        <VideoItem
          item={item}
          key={`video-item-${this.generateKey()}`}
        />
      );
    }
    return (
      <FeedItem
        item={item}
        key={`general-item-${this.generateKey()}`}
      />
    );
  }
  fetchData() {
    fetch('http://assets.studio71.io/test/news_feed.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          feedData: data.items,
          loaded: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  generateKey() {
    this.key += 1;
    return this.key;
  }

  render() {
    const { feedData, loaded } = this.state;

    return (
      <div>
        <Segment>
          <Grid>
            <Grid.Column computer={6}>
              <Card.Group>
                {
                  loaded && feedData.length > 0
                  ?
                    feedData.map(item =>
                      this.checkFeedType(item))
                  :
                  null
                }
              </Card.Group>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default FeedView;
