import { useNavigation } from '@react-navigation/core';
import * as LocalAuthentication from 'expo-local-authentication';
import React, { FC, useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import { Screens } from 'shared/constants/screens';

import { Container } from './styles';

const LocalAuthCheck: FC = () => {
  const navigation = useNavigation();

  const [hasHardware, setHasHardware] = useState(false);
  const [enrolledLevel, setEnrolledLevel] = useState<LocalAuthentication.SecurityLevel>();
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    async function checkAuthConfig() {
      const [_hasHardware, _enrolledLevel, _isEnrolled] = await Promise.all([
        LocalAuthentication.hasHardwareAsync(),
        LocalAuthentication.getEnrolledLevelAsync(),
        LocalAuthentication.isEnrolledAsync(),
      ]);

      setHasHardware(_hasHardware);
      setEnrolledLevel(_enrolledLevel);
      setIsEnrolled(_isEnrolled);
    }

    checkAuthConfig();
  }, []);

  const handleAuthCheck = async () => {
    if (!isEnrolled || !hasHardware || enrolledLevel === LocalAuthentication.SecurityLevel.NONE) {
      navigation.navigate(Screens.CURRENT_TASKS);
      return;
    }

    const result = await LocalAuthentication.authenticateAsync();

    if (!result.success) return;
    navigation.navigate(Screens.CURRENT_TASKS);
  };

  return (
    <Container>
      <Button onPress={handleAuthCheck} mode="outlined">
        See my tasks!
      </Button>
    </Container>
  );
};

export default LocalAuthCheck;
