import { useState } from "react";

const Home = ({ setInputValue, setLoading }) => {


    const [value, setValue] = useState("")

    const handleClick = () => {
        setInputValue(value)
        setValue("")
        setLoading(false)
    }

    return (
        <div className="inputContainer">
            <h1>URL <span>Shortener</span></h1>
            <div className="div1">
                <div className="search">
                    <input
                        placeholder="Please Enter a URL..."
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        required />
                    <button type="submit" onClick={handleClick}>Short</button>
                </div>
            </div>
        </div>
    )
}

export default Home;