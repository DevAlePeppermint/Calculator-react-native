
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {



  render() {

    return (
      <View style={styles.container}>

        <View style={styles.result}>
          <Text style={styles.resultText}>121</Text>
        </View>

        <View style={styles.calculation}>
          <Text style={styles.calculationText}>30+9</Text>
        </View>

        
        <View style={styles.buttons}>

          <View style={styles.numbers}>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>

            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>

            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>

            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>


          </View>


          <View style={styles.operations}>
          <Button title="+" />
          <Button title="-" />
          <Button title="/" />
          <Button title="*" />
          </View>

        </View>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultText:{
    fontSize: 50,
    textAlign: 'right',
    color: 'grey'
  },
  calculationText:{
    fontSize: 30,
    textAlign: 'right',
    color: 'grey'
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent:"center",
    paddingRight:20,

  },
  calculation:{
    flex: 1,
    backgroundColor: 'green',
    justifyContent:"center",
    paddingRight:20,

  },
  buttons:{
    flex: 7,
    flexDirection: 'row',
    
  },
  numbers:{
    flex: 3,
    backgroundColor: 'yellow'
  },
  row:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  operations:{
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'blue'

  }


});
