import React from 'react'
import moment from 'moment';

import { Calendar, Arrow } from 'react-native-calendars';

const CalendarView = () => {
  const date = moment().format('YYYY-MM-DD');
  console.log(date);
  const vacation = { key: 'vacation', color: 'red',  };
  const massage = { key: 'massage', color: 'blue',  };
  const workout = { key: 'workout', color: 'green' };

  return (
    <Calendar
      current={date}
      markedDates={{
        [date]: { dots: [vacation, massage, workout], },
        '2020-11-02': { dots: [massage, workout], }
      }}

      markingType={'multi-dot'}
    />
  )
}

export default CalendarView
