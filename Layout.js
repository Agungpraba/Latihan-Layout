import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class App extends Component {
  render() {
    return (
       <View style={styles.containerMain}>

        <View style={styles.box1}>
          <Text style={styles.text1}>Pendidikan Teknik Informatika</Text>
        </View>

        <View style={styles.box2}>
          <Text style={styles.text2}>Slider</Text>
        </View>

        <View style={styles.box3}>
          <View style={styles.boxk1}>
            <View style={styles.boxk2}>
              <Text style={styles.text2}>1</Text>
            </View>
            <View style={styles.boxk2}>
              <Text style={styles.text2}>2</Text>
            </View>
            <View style={styles.boxk2}>
              <Text style={styles.text2}>3</Text>
            </View>
            <View style={styles.boxk2}>
              <Text style={styles.text2}>4</Text>
            </View>
          </View>

          <View style={styles.boxk1}>
            <View style={styles.boxk2}>
              <Text style={styles.text2}>5</Text>
            </View>
            <View style={styles.boxk2}>
              <Text style={styles.text2}>6</Text>
            </View>
            <View style={styles.boxk2}>
              <Text style={styles.text2}>7</Text>
            </View>
            <View style={styles.boxk2}>
              <Text style={styles.text2}>8</Text>
            </View>
          </View>
        </View>


        <View style={styles.box4}>
          <Text style={styles.text3}>#JaenKuliahdiPTI</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#00FFFF',
    flexDirection: 'column'
  },

  box1: {
    flex: 2,
    backgroundColor: '#7FFF00',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  box2: {
    flex: 4,
    backgroundColor: '#FF7F50',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  box3: {
    flex: 4,
    backgroundColor: '#BDB76B',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  box4: {
    flex: 2,
    backgroundColor: '#8B0000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  boxk1: {
    flex: 1,
    backgroundColor: '#673AB7',
    flexDirection: 'row',
  },

  boxk2: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30
  },

  text1: {
    fontSize: 30,
    fontWeight: 'normal',
  },

  text2: {
    fontSize: 30,
  },

  text3: {
    fontSize: 30,
  },
});
