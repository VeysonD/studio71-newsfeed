import React from 'react';

import { Feed } from 'semantic-ui-react';

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
              null
            }
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>{title}</Feed.User>
            <Feed.Content>
              <div>Channel - </div>
            </Feed.Content>
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <Feed.Extra>
              {
                  title
                  ?
                    <div>Video - {title}</div>
                  :
                    null
              }
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
