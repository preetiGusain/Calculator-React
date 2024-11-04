import '../App.css';

function Screen({value}) {
    return (
        <div id="screen">
            <input id="screen_text" type="text" disabled value={value} />
        </div>
    );
}

export default Screen;
