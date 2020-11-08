import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Calendar } from 'react-native-calendars';

import getMarkers from '../../../helpers/calendar/getMarkers';
import COLORS from '../../../constants/Colors';

const CalendarView = ({ data, date, onSelectDate, setDate }) => {
  const markers = getMarkers(data);
  const onSelect = (newDate) => {
    const events = [];
    const markerEvents = markers[newDate];
    if (markerEvents !== undefined) {
      markerEvents.dots.forEach(({ event }) => {
        events.push(event);
      });
    }
    onSelectDate(newDate, events);
  }

  const subtractMonth = (callback) => {
    const newDate = moment(date).subtract(1, 'months').startOf('month').format('YYYY-MM-DD');
    setDate(newDate);
    callback()
  }

  const addMonth = (callback) => {
    const newDate = moment(date).add(1, 'months').startOf('month').format('YYYY-MM-DD');
    setDate(newDate)
    callback();
  }

  return (
    <Calendar
      current={date}
      markedDates={markers}
      markingType={'multi-dot'}
      onDayPress={({ dateString }) => onSelect(dateString)}
      theme={{
        arrowColor: COLORS.primaryBlack,
        todayTextColor: COLORS.primaryBlack,
        selectedDayBackgroundColor: COLORS.primaryBlack,
        selectedDayTextColor: COLORS.primaryWhite,

      }}
      onPressArrowLeft={(callback) => subtractMonth(callback)}
      onPressArrowRight={(callback) => addMonth(callback)}
    />
  )
}

CalendarView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  }),
  ),
  date: PropTypes.string.isRequired,
  onSelectDate: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
};

CalendarView.defaultProps = {
  data: [],
}

export default CalendarView
