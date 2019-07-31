import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default class Category extends Component {
  render() {
    return (
        <View
          style={{
            height: 130,
            width: 130,
            borderColor: "#ddd",
            marginLeft: 20,
            borderWidth: 0.5
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              source={this.props.image_url}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover"
              }}
            />
          </View>
          <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
            <Text>{this.props.title}</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({});
