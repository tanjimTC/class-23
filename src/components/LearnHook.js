import { useEffect, useState } from "react";
const LearnHook = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("John");

    console.log("The code is running");

    // useEffect(() => {
    //     document.title = `This is Learn Hook File ${count}`;
    // });

    useEffect(()=>{
        console.log("The useEffect is running");
    },[name]);


    return (
        <div>
            <h1 className="text-2xl text-center font-bold">Name is : {name}</h1>
            {/* make a button in tw css */}
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount(count + 1)}
            >
                Button clicked {count} times
            </button>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded ml-8"
            onClick={() => setName("Sajib")}
            >
                chnage name
            </button>
        </div>
    );
};

export default LearnHook;