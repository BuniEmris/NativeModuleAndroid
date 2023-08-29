import {
  View,
  Text,
  NativeModules,
  Button,
  NativeEventEmitter,
} from 'react-native';
import React, {useEffect} from 'react';

const {CalendarModule} = NativeModules;
const eventEmmiter = new NativeEventEmitter(CalendarModule);

export default function Home() {
  // useEffect(() => {
  //   eventEmmiter.addListener('eventCount', eventCount =>
  //     console.log(eventCount),
  //   );

  //   return () => {
  //     eventEmmiter.removeAllListeners();
  //   };
  // }, []);

  const onPress = async () => {
    //ios
    try {
      const eventId = await CalendarModule.createCalendarEvent(
        'Party',
        'my house',
      );
      console.log(`Created a new event with id ${eventId}`);
    } catch (e) {
      console.error(e);
    }

    //Android
    // try {
    //   const result = await CalendarModule.createCalendarEvent();
    //   console.log(result);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <View>
      <Text>Welcome</Text>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
    </View>
  );
}
