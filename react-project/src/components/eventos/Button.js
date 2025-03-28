function Button({ texto, event }) {
    return <button onClick={event}>{texto}</button>
}

export default Button;