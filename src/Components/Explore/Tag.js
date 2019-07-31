import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Tag extends Component {
  render() {
    return (
      <View
        style={{
          minHeight: 20,
          minWidth: 40,
          padding: 5,
          backgroundColor: "white",
          borderColor: "#ddd",
          borderWidth: 1,
          borderRadius: 2,
          marginRight: 5
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 12 }}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
