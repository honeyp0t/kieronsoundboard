import React from 'react';
import { Dimensions, StatusBar, TouchableHighlight, StyleSheet, Image, Text, View } from 'react-native';
import Header from './components/header';
//import Sound from 'react-native-sound';

var data = {
    rows: [{
            cols: [{
                    img: require('./resources/img/dreamer.jpg')
                },
                {
                    img: require('./resources/img/freakout.jpg')
                },
                {
                    img: require('./resources/img/hush.jpeg')
                }
            ]
        },
        {
            cols: [{
                    img: require('./resources/img/retard.jpg')
                },
                {
                    img: require('./resources/img/loving.jpg')
                },
                {
                    img: require('./resources/img/hamster.jpg')
                }
            ]
        },
        {
            cols: [{
                    img: require('./resources/img/rage.jpg')
                },
                {
                    img: require('./resources/img/prettyboi.jpg')
                },
                {
                    img: require('./resources/img/cute.jpg')
                }
            ]
        },
        {
            cols: [{
                    img: require('./resources/img/pissedoff.jpg')
                },
                {
                    img: require('./resources/img/pissedoff2.jpg')
                },
                {
                    img: require('./resources/img/pissedoff3.jpg')
                }
            ]
        },
    ]
};

export default class App extends React.Component {
  render() {

    return (
      <View>
          <Header />
          <View style={styles.container}>
              <View style={styles.header}>
                  <Image source={require('./resources/img/header.png')} style={styles.headerimg} resizeMode="contain" />
              </View>
              {
                  data.rows.map((row, rowIdx) => {
                      return this.newRow(row, rowIdx);
                  })
              }
          </View>
      </View>
    );
  }

  newRow(row, rowIdx) {
	return (
        <View key={rowIdx} style={styles.imagerow}>
          {
              row.cols.map((col, colIdx) => {
                  return this.newImage(col.img, rowIdx + ':' + colIdx);
              })
          }
		</View>
	);
  }

  newImage(img, key) {
//      var clip = new Sound(require('./frog.wav'));

	return (
      <TouchableHighlight key={key} style={styles.touchable} onPress={this.playSound}>
          <Image source={img} style={styles.img} resizeMode="contain"/>
      </TouchableHighlight>
	);
  }

  playSound() {
      //clip.play();
  }

}

const styles = StyleSheet.create({
  container: {
    height: (Dimensions.get('window').height - StatusBar.currentHeight),
    backgroundColor: '#01050c',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor: '#ddccee',
  },
  headerimg: {
      flex: 1,
      marginTop: 0,
      paddingTop: 0,
      //backgroundColor: '#aaccdd',
  },
  imagerow: {
    flex: 1,
	flexDirection: 'row',
	//backgroundColor: '#bbccaa',
  },
  img: {
  	flex: 1,
	width: "100%",
	height: "100%",
	//backgroundColor: '#bbaabb',
	//flexDirection: 'column',
	resizeMode: 'contain',
	margin: 4,
  },
  touchable: {
      flex: 1,
      width: '33%',
      height: '100%',
      borderWidth: 0,
  },
});
