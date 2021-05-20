import React, { FC } from 'react';
import { Loader, Table } from 'semantic-ui-react';

interface Props {
  isLoading: boolean;
}

const ItemList: FC<Props> = ({ isLoading }) => {
  const tableHead = ['Item', 'Count', 'Cost'];
  return (
    <div className="list-all-items">
      <div className="title">
        <h5>List of Items</h5>
      </div>
      <div className="list-item-body">
        {isLoading ? (
          <Loader active={true} />
        ) : (
          <Table celled>
            <Table.Header>
              <Table.Row>
                {tableHead.map((val) => (
                  <Table.HeaderCell content={val} />
                ))}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        )}
      </div>
    </div>
  );
};

export default ItemList;
