import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SecondaryButton from '../atoms/SecondaryButton';

interface Props {
  name: string;
  age: number;
  location: string;
  activity: number;
  onLike: () => void;
  onNoLike: () => void;
}

const SwipeUserInfo: React.FC<Props> = ({
  name,
  age,
  location,
  activity,
  onLike,
  onNoLike,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {name}, {age}
      </Text>
      <Text style={styles.text}>{location}</Text>
      <Text style={styles.text}>Do you want to {activity}?</Text>
      <View style={styles.btnFlex}>
        <TouchableOpacity
          style={[styles.btn, styles.dislikeBtn]}
          onPress={() => {
            onNoLike();
          }}
        >
          <Text style={styles.text}>Nope!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.likeBtn]}
          onPress={() => {
            onLike();
          }}
        >
          <Text style={styles.text}>Yep!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: '90%',
    backgroundColor: 'rgba(114,90,193, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    opacity: 1,
    fontSize: 18,
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: '#725AC1',
    borderRadius: 5,
    padding: 10,
    minWidth: 70,
  },
  likeBtn: {
    left: '90%',
  },
  dislikeBtn: {
    right: '90%',
  },
  btnFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default SwipeUserInfo;
