import { useState } from 'react';
import axios from 'axios';
import { Button, Form, Header, Icon, Segment } from 'semantic-ui-react';
import NumberPicker from '../../../modules/NumberPicker';
import _get from 'lodash.get';
import { Item } from '../Inventory/types';

const Calculate = () => {
  const [amount, setAmount] = useState<number>(0);
  const [transaction, setTransaction] = useState<Item[]>([]);
  const [changeLeft, setChangeLeft] = useState<Item[]>([]);
  const [isFetched, setFetch] = useState<boolean>(false);
  const updateAmount = (val: any) => {
    setAmount(+val);
  };

  const calculatePensAndPrice = async () => {
    try {
      const res = await axios.get(`/purchase/${amount}`);
      const data = _get(res, 'data.penList', []);
      setTransaction(data);
      setChangeLeft(_get(res, 'data.changeLeft', 0));
      setFetch(true);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="shop" />
        Shop Pens by entering money
      </Header>
      <Form onSubmit={calculatePensAndPrice} className="calculate-form">
        <NumberPicker onChange={(e) => updateAmount(e.target.value)} value={amount} hasCurrency />
        <div>
          <Button type="submit" size="mini" primary>
            <Icon name="search" />
            Calculate
          </Button>
        </div>
        <div>
          {isFetched && transaction.length === 0 ? (
            <p>No pens could be retrieved</p>
          ) : (
            <>
              <p>Change Left: Rs. {changeLeft}</p>
              {transaction.map((val) => (
                <p key={val.id}>
                  You got {val.count} pens for cost Rs. {val.cost}
                </p>
              ))}
            </>
          )}
        </div>
      </Form>
    </Segment>
  );
};

export default Calculate;
