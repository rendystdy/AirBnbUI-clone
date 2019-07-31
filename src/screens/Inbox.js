import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Inbox extends Component {
   render() {
      return (
         <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Inbox Screen</Text>
            {/* <FontAwesomeIcon icon={ faCoffee } /> */}
         </View>
      );
   }
}

export default Inbox;