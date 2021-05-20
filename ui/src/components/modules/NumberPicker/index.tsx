import React, { FC } from 'react';
import { Input, InputProps, Label } from 'semantic-ui-react';

interface Props extends InputProps {
  value?: number;
  hasCurrency?: boolean;
}

const NumberPicker: FC<Props> = (props) => {
  const { value, hasCurrency = false, ...restProps } = props;

  return (
    <Input
      maxLength={3}
      size="mini"
      type="number"
      labelPosition="left"
      placeholder="Amount"
      {...{ value }}
      {...restProps}
    >
      {hasCurrency && <Label basic>₹</Label>}
      <input />
    </Input>
  );
};

export default NumberPicker;
