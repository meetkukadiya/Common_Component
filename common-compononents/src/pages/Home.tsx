import React, { useState } from "react";
import Button from "../components/common_components/Button";
import InputBox from "../components/common_components/InputBox";

const Home = () => {
  const [enteredName, setEnteredName] = useState("");

  console.log("Entered value by user ==> ", enteredName);

  return (
    <div className="flex flex-col">
      <Button
        className="h-20 w-60 p-2 ml-3 bg-blue-950 text-white text-xl font-bold rounded-2xl mb-3 mt-3"
        onClick={() => console.log("Click on First Button !")}
      >
        <p>Please Enter the name</p>
      </Button>

      <InputBox
        type="input"
        placeholder="Please enter your name.."
        className="outline outline-2 ml-5 w-2/4 p-3 rounded-xl border-zinc-800"
        onChange={(e) => setEnteredName(e.target.value)}
      />
    </div>
  );
};

export default Home;
