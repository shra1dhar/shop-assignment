import axios from 'axios';
import React, { FC, useState } from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import NumberPicker from '../../../modules/NumberPicker';
import './styles.scss';
import _get from 'lodash.get';

interface Props {
  setToken: React.Dispatch<React.SetStateAction<number>>;
}

const AddItem: FC<Props> = ({ setToken }) => {
  const [count, setCount] = useState<number>(0);
  const [cost, setCost] = useState<number>(0);

  const updateCount = (value: any) => {
    setCount(+value);
  };

  const updateCost = (value: any) => {
    setCost(+value);
  };

  const submitForm = async () => {
    if (!count || !cost) {
      alert('Enter Count and Cost properly');
      return;
    }

    try {
      const res = await axios.post('/pen', {
        count,
        cost
      });
      const success = _get(res, 'data.success');
      if (success) {
        setCount(0);
        setCost(0);
      }
      setToken((val) => val + 1);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Form onSubmit={submitForm} className="add-new-item">
      <div className="title">
        <h5>
          <Icon name="shop" />
          Add New Item
        </h5>
      </div>
      <div className="new-item-body">
        <div className="count-wrap">
          Cost:
          <NumberPicker onChange={(e) => updateCost(e.target.value)} hasCurrency value={cost} />
        </div>
        <div className="count-wrap">
          Count:
          <NumberPicker onChange={(e) => updateCount(e.target.value)} placeholder="Count" value={count} />
        </div>
        <div>
          <Button type="submit" size="tiny" color="blue">
            Add
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default AddItem;
