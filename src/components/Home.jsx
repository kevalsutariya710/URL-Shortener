import { useState } from "react";

const Home = ({ setInputValue, setLoad }) => {


    const [value, setValue] = useState("")

    const handleClick = () => {
        setInputValue(value)
        setValue("")
        setLoad(false)
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
                        required
                    />
                    <button type="submit" onClick={handleClick}>Short</button>
                </div>
            </div>
        </div>
    )
}

export default Home;