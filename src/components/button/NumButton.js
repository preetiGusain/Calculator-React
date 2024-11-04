import '../../App.css';

function NumButton({value, takeInput}) {
    
    return (
        <td><input id={value} type="button" value={value} class="round_button" onClick={()=>takeInput(value)}/></td>
    );
}

export default NumButton;
