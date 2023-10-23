function Button(prop) {
    return (
        <button
            type="button"
            className={`Button focus ${null}`}
            onClick={prop.handelClick}
            aria-controls={null}
        >
            {prop.content}
        </button>
    );
}
export default Button;
