import React, {useState, Fragment} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Calendar} from 'react-native-calendars';

const date = new Date();
const formatDate = () => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  return `${year}-${month}-${day}`;
};
const INITIAL_DATE = formatDate();

const CalendarsScreen = props => {
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [showMarkedDatesExamples, setShowMarkedDatesExamples] = useState(false);

  const changeDate = () => {
    if (props.isRental) {
      props.handleRentedDate(selected);
    } else if (props.isReturn) {
      props.handleReturnedDate(selected);
    } else {
      props.handleDate(selected);
    }
  };

  const onDayPress = day => {
    setSelected(day.dateString);
  };

  const renderCalendarWithSelectableDate = () => {
    return (
      <Fragment>
        <Text style={styles.text}>Select Date</Text>
        <Calendar
          current={INITIAL_DATE}
          style={styles.calendar}
          onDayPress={onDayPress}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: 'orange',
              selectedTextColor: 'red',
            },
          }}
        />
        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.button_item, styles.button_item_close]}
            onPress={() => {
              props.closePopup(false);
            }}>
            <Text style={styles.button_item_text}>Đóng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_item}
            onPress={() => {
              changeDate();
              props.closePopup(false);
            }}>
            <Text
              style={[styles.button_item_text, styles.button_item_text_apply]}>
              Áp dụng
            </Text>
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  };

  const renderExamples = () => {
    return <Fragment>{renderCalendarWithSelectableDate()}</Fragment>;
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {showMarkedDatesExamples && renderMarkedDatesExamples()}
      {!showMarkedDatesExamples && renderExamples()}
    </ScrollView>
  );
};

export default CalendarsScreen;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  switchText: {
    margin: 10,
    fontSize: 16,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16,
  },
  disabledText: {
    color: 'grey',
  },
  defaultText: {
    color: 'purple',
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  customDay: {
    textAlign: 'center',
  },
  customHeader: {
    backgroundColor: '#FCC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: -4,
    padding: 8,
  },
  button: {
    width: '100%',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  button_item: {
    width: 100,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1976d2',
    borderRadius: 5,
  },
  button_item_close: {
    backgroundColor: '#ddd',
    marginRight: 15,
  },
  button_item_text: {
    fontWeight: '600',
  },
  button_item_text_apply: {
    color: '#fff',
  },
});
