import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Touchable,
  ProgressBarAndroidBase,
} from "react-native";

const Card = (props) => {
  return (
    <TouchableOpacity style={styles.buttonBody}>
      <Text style={styles.buttonText}>
          {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttonBody: {
        backgroundColor: "#00aeef",
        width: "100%",
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    }
});

export { Card };
 