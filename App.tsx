import React, { useState } from 'react';
import { SafeAreaView,ScrollView,Text} from 'react-native';

import { getCurrentTime} from './app/utils/Utils'
import Train from './app/model/Train'

const App = () => {

  let [counter,setCounter] = useState(0)
  
   setInterval(() => {
      setCounter(counter+1)
    }, 1000);
  let train1 : Train = new Train("Dubai",12,"00:00","23:00")
  let train2 : Train = new Train("Abu Dhabi",6,"00:00","23:00")
  let train3 : Train = new Train("Sharja",20,"00:00","23:00")
  return (
    <SafeAreaView >
      <ScrollView>
        <Text> {`${train1.destination} -- > ${train1.nextTrip()}`}</Text>
        <Text> {`${train2.destination} -- > ${train2.nextTrip()}`}</Text>
        <Text> {`${train3.destination} -- > ${train3.nextTrip()}`}</Text>
        <Text> {getCurrentTime()}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;