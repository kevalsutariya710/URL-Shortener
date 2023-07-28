import { useState } from "react";
import "./home.css"

const Home = ({ setInputValue }) => {


    const [value, setValue] = useState("")

    const handleClick = () => {
        setInputValue(value)
        setValue("")
    }

    return (
        <>
            <div>
                <h1>URL Shortener</h1>
                <input
                    type="text"
                    className="inputTag"
                    placeholder="Past The Link"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <input type="button" value="Submit" className="subButton"
                    onClick={handleClick}
                />
            </div>
        </>
    )
}

export default Home;