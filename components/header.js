import React from 'react';
import { StatusBar, View } from 'react-native';

export default function header() {
    return (
      <View style={{
          height: StatusBar.currentHeight || 20 /** ios fallback cuz apparently it does not always return a value**/,
          backgroundColor: '#000000'}}
      >
      </View>
    );
}
