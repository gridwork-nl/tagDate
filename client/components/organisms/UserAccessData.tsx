import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

import colors from '../../helpers/colors';
import InputFieldShort from '../atoms/InputFieldShort';

//TODO: CHECK TYPE PASSWORD
interface IProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: number | null;
  setPassword: React.Dispatch<React.SetStateAction<number | null>>;
}

const UserAccessData: React.FC<IProps> = ({
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <View>
      <InputFieldShort
        onChangeText={setEmail}
        placeholder={'E-mail'}
        value={email}></InputFieldShort>

      <InputFieldShort
        onChangeText={(password: string) => {
          setPassword(+password);
        }}
        placeholder={'Password'}
        value={password?.toString()}></InputFieldShort>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserAccessData;