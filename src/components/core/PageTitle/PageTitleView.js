import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './PageTitleStyles';

const PageTitleView = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

PageTitleView.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageTitleView;
