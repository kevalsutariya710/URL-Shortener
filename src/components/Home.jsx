import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ setInputValue, setLoad }) => {


    const [value, setValue] = useState("")

    const handleClick = () => {

        if (value == "") {
            toast.error('Please Enter URL', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            setInputValue(value)
            setValue("")
            setLoad(false)
        }
    }

    return (
        <>
            <div className="inputContainer">
                <h1>URL Shortener</h1>
                <div className="div1">
                    <div className="search">
                        <input
                            placeholder="Please Enter a URL..."
                            type="text"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                        <button type="submit" onClick={handleClick}>Short</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Home;