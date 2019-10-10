import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
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
    this.model = await mobilenet.load()
    this.setState({ isModelReady: true })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>TFJS ready? {this.state.isTfReady ? <Text>Yes</Text> : ''}</Text>

        <Text>
          Model ready?{' '}
          {this.state.isModelReady ? (
            <Text>Yes</Text>
          ) : (
            <Text>Loading Model...</Text>
          )}
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
