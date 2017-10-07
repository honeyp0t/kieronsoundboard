import React from 'react';
import { Dimensions, StatusBar, TouchableHighlight, StyleSheet, Image, Text, View } from 'react-native';
import Header from './components/header';
import Sound from 'react-native-sound';

var data = {
    rows: [{
            cols: [{
                    img: require('./resources/img/dreamer.jpg'),
                    sound: 'appar_short.mp3'
                },
                {
                    img: require('./resources/img/freakout.jpg'),
                    sound: 'wer_jamp_short_loud.mp3'
                },
                {
                    img: require('./resources/img/hush.jpeg'),
                    sound: 'sch_loud.mp3'
                }
            ]
        },
        {
            cols: [{
                    img: require('./resources/img/gamer.jpg'),
                    sound: 'han_i_busken_short.mp3'
                },
                {
                    img: require('./resources/img/loving.jpg'),
                    sound: 'inte_bil_short_loud.mp3'
                },
                {
                    img: require('./resources/img/hamster.jpg'),
                    sound: 'knockad_dod_short.mp3'
                }
            ]
        },
        {
            cols: [{
                    img: require('./resources/img/rage.jpg'),
                    sound: 'murder.mp3'
                },
                {
                    img: require('./resources/img/prettyboi.jpg'),
                    sound: 'bradis_short_loud.mp3'
                },
                {
                    img: require('./resources/img/cute.jpg'),
                    sound: 'vad_hallar_han_pa_med_short.mp3'
                }
            ]
        },
        {
            cols: [{
                    img: require('./resources/img/pissedoff.jpg'),
                    sound: 'vad_kant_short.mp3'
                },
                {
                    img: require('./resources/img/pissedoff2.jpg'),
                    sound: 'arg_short.mp3'
                },
                {
                    img: require('./resources/img/pissedoff3.jpg'),
                    sound: 'arg_som_fan.mp3'
                }
            ]
        },
    ]
};

export default class App extends React.Component {
  render() {

    return (
      <View>
          {/* Verkar inte behövas när man inte kör expo: <Header /> */}
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
                  return this.newImage(col.img, col.sound, rowIdx + ':' + colIdx);
              })
          }
		</View>
	);
  }

  newImage(img, sound, key) {

	return (
      <TouchableHighlight key={key} style={styles.touchable} onPress={() => {this.playSound(sound)}}>
          <Image source={img} style={styles.img} resizeMode="contain"/>
      </TouchableHighlight>
	);
  }

  playSound(soundFilename) {
      var clip = new Sound(soundFilename, Sound.MAIN_BUNDLE, (error) => {
          if (error) {
              console.log('fel vid laddning av ljud');
              console.log(error);
          } else {
              console.log('ja du ljudet är ju laddat');
              clip.play((success) => {
                  if (success) {
                      console.log('playback ok');
                      clip.release();
                  } else {
                      console.log('fel vid playback');
                      console.log(success);
                      clip.relase();
                  }
              });

          }
      });
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
  },
  headerimg: {
      flex: 1,
      marginTop: 0,
      paddingTop: 0,
  },
  imagerow: {
    flex: 1,
	flexDirection: 'row',
  },
  img: {
  	flex: 1,
	width: "100%",
	height: "100%",
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
