import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar
} from 'react-native'
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-react-native'
import * as mobilenet from '@tensorflow-models/mobilenet'

class App extends React.Component {
  state = {
    isTfReady: false,
    isModelReady: false
  }
  async componentDidMount() {
    await tf.ready()
    this.setState({
      isTfReady: true
    })
    // this.model = await mobilenet.load()
    // this.setState({ isModelReady: true })
  }
  render() {
    const { isTfReady, isModelReady } = this.state
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <View style={styles.loadingContainer}>
          <Text style={styles.commonTextStyles}>
            TFJS ready? {isTfReady ? <Text>✅</Text> : ''}
          </Text>

          <View style={styles.loadingModelContainer}>
            <Text style={styles.commonTextStyles}>Model ready? </Text>
            {isTfReady ? (
              <Text style={styles.commonTextStyles}>✅</Text>
            ) : (
              <ActivityIndicator size='small' />
            )}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171f24'
  },
  loadingContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  commonTextStyles: {
    color: 'white',
    fontSize: 16
  },
  loadingModelContainer: {
    flexDirection: 'row',
    marginTop: 10
  }
})

export default App
