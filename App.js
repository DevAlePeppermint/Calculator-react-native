
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {



  render() {


    let rows =[]
    let numb = [[1,2,3], [4,5,6], [7,8,9], [0,0,0]]
    for (let i=0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {

        row.push(<TouchableOpacity style={styles.btn}><Text style={styles.btnText}>{numb[i][j]}</Text></TouchableOpacity>)
      }

      rows.push(<View style = {styles.row}>{row}</View>)

    }

    let operations = ['+', '-', '*', '/']
    let ops=[]
    for(let i = 0; i<4; i++) {

        ops.push(<TouchableOpacity style={styles.btn}><Text style={[styles.btnText, styles.operationTxtColor]}>{operations[i]}</Text></TouchableOpacity>)
    }


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

            {rows}
  
          </View>


          <View style={styles.operations}>
            {ops}
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

  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    alignSelf:'stretch'
  },
  btnText:{
    fontSize: 30
  },
  operationTxtColor:{
    color:'white',
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
