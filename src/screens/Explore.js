import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Platform,
  ScrollView,
  Dimensions,
  StatusBar,
  Animated
} from "react-native";
import Category from "../Components/Explore/Category";
import Home from "../Components/Explore/Home";
import Tag from "../Components/Explore/Tag";

class Explore extends Component {
  componentDidMount() {
    this.scrollY = new Animated.Value(0);

    this.startHeaderHeight = 80;
    this.endHeaderHeight = 50;
    if (Platform.OS === "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endHeaderHeight = 70 + StatusBar.currentHeight;
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: "clamp"
    });
    
    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0,1],
      extrapolate: 'clamp'
    });

    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30,10],
      extrapolate: 'clamp'
    })
  }

  render() {
    let { height, width } = Dimensions.get("window");
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* section header */}
        <View style={styles.mainWrapper}>
          {/* section searching */}
          <Animated.View style={styles.wrapperSearching}>
            {/* section content in searching */}
            <View style={styles.sectionSearching}>
              {/* icon search */}
              <Image
                source={require("../../assets/loupe.png")}
                style={{ width: 20, height: 20, marginTop: 20, marginRight: 5 }}
              />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try new"
                placeholderTextColor="grey"
                style={{
                  flex: 1,
                  fontWeight: "700",
                  backgroundColor: "white"
                }}
              />
            </View>
            <Animated.View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                position: "relative",
                top: this.animatedTagTop,
                opacity: this.animatedOpacity
              }}
            >
              <Tag name="Guest" />
              <Tag name="Dates" />
            </Animated.View>
          </Animated.View>
          {/* wrapper body */}
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } }
            ])}
          >
            {/* section title */}
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                What can we help you find, Varun?
              </Text>
              {/* section image slider */}
              <View style={{ height: 130, marginTop: 10 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    image_url={require("../../assets/home.jpg")}
                    title="Home"
                  />
                  <Category
                    image_url={require("../../assets/experiences.jpg")}
                    title="Experience"
                  />
                  <Category
                    image_url={require("../../assets/restaurant.jpg")}
                    title="Restaurant"
                  />
                </ScrollView>
              </View>
              {/* end section image slider */}
              <View style={{ marginTop: 5, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "700" }}>
                  Introducing Airbnb Plus
                </Text>
                <Text style={{ fontWeight: "100", marginTop: 5, fontSize: 12 }}>
                  A new selection of homes verified for quality & comfort
                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 10 }}>
                  <Image
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: "cover",
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: "#ddd"
                    }}
                    source={require("../../assets/home.jpg")}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                Homes arround the world
              </Text>
              <View
                style={{
                  marginTop: 20,
                  paddingHorizontal: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}
              >
                <Home
                  width={width}
                  name={"The Cozy Palace"}
                  type={"PRIVATE ROOM - 2 BEDS"}
                  price={"82"}
                  rating={4}
                  img_url={require("../../assets/home.jpg")}
                />
                <Home
                  width={width}
                  name={"The Cozy Palace"}
                  type={"PRIVATE ROOM - 2 BEDS"}
                  price={"62"}
                  rating={3}
                  img_url={require("../../assets/home.jpg")}
                />
                <Home
                  width={width}
                  name={"The Cozy Palace"}
                  type={"PRIVATE ROOM - 2 BEDS"}
                  price={"42"}
                  rating={2}
                  img_url={require("../../assets/home.jpg")}
                />
                <Home
                  width={width}
                  name={"The Cozy Palace"}
                  type={"PRIVATE ROOM - 2 BEDS"}
                  price={"52"}
                  rating={1}
                  img_url={require("../../assets/home.jpg")}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1
  },
  wrapperSearching: {
    height: this.animatedHeaderHeight,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd"
  },
  sectionSearching: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 5,
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 1,
    marginTop: Platform.OS === "android" ? 30 : null
  }
});

export default Explore;
