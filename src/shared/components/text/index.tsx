import React, { FC } from 'react';
import { ComponentProps } from 'react';

import { CustomText } from './styles';

type Props = ComponentProps<typeof CustomText>;

const Text: FC<Props> = props => {
  return <CustomText {...props} />;
};

export default Text;
