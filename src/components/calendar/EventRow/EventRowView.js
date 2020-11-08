import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import moment from 'moment';
import 'moment/locale/es';

import styles from './EventRowStyles';

const EventRowView = ({ event, onPress }) => {
  const { name, startDate, description, id } = event;
  moment.locale('es');
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(id)}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      {/* <Text style={styles.date}>{moment(startDate).format('LLL a')}</Text> */}
    </TouchableOpacity>
  )
}

EventRowView.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
}

export default EventRowView;
