import './styles.scss';
import { Header } from 'semantic-ui-react';

const Heading = () => {
  return (
    <header className="main-header">
      <Header className="title" as="h3">
        Shop Assignment
      </Header>
    </header>
  );
};

export default Heading;
