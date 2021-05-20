import React from 'react';
import AddItem from './AddItem';
import ItemList from './ItemList';

const Inventory = () => {
  return (
    <div>
      <AddItem />
      <ItemList isLoading={false} />
    </div>
  );
};

export default Inventory;
