import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, ActivityIndicator} from 'react-native'
import * as firebase from 'firebase'
export default class LoadingScreen extends React.Component {

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth")
        })
    }

    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <Text>Loading...</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
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