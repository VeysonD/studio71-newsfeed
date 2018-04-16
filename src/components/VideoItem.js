import React from 'react';
import { Feed } from 'semantic-ui-react';

const VideoItem = (props) => {
  const {
    message,
    name,
    thumbnail,
    title,
  } = props.item;
  const channelTitle = props.item.channel_title;
  
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
            <Feed.User>{name}</Feed.User>
            <Feed.Content>
              <div>Channel - {channelTitle}</div>
            </Feed.Content>
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <Feed.Extra>
              <div>Video - {title}</div>
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


export default VideoItem;