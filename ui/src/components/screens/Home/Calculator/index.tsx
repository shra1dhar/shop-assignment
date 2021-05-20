import Calculate from './Calculate';
import Info from './Info';
import './styles.scss';

const Calculator = () => {
  return (
    <div className="calculate-order">
      <Info />
      <Calculate />
    </div>
  );
};

export default Calculator;
