import { useEffect, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import axios from "axios"


const Result = ({ inputValue }) => {

    const [result, setResult] = useState("")

    const fetchData = async () => {
        try {
            const res = await axios(`https://api.shrtco.de/v2/shorten?url= ${inputValue}`)
            setResult(res.data.result.full_short_link2);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        if (inputValue.length) {
            fetchData();
        }
    }, [inputValue])



    return (
        <>
            <p>{result}</p>
            <CopyToClipboard text={result}>
                <button>Copy</button>
            </CopyToClipboard>
        </>

    )
}

export default Result