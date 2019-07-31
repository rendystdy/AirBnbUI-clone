import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import StarRating from 'react-native-star-rating';

export default class Home extends Component {
  render() {
    return (
      <View
        style={{
          width: this.props.width / 2 - 30,
          height: this.props.width / 2 - 30,
          borderWidth: 0.5,
          borderColor: "#ddd"
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover"
            }}
            source={this.props.img_url}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingLeft: 10,
            alignItems: "flex-start",
            justifyContent: "space-evenly"
          }}
        >
          <Text
            style={{
              fontSize: 10,
              color: "#b63838",
              fontWeight: "400"
            }}
          >
         {this.props.type}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            {this.props.name}
          </Text>
          <Text style={{ fontSize: 10 }}>{this.props.price}$</Text>
          <StarRating disabled={true} maxStars={5} rating={this.props.rating} starSize={10} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
