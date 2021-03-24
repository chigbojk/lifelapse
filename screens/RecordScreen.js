import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Platform, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

// https://reactnativemaster.com/react-native-camera-expo-example/

export default class RecordScreen extends React.Component {
  
  state = {
    hasPermission: null,
    cameraType: Camera.Constants.Type.back,
    recording: false
  }
  
  async componentDidMount() {
    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    // Camera roll Permission 
    if (Platform.OS === 'ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
    // Camera Permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  }

  handleCameraType=()=>{
    const { cameraType } = this.state

    this.setState({cameraType:
      cameraType === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back
    })
  }

  
  takePicture = async () => {
    if (this.camera) {
        if (!this.state.recording){
          this.state.recording = true
          let video = await this.camera.recordAsync();

          console.log(video)
          MediaLibrary.saveToLibraryAsync(video.uri);
        }
        else{
          this.state.recording = false
          this.camera.stopRecording()
        }
        this.state.recording = false
    }
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
  }
  
render(){
    const { hasPermission } = this.state

    let button = (
      <TouchableOpacity onPress={()=>this.takePicture()}>
        <Text style={{ fontSize: 50 }}> RECORD </Text>
      </TouchableOpacity>
    );

    if (!this.state.recording) {
      button = (
        <TouchableOpacity 
          onPress={()=>this.takePicture()}
        >
          <Text style={{ fontSize: 50 }}> STOP </Text>
        </TouchableOpacity>
      );
    }

    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (

        
          <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={this.state.cameraType}  ref={ref => {this.camera = ref}}>
              
              <SafeAreaView>

                {button}
              </SafeAreaView>
              <View style={{ flex:1, flexDirection:"row",justifyContent:"space-between",margin:30 }}>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent'                 
                  }}
                  onPress={()=>this.pickImage()}>
                  <Ionicons
                      name="ios-photos"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.takePicture()}
                  >
                  <FontAwesome
                      name="camera"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.handleCameraType()}
                  >
                  <MaterialCommunityIcons
                      name="camera-switch"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity>
              </View>
            </Camera>
        </View>
      );
    }
    
}
}