import React from 'react';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
import NumberPicker from '../../../modules/NumberPicker';

const Calculate = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="shop" />
        Shop Pens by entering money
      </Header>
      <div className="calculate-form">
        <NumberPicker hasCurrency />
        <div>
          <Button size="mini" primary>
            <Icon name="search" />
            Calculate
          </Button>
        </div>
      </div>
    </Segment>
  );
};

export default Calculate;
