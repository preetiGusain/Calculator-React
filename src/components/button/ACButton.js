import '../../App.css';

function ACButton({ setScreenValue, setPreviousOperator, setPreviousValue }) {

    function allClear() {
        setScreenValue('0');
        setPreviousOperator('');
        setPreviousValue('');
    }

    return (
        <td><input id="AC" type="button" value="AC" class="round_button calc_operation" onClick={() => allClear()} /></td>
    );
}

export default ACButton;
