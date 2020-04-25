import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import * as Location from 'expo-location';

const HomeScreen = ()  => {

	const onClick = () => {
		let { status } = await Location.requestPermissionsAsync(); // for location permissions 
		  if (status !== 'granted') {
			setErrorMsg('Permission to access location was denied');
		  }

		  let location = await Location.getCurrentPositionAsync({});
		  
		  Alert.alert(location.coords.latitude, location.coords.longitude);
	}

    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<TouchableOpacity onPress={() => this.onClick()}>
			<Text>
				Click to get location
			</Text>
		</TouchableOpacity>
	  </View>

    );

}

export default  HomeScreen;

