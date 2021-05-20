import React from 'react';
import Inventory from './Inventory';
import { Tab } from 'semantic-ui-react';

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
    { menuItem: 'Calculate', render: () => <Tab.Pane>Calculate</Tab.Pane> },
    { menuItem: 'Orders', render: () => <Tab.Pane loading>Orders</Tab.Pane> }
  ];
  return <Tab panes={panes} />;
};

export default Home;
