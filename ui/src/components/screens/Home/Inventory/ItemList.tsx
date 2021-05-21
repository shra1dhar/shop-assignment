import React, { FC } from 'react';
import { Icon, Loader, Table } from 'semantic-ui-react';
import { Item } from './types';

interface Props {
  isLoading: boolean;
  tableData: Item[];
}

const ItemList: FC<Props> = ({ isLoading, tableData }) => {
  const tableHead = ['Item', 'Count', 'Cost'];
  return (
    <div className="list-all-items">
      <div className="title">
        <h5>
          <Icon name="list" />
          List of Items
        </h5>
      </div>
      <div className="list-item-body">
        {isLoading ? (
          <Loader active={true} />
        ) : tableData.length === 0 ? (
          <p>No data available</p>
        ) : (
          <Table celled>
            <Table.Header>
              <Table.Row>
                {tableHead.map((val) => (
                  <Table.HeaderCell key={val} content={val} />
                ))}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {tableData.map((val) => (
                <Table.Row key={val.id}>
                  <Table.Cell>Pen</Table.Cell>
                  <Table.Cell>{val.count}</Table.Cell>
                  <Table.Cell>{val.cost}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
      </div>
    </div>
  );
};

export default ItemList;
