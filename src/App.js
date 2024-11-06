import { useState } from 'react';
import './App.css';
import Screen from "./components/Screen";
import NumButton from './components/button/NumButton';
import ACButton from './components/button/ACButton';
import ClearButton from './components/button/ClearButton';
import ArithmeticButton from './components/button/ArithmeticButton';

function App() {

  const [previousValue, setPreviousValue] = useState('');
  const [previousOperator, setPreviousOperator] = useState('');
  const [screenValue, setScreenValue] = useState('0');

  function takeInput(input) {
    if (screenValue == '0') {
      setScreenValue(input);
    } else {
      setScreenValue(screenValue + input);
    }
  }

  function operatorPressed(operator) {
    if (previousOperator !== '') {
      const temp = calc();
      setPreviousValue(String(temp));
    } else {
      setPreviousValue(screenValue);
    }
    setPreviousOperator(operator);
    setScreenValue('0');
  }

  function result() {
    if(previousOperator != '') {
      calc(previousValue, screenValue, previousOperator);
      setPreviousOperator('');
      setPreviousValue('');
    }
  }

  const calc  = async (num1, num2 , operator) => {
    try {
      const response = await fetch(`https://calculator-api-pnqu.onrender.com/${operator}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ num1: Number(num1), num2: Number(num2) }),
      });
      const data = await response.text();
      setScreenValue(data);
    } catch (error) {
        console.error("Calculation error", error);
    }
  };

  return (
    <div id="box">
      <Screen value={screenValue} />
      <div id="button_box">
        <table>
          <tr>
            <ACButton setPreviousOperator={setPreviousOperator} setPreviousValue={setPreviousValue} setScreenValue={setScreenValue}/>
            <ClearButton setScreenValue={setScreenValue}/>
            <ArithmeticButton value={"%"} operatorPressed={operatorPressed}/>
            <ArithmeticButton value={"/"} operatorPressed={operatorPressed}/>
          </tr>
          <tr>
            <NumButton value={"7"} takeInput={takeInput} />
            <NumButton value={"8"} takeInput={takeInput} />
            <NumButton value={"9"} takeInput={takeInput} />
            <ArithmeticButton value={"*"} operatorPressed={operatorPressed}/>
          </tr>
          <tr>
            <NumButton value={"4"} takeInput={takeInput} />
            <NumButton value={"5"} takeInput={takeInput} />
            <NumButton value={"6"} takeInput={takeInput} />
            <ArithmeticButton value={"-"} operatorPressed={operatorPressed}/>
          </tr>
          <tr>
            <NumButton value={"1"} takeInput={takeInput} />
            <NumButton value={"2"} takeInput={takeInput} />
            <NumButton value={"3"} takeInput={takeInput} />
            <ArithmeticButton value={"+"} operatorPressed={operatorPressed}/>
          </tr>
          <tr>
            <td colspan="2"><input id="zero" type="button" value="0" class="round_button" onClick={() => takeInput("0")} /></td>
            <td colspan="2"><input id="equals" type="button" value="="
              class="round_button airthmetic_operation" onClick={() => result()} /></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
