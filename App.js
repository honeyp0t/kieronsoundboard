import React from 'react';
import { TouchableHighlight, StyleSheet, Image, Text, View } from 'react-native';
import Header from './components/header';
//import Sound from 'react-native-sound';

export default class App extends React.Component {
  render() {

    return (
      <View>
          <Header />
          <View style={styles.container}>
              <View style={styles.header}>
                  <Image source={require('./resources/img/header.png')} style={styles.headerimg} resizeMode="contain" />
              </View>
              {this.newRow()}
              {this.newRow()}
              {this.newRow()}
              {this.newRow()}
          </View>
      </View>
    );
  }

  newRow() {
	return (
        <View style={styles.imagerow}>
		  {this.newImage('dreamer.jpg')}
		  {this.newImage('freakout.jpg')}
		  {this.newImage('hush.jpeg')}
		</View>
	);
  }

  newImage(imgname) {
//      var clip = new Sound(require('./frog.wav'));

	return (
      <TouchableHighlight style={styles.touchable} onPress={this.playSound}>
          <Image source={require('./resources/img/lul.png')} style={styles.img} resizeMode="contain"/>
      </TouchableHighlight>
	);
  }

  playSound() {
      //clip.play();
  }

}

const styles = StyleSheet.create({
  container: {
//    flex: 1,
//    flexDirection: 'column',
    height: 500,
    backgroundColor: '#aaaaff',
    alignItems: 'center',
//    paddingTop: 10, // TODO bör vara storlek på telefonuits topram, gör till komponennt istället
	//height:
 //   justifyContent: 'space-around',
  },
  header: {
    flex: 1.5,
    flexDirection: 'row',
    backgroundColor: '#ddccee',
  },
  headerimg: {
      flex: 1,
  },
  imagerow: {
    flex: 1,
	flexDirection: 'row',
//	justifyContent: 'space-around',
	backgroundColor: '#bbccaa',
  },
  img: {
  	flex: 1,
	width: "100%",
	height: "100%",
	backgroundColor: '#bbaabb',
	//flexDirection: 'column',
	resizeMode: 'contain',
	margin: 4,
  },
  touchable: {
      flex: 1,
      width: '33%',
      height: '100%',
  },
});
