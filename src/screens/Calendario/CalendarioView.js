import React, { useState } from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import moment from 'moment';

import Button from '../../components/core/Button'
import useEvents from '../../hooks/useEvents';
import styles from './CalendarioStyles';
import Calendar from '../../components/core/Calendar';
import EventRow from '../../components/calendar/EventRow';
import COLORS from '../../constants/Colors';

const CalendarioView = ({ navigation }) => {
	const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
	const [events, setEvents] = useState([]);
	const onSelectDate = (newDate, newEvents) => {
		setDate(newDate);
		setEvents(newEvents);
	}
	const startDate = moment(date).startOf('month').format('YYYY-MM-DD');
	const endDate = moment(date).endOf('month').format('YYYY-MM-DD');

	const { loading, data } = useEvents({ startDate, endDate });

	return (
		<ScrollView contentContainerStyle={styles.container}>
			{!loading ? (
				<Calendar
					data={data}
					date={date}
					onSelectDate={onSelectDate}
					setDate={setDate}
				/>
			) : (
					<ActivityIndicator size="large" color={COLORS.accentYellow} />
				)}
			<View>
				<Text style={styles.date}>{moment(date).format('LL')}</Text>
				{events.length > 0 ? events.map((event) => (
					<EventRow
						key={event.id}
						event={event}
						onPress={() => navigation.navigate(
							{routeName: 'Evento', params: {idEvent: event.id}}
						)}
					/>
				)) : (<Text >No hay eventos en esta fecha</Text>)}
			</View>
		</ScrollView >
	)
}

CalendarioView.navigationOptions = navData => {
	return {
		headerTitle: 'Calendario',
	}
}

export default CalendarioView
