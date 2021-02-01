const GamePage = ({onpageChange}) => {
    let handleClick = () => {
        onpageChange && onpageChange('app')
    }
    return (
        <div>
            This is Game Page!!!
            <button onClick={handleClick}>
                Home Page
            </button>
        </div>

    )
}

export default GamePage;