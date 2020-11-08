import { StyleSheet } from 'react-native'
import COLORS from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.primaryWhite,
    marginVertical: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  description: {
    fontSize: 14,
  },
  date: {
    fontSize: 14,
    textAlign: 'right',
  }
})

export default styles;
