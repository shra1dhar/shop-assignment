import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import NumberPicker from '../../../modules/NumberPicker';
import './styles.scss';

const AddItem = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="add-new-item">
      <div className="title">
        <h5>
          <Icon name="shop" />
          Add New Item
        </h5>
      </div>
      <div className="new-item-body">
        <div className="count-wrap">
          Cost:
          <NumberPicker hasCurrency {...{ count, setCount }} />
        </div>
        <div className="count-wrap">
          Count:
          <NumberPicker placeholder="Count" {...{ count, setCount }} />
        </div>
        <div>
          <Button size="tiny" color="blue">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
