import React, {useState, Fragment} from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';

const INITIAL_DATE = '2020-02-02';

const CalendarsScreen = () => {
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [showMarkedDatesExamples, setShowMarkedDatesExamples] = useState(false);

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
});
