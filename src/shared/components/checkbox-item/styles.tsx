import Text from 'shared/components/text';
import styled, { css } from 'styled-components/native';

type TitleProps = {
  status?: 'checked' | 'indeterminate' | 'unchecked';
  lineThrough?: boolean;
};

export const Title = styled(Text)<TitleProps>`
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 16px;

  ${p =>
    p.lineThrough &&
    css`
      color: ${p.theme.INFO};
      text-decoration: line-through;
      text-decoration-color: ${p.theme.INFO};
    `}
`;

export const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;
