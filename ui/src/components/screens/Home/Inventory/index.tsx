import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddItem from './AddItem';
import ItemList from './ItemList';
import { Item } from './types';
import _get from 'lodash.get';

const Inventory = () => {
  const [tableData, setData] = useState<Item[]>([]);
  const [fetchToken, setToken] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const res = await axios.get('/pens');
      const data = _get(res, 'data.data', []);
      if (data) setData(data);
    })();
  }, [fetchToken]);

  return (
    <div>
      <AddItem {...{setToken}} />
      <ItemList {...{ tableData }} isLoading={false} />
    </div>
  );
};

export default Inventory;
