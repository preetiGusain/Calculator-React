import '../../App.css';

function ClearButton({ setScreenValue }) {

    function clearInput() {
        setScreenValue('0');
    }

    return (
        <td><input id="C" type="button" value="C" class="round_button calc_operation" onClick={() => clearInput()} /></td>
    );
}

export default ClearButton;
