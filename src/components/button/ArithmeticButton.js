import '../../App.css';

function ArithmeticButton({value, operatorPressed}) {
    return (
        <td><input id={value} type="button" value={value} class="round_button arithmetic_operation" onClick={() => operatorPressed(value)} /></td>
    );
}

export default ArithmeticButton;
