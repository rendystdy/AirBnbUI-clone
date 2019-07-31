import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Profile extends Component {
   render() {
      return (
         <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile Screen</Text>
            <Image source={require('../../assets/profile.png')} style={{height: 20, width: 20, tintColor: 'red'}} />
         </View>
      );
   }
}

export default Profile;