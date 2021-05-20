import React, { FC } from 'react';
import { Input, InputProps, Label } from 'semantic-ui-react';

interface Props extends InputProps {
  count: number;
  hasCurrency?: boolean;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const NumberPicker: FC<Props> = (props) => {
  const { count, setCount, hasCurrency = false, ...restProps } = props;

  return (
    <Input labelPosition="left" maxLength={3} size="mini" type="number" placeholder="Amount" {...restProps}>
      {hasCurrency && <Label basic>₹</Label>}
      <input />
    </Input>
  );
};

export default NumberPicker;
