"use client"
import { useState } from "react"
export default function Counter() {
    const [count, setCount] = useState(0)
    const [index, setIndex] = useState(0);
    const listaofBanks = ["Meezan Bank Ltd", "Habib Bank Ltd", "MCB Bank Ltd", "UBL Bank Ltd", "National Bank of Pakistan"]
    const increment = () => {
        setCount(count + 1)
        // console.log(count)
    }
    const decrement = () => {
        setCount(count - 1)
        // console.log(count);
    }
    const handleNext = () => {
        setIndex((index + 1) % listaofBanks.length);
    }
    const handlePrev = () => {
        setIndex((index - 1) % listaofBanks.length);
    }
    const resetHandler = () => {
        setCount(0)
    }
    return (

        <><center>
            <br />
            <button onClick={handleNext} className="inline-block bg-blue-400 rounded-full px-8 py-1 text-sm font-semibold text-red-700 mr-2 "> Next </button>
            <span><strong>{listaofBanks[index]}</strong></span>
            <button onClick={handlePrev} className="inline-block bg-blue-400 rounded-full px-8 py-1 text-sm font-semibold text-red-700 mr-2 "> Previous </button>
            <br />
            <br />
            <button onClick={decrement} className="inline-block bg-pink-200 rounded-full px-8 py-1 text-sm font-semibold text-black-700 mr-2 ">Remove</button>
            <span>{count} </span>
            <button onClick={increment} className="inline-block bg-pink-200 rounded-full px-8 py-1 text-sm font-semibold text-Black-700 mr-2 ">Add</button>
            <br /><button onClick={resetHandler} className="inline-block bg-yellow-200 rounded-full px-8 py-1 text-sm font-semibold text-black-700 mr-2 ">Reset</button>
        </center></>
    )
}