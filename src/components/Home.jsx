import { useState } from "react";

const Home = ({ setInputValue }) => {


    const [value, setValue] = useState("")

    const handleClick = () => {
        setInputValue(value)
        setValue("")
    }

    return (
        <>
            <div className="content-center">

                <h1 className="flex justify-center items-center">URL Shortener</h1>
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