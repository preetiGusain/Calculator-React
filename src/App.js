import { useState } from 'react';
import './App.css';
import Screen from "./Screen";

function App() {

  const [previousValue, setPreviousValue] = useState('');
  const [previousOperator, setPreviousOperator] = useState('');


  const [screenValue, setScreenValue ] = useState('0');

  function takeInput(input) {
    if(screenValue=='0') {
      setScreenValue(input);
    } else {
      setScreenValue(screenValue + input);
    }
  }

  function clearInput() {
    setScreenValue('0');
  }

  function allClear() {
    setScreenValue('0');
    setPreviousOperator('');
    setPreviousValue('');
  }
  
  function operatorPressed(operator) {
    setPreviousValue(screenValue);
    setPreviousOperator(operator);
    setScreenValue('0');
  }

  function result() {
    let temp = 0;
    const currInt = parseInt(screenValue);
    const prevInt = parseInt(previousValue);
    if(previousOperator == ''){
      return;
    }
    if(previousOperator == '%'){
      temp = prevInt % currInt;
    }
    if(previousOperator == '/'){
      temp = prevInt / currInt;
    }
    if(previousOperator == '*'){
      temp = prevInt * currInt;
    }
    if(previousOperator == '+'){
      temp = prevInt + currInt;
    }
    if(previousOperator == '-'){
      temp = prevInt - currInt;
    }
    setScreenValue(String(temp));
    setPreviousOperator('');
    setPreviousValue('');
  }
  return (
    <div id="box">
        <Screen value={screenValue}/>
        <div id="button_box">
            <table>
                <tr>
                    <td><input id="AC" type="button" value="AC" class="round_button calc_operation" onClick={() => allClear()}/></td>
                    <td><input id="C" type="button" value="C" class="round_button calc_operation" onClick={() => clearInput()}/></td>
                    <td><input id="modulus" type="button" value="%" class="round_button calc_operation" onClick={() => operatorPressed('%')} /></td>
                    <td><input id="divide" type="button" value="÷" class="round_button airthmetic_operation" onClick={() => operatorPressed('/')}/></td>
                </tr>
                <tr>
                    <td><input id="seven" type="button" value="7" class="round_button" onClick={()=>takeInput("7")}/></td>
                    <td><input id="eight" type="button" value="8" class="round_button" onClick={()=>takeInput("8")}/></td>
                    <td><input id="nine" type="button" value="9" class="round_button" onClick={()=>takeInput("9")}/></td>
                    <td><input id="multiply" type="button" value="x" class="round_button airthmetic_operation" onClick={() => operatorPressed('*')}/></td>
                </tr>
                <tr>
                    <td><input id="four" type="button" value="4" class="round_button" onClick={()=>takeInput("4")}/></td>
                    <td><input id="five" type="button" value="5" class="round_button" onClick={()=>takeInput("5")}/></td>
                    <td><input id="six" type="button" value="6" class="round_button" onClick={()=>takeInput("6")}/></td>
                    <td><input id="subtract" type="button" value="-" class="round_button airthmetic_operation" onClick={() => operatorPressed('-')}/></td>
                </tr>
                <tr>
                    <td><input id="one" type="button" value="1" class="round_button" onClick={()=>takeInput("1")}/></td>
                    <td><input id="two" type="button" value="2" class="round_button" onClick={()=>takeInput("2")}/></td>
                    <td><input id="three" type="button" value="3" class="round_button" onClick={()=>takeInput("3")}/></td>
                    <td><input id="add" type="button" value="+" class="round_button airthmetic_operation" onClick={() => operatorPressed('+')}/></td>
                </tr>
                <tr>
                    <td colspan="2"><input id="zero" type="button" value="0" class="round_button" onClick={()=>takeInput("0")}/></td>
                    <td colspan="2"><input id="equals" type="button" value="="
                            class="round_button airthmetic_operation" onClick={() => result()}/></td>
                </tr>
            </table>
        </div>
    </div>
  );
}

export default App;
