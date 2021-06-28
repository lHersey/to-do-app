import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Text from 'shared/components/text';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  display: flex;
  flex-grow: 1;
  background: ${p => p.theme.CARD_BACKGROUND};
  padding: 40px 20px;
`;

export const Title = styled(Text)`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Card = styled.View`
  background: ${p => p.theme.MAIN_BACKGROUND};
  display: flex;
  flex-grow: 1;
  border-radius: 15px;
  padding: 30px;
`;

export const NewTodoInput = styled(TextInput)`
  background: #fff;
`;
