import React from 'react';

import { Feed, Icon } from 'semantic-ui-react';

const FeedItem = (props) => {
  const {
    title,
    thumbnail,
    message,
  } = props.item;

  return (
    <Feed>
      <Feed.Event>
        <Feed.Label>
          {
            thumbnail
            ?
              <img src={thumbnail} alt="feed thumbnail" />
            :
              <Icon name="user" />
            }
        </Feed.Label>
        <Feed.Content>
          {
            title
            ?
              <Feed.Summary>
                <Feed.User>{title}</Feed.User>
              </Feed.Summary>
            :
              null
          }
        </Feed.Content>
      </Feed.Event>
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <Feed.Extra>
              <div>News Update: </div>
            </Feed.Extra>
          </Feed.Summary>
          <Feed.Extra text>
            {message}
          </Feed.Extra>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
};

export default FeedItem;
