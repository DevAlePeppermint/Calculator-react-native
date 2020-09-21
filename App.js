
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(){
    super ()
    this.state ={
      resultText:"",
      calculationText:""
    }

    this.operations = ['DEL','+', '-', '*', '/']

  }

  calculateResult() {
    const text = this.state.resultText
    console.log(eval(text))
      this.setState({
        calculationText: eval(text)
      })

  }

  validate(){
      const text = this.state.resultText
        switch(text.slice(-1)) {
          case '+':
          case '-':
          case '*':
          case '/':
            return false
        }
      return true
  } 


  buttonPressed(text){
    //console.log(text)

    if(text == '='){
      return this.validate() && this.calculateResult()
    }

    this.setState({
      resultText: this.state.resultText+text
    })


  }

  operate(operation) {
    switch(operation){
      case 'DEL':  
        let text = this.state.resultText.split('')
        text.pop()
        text.join('')
        this.setState({
            resultText: text.join('')
        })
        break;
      
      case '+':
      case '-':
      case '*':
      case '/':
          const lastChar = this.state.resultText.split('').pop()

          if(this.operations.indexOf(lastChar) > 0) return

          if(this.state.text == "") return

          this.setState({
            resultText: this.state.resultText + operation

          })
      


    }
  }

  render() {


    let rows = []
    let numb = [[1,2,3], [4,5,6], [7,8,9], [',',0,'=']]
    for (let i=0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {

        row.push(
        <TouchableOpacity key={numb[i][j]} onPress={() => this.buttonPressed(numb[i][j]) } style={styles.btn}> 
          <Text style={styles.btnText}>{numb[i][j]}</Text>
        </TouchableOpacity>)
      }

      rows.push(<View key={i} style = {styles.row}>{row}</View>)

    }

    //this.operations = ['D','+', '-', '*', '/']
    let ops=[]
    for(let i = 0; i<5; i++) {

        ops.push(
          <TouchableOpacity key={this.operations[i]} style={styles.btn} onPress ={() => this.operate(this.operations[i])}> 
            <Text style={[styles.btnText, styles.operationTxtColor]}>{this.operations[i]}
            </Text>
          </TouchableOpacity>)
    }


    return (
      <View style={styles.container}>

        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>

        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
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
    fontSize: 30,
    textAlign: 'right',
    color: 'grey'
  },
  calculationText:{
    fontSize: 60,
    textAlign: 'right',
    color: 'black'
  },
  result: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:"center",
    paddingRight:20,

  },
  calculation:{
    flex: 2,
    backgroundColor: 'white',
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
    alignSelf:'stretch',
  },
  btnText:{
    fontSize: 30
  },
  operationTxtColor:{
    color:'white',
  },

  numbers:{
    flex: 3,
    backgroundColor: '#fff100',
    borderRadius: 10,
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
    backgroundColor: 'black',
    borderRadius: 10,

  }


});
