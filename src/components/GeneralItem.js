import React from 'react';
import { Feed } from 'semantic-ui-react';

const GeneralItem = (props) => {
  const { message, thumbnail } = props.item;

  return (
    <Feed>
      <Feed.Event>
        <Feed.Label>
          <img src={thumbnail} alt="feed thumbnail" />
        </Feed.Label>
      </Feed.Event>
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <Feed.Extra text>
              {message}
            </Feed.Extra>
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
};

export default GeneralItem;
