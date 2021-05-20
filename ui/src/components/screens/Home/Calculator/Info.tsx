import React from 'react';
import { Message } from 'semantic-ui-react';

const Info = () => {
  return (
    <Message
      info
      size="small"
      icon="info circle"
      className="order-info-message"
      header="Information for ordering"
      content="Enter the amount for which you want to order pens."
    />
  );
};

export default Info;
