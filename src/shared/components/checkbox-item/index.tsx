import React, { FC, useCallback } from 'react';
import { Checkbox } from 'react-native-paper';

import { Container, Title } from './styles';

type Props = {
  status: 'checked' | 'indeterminate' | 'unchecked';
  title: string;
  lineThrough?: boolean;
  onTap?(currentStatus: 'checked' | 'indeterminate' | 'unchecked'): void;
};

const CheckboxItem: FC<Props> = props => {
  const { status, title, lineThrough, onTap } = props;

  const handleOnPress = useCallback(() => onTap?.(status), [onTap, status]);

  return (
    <Container onPress={handleOnPress}>
      <Title lineThrough={lineThrough} status={status}>
        {title}
      </Title>
      <Checkbox.Android status={status} />
    </Container>
  );
};

export default CheckboxItem;
