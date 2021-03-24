import React from 'react'
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import * as firebase from 'firebase'
export default class ProfileScreen extends React.Component {


    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <Text>Profile Screen</Text>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})