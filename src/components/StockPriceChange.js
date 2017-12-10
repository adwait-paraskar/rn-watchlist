import React from 'react';
import { StyleSheet, Text } from 'react-native';

const StockPriceChange = ({ change, cellStyles }) => {
  if (change.value > 0) {
    cellStyles.push(styles.advance);
  }
  if (change.value < 0) {
    cellStyles.push(styles.decline);
  }
  return (
    <Text style={[...cellStyles]}>{`${change.value} (${change.pcnt}%)`}</Text>
  );
};

export default StockPriceChange;

const styles = StyleSheet.create({
  advance: {
    color: 'green'
  },
  decline: {
    color: 'red'
  }
});
