import './App.css';

function App() {
  return (
    <div id="box">
        <div id="screen">
            <input id="screen_text" type="text" disabled value="0"/>
        </div>
        <div id="button_box">
            <table>
                <tr>
                    <td><input id="AC" type="button" value="AC" class="round_button calc_operation"/></td>
                    <td><input id="C" type="button" value="C" class="round_button calc_operation"/></td>
                    <td><input id="modulus" type="button" value="%" class="round_button calc_operation"/></td>
                    <td><input id="divide" type="button" value="÷" class="round_button airthmetic_operation"/></td>
                </tr>
                <tr>
                    <td><input id="seven" type="button" value="7" class="round_button"/></td>
                    <td><input id="eight" type="button" value="8" class="round_button"/></td>
                    <td><input id="nine" type="button" value="9" class="round_button"/></td>
                    <td><input id="multiply" type="button" value="x" class="round_button airthmetic_operation"/></td>
                </tr>
                <tr>
                    <td><input id="four" type="button" value="4" class="round_button"/></td>
                    <td><input id="five" type="button" value="5" class="round_button"/></td>
                    <td><input id="six" type="button" value="6" class="round_button"/></td>
                    <td><input id="subtract" type="button" value="-" class="round_button airthmetic_operation"/></td>
                </tr>
                <tr>
                    <td><input id="one" type="button" value="1" class="round_button"/></td>
                    <td><input id="two" type="button" value="2" class="round_button"/></td>
                    <td><input id="three" type="button" value="3" class="round_button"/></td>
                    <td><input id="add" type="button" value="+" class="round_button airthmetic_operation"/></td>
                </tr>
                <tr>
                    <td colspan="2"><input id="zero" type="button" value="0" class="round_button"/></td>
                    <td colspan="2"><input id="equals" type="button" value="="
                            class="round_button airthmetic_operation"/></td>
                </tr>
            </table>
        </div>
    </div>
  );
}

export default App;
