import React from 'react';
import Inventory from './Inventory';
import { Tab } from 'semantic-ui-react';
import Calculator from './Calculator';

const Home = () => {
  const panes = [
    {
      menuItem: 'Inventory',
      render: () => (
        <Tab.Pane>
          <Inventory />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Calculate',
      render: () => (
        <Tab.Pane>
          <Calculator />
        </Tab.Pane>
      )
    },
    { menuItem: 'Orders', render: () => <Tab.Pane loading>Orders</Tab.Pane> }
  ];
  return <Tab panes={panes} />;
};

export default Home;
