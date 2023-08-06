function Joke (props) {
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchine: {props.punchline}</p>
            <hr />
        </div>
    )
};

export default Joke;