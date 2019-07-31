import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Saved extends Component {
   render() {
      return (
         <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Saved Screen</Text>
            {/* <Image source={require('../../assets/like.png')} /> */}
         </View>
      );
   }
}

export default Saved;