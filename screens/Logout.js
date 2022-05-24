import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

export default class Logout extends Component {
  componentDidMount() {
    firebase.auth().signOut();
  }

  fetchUser = ()=>{

    let theme;
    firebase
    .database()
    .ref("/users/" + firebase.auth().currentUser.uid)
    .on("value", snapshot => {

     theme = snapshot.val().current_theme;
     this.setState({light_theme:theme === "light"});

    });

   };

  render() {
    return (
      <View style={styles.container}>
        <Text>Logout</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
