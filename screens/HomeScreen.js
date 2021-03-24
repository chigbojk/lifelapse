import React from "react";
import {
  View,
  CustomView,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Image,
} from "react-native";

import { ListItem, Button, Icon } from "react-native-elements";
import {Card} from '../components/Card'
import * as firebase from "firebase";

export default class HomeScreen extends React.Component {
  state = {
    email: "",
    displayName: "",
  };

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;

    this.setState({ email, displayName });
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity onPress={this.signOutUser}>
          <Text style={{ paddingHorizontal: 20 }}> Sign out</Text>
        </TouchableOpacity>
        <ScrollView>

          {/* <Card onPress={() => console.log('button pressed')}>My card ...</Card> */}
          <Text
            style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}
          >
            Hey, {this.state.displayName}
          </Text>
          <View style={{ backgroundColor: "white", paddingTop: 20 }}>
            <Text
              style={{ fontSize: 30, fontWeight: "700", paddingHorizontal: 20 }}
            >
              Start a Lifelapse
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "300",
                fontStyle: "italic",
                paddingHorizontal: 20,
                paddingTop: 10,
              }} 
            >
              Solo
            </Text>
            <View style={{ height: 240, marginTop: 20 }}>
              <ScrollView
                scrollEventThrottle={16}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {/* Pomodoro  */}
                <View style={styles.card_view} onPress={() => alert("hello")}>
                  <View style={{ flex: 2 }}>
                    <Image
                      source={require("../images/tomato.jpeg")}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: "cover",
                      }}
                    ></Image>
                  </View>

                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={styles.card_text_header}>Pomodoro</Text>
                    <Text style={{ fontWeight: "200", fontSize: 16 }}>
                      25 minutes
                    </Text>
                  </View>
                </View>

                {/* Study  */}
                <View style={styles.card_view}>
                  <View style={{ flex: 2 }}>
                    <Image
                      source={require("../images/tomato.jpeg")}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: "cover",
                      }}
                    ></Image>
                  </View>

                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={styles.card_text_header}>Study</Text>
                    <Text style={styles.card_text_time}>1 hour</Text>
                  </View>
                </View>

                {/* Exercise  */}
                <View style={styles.card_view}>
                  <View style={{ flex: 2 }}>
                    <Image
                      source={require("../images/tomato.jpeg")}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: "cover",
                      }}
                    ></Image>
                  </View>

                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={styles.card_text_header}>Exercise</Text>
                    <Text style={styles.card_text_time}>40 minutes</Text>
                  </View>
                </View>

                {/* Meditation  */}
                <View style={styles.card_view}>
                  <View style={{ flex: 2 }}>
                    <Image
                      source={require("../images/tomato.jpeg")}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: "cover",
                      }}
                    ></Image>
                  </View>

                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={styles.card_text_header}>Meditation</Text>
                    <Text style={styles.card_text_time}>15 minutes</Text>
                  </View>
                </View>
              </ScrollView>
            </View>

            {/* Group */}
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "300",
                  fontStyle: "italic",
                  paddingTop: 10,
                }}
              >
                Grouplapse
              </Text>
            </View>

            <View style={{ height: 240, marginTop: 20 }}>
              <ScrollView
                scrollEventThrottle={16}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {/* Pomodoro  */}
                <View style={styles.card_view}>
                  <View style={{ flex: 2 }}>
                    <Image
                      source={require("../images/tomato.jpeg")}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: "cover",
                      }}
                    ></Image>
                  </View>

                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={styles.card_text_header}>Duo</Text>
                    <Text style={{ fontWeight: "200", fontSize: 16 }}>2</Text>
                  </View>
                </View>

                {/* Study  */}
                <View style={styles.card_view}>
                  <View style={{ flex: 2 }}>
                    <Image
                      source={require("../images/tomato.jpeg")}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: "cover",
                      }}
                    ></Image>
                  </View>

                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={styles.card_text_header}>Trio</Text>
                    <Text style={styles.card_text_time}>3</Text>
                  </View>
                </View>

                {/* Exercise  */}
                <View style={styles.card_view}>
                  <View style={{ flex: 2 }}>
                    <Image
                      source={require("../images/tomato.jpeg")}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: "cover",
                      }}
                    ></Image>
                  </View>

                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={styles.card_text_header}>Quad</Text>
                    <Text style={styles.card_text_time}>4</Text>
                  </View>
                </View>

                {/* Meditation  */}
                <View style={styles.card_view}>
                  <View style={{ flex: 2 }}>
                    <Image
                      source={require("../images/tomato.jpeg")}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: "cover",
                      }}
                    ></Image>
                  </View>

                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={styles.card_text_header}>Meditation</Text>
                    <Text style={styles.card_text_time}>15 minutes</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card_view: {
    height: 240,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: "#dddddd",
    color: "grey",
  },

  card_text_header: {
    fontWeight: "500",
    fontSize: 18,
    color: "#E9446A",
  },

  card_text_time: {
    fontWeight: "200",
    fontSize: 16,
  },
});
