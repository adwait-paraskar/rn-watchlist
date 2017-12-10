import React from 'react';
import { StyleSheet, Text } from 'react-native';

const StockPriceChange = ({ change, cellStyles }) => {
  let changeStyle = styles.unchanged;
  if (change.value > 0) {
    changeStyle = styles.advance;
  }
  if (change.value < 0) {
    changeStyle = styles.decline;
  }
  return (
    <Text style={[...cellStyles, changeStyle]}>
      {`${change.value} (${change.pcnt}%)`}
    </Text>
  );
};

export default StockPriceChange;

const styles = StyleSheet.create({
  advance: {
    color: 'green'
  },
  decline: {
    color: 'red'
  },
  unchanged: {
    color: 'black'
  }
});
