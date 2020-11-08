import moment from 'moment';
import COLORS from '../../constants/Colors';

const getMarkers = (events) => {
  const markers = {};
  events.forEach((event) => {
    const { startDate, id } = event;
    const start = moment(startDate).format('YYYY-MM-DD')
    const marker = { key: id, color: COLORS.accentYellow, event };

    if (markers[start]) {
      markers[start].dots.push(marker);
    } else {
      markers[start] = { dots: [marker] };
    }


  });
  return markers;
}

export default getMarkers;
