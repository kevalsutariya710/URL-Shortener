import { useState } from "react";

const Home = ({ setInputValue }) => {


    const [value, setValue] = useState("")

    const handleClick = () => {
        setInputValue(value)
        setValue("")
    }

    return (
        <>
            <h1>URL Shortener</h1>



            <input
                type="search"
                id="default-search"
                placeholder="Enter or Pest URL...."
                value={value}
                onChange={e => setValue(e.target.value)}
                required />

            <button type="submit" onClick={handleClick}> Sort </button>

        </>
    )
}

export default Home;