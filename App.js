import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-react-native'

class App extends React.Component {
  state = {
    isTfReady: false
  }

  async componentDidMount() {
    // Wait for tf to be ready.
    await tf.ready()
    // Signal to the app that tensorflow.js can now be used.
    this.setState({
      isTfReady: true
    })

    console.log(this.state.isTfReady)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          TFJS ready?{' '}
          {this.state.isTfReady ? <Text>Yes</Text> : <Text>Loading Model</Text>}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
