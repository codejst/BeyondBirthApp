import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class HomeScreen extends Component {

  onPressVid = () => {
    console.log("Pressed");
    Actions.Videos();
  }
  onPressMood = () => {
    console.log("Pressed");
    Actions.HealthNavigationScreen();
  }
  onPressLocate = () => {
    console.log("Pressed");
    Actions.Locate();
  }

  onPressSettings = () => {
    console.log("Pressed");
    Actions.Settings();
  }

  render() {
    return (
      <View style={styles.container}>
        
        <TouchableOpacity
         style={styles.button1}
         onPress={this.onPressVid}
       >
       <Text style={styles.buttonText}> Videos </Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button2}
         onPress={this.onPressMood}
       >
       <Text style={styles.buttonText}> Health Dashboard </Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button3}
         onPress={this.onPressLocate}
       >
       <Text style={styles.buttonText}> Service Locator </Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button4}
         onPress={this.onPressSettings}
       >
       <Text style={styles.buttonText}> Settings </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button1: {
    flexDirection: 'row',
    height: (Dimensions.get('window').height) /4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#379FFB',
  },
  button2: {
    flexDirection: 'row',
    height: (Dimensions.get('window').height) /4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2190FB'
  },
  button3: {
    flexDirection: 'row',
    height: (Dimensions.get('window').height) /4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E74E3'
  },
  button4: {
    flexDirection: 'row',
    height: (Dimensions.get('window').height) /4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B5EC8'
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    fontFamily: 'notoserif',
    color: 'white'
  }
})
