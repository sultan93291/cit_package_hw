"use client";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Modal from "./Components/Modal";

function App() {
  const [Project, setProject] = useState("no project");
  const [Show, setShow] = useState(false);
  const [box, setbox] = useState(true)

  const handleShow = () => {
    setShow(true);
    setbox(false)
  };

  let dmyNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Modal show={Show} setShow={setShow} text={"home page text"} setbox={setbox} ></Modal>
      <div>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "hey i'm a full-stack dev ",
            1000,
            "hey i'm a mern-stack dev ",
            1000,
            "hey i'm a front-end dev ",

            1000,
            "hey i'm a back-end dev ",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
          wrapper="h1"
        />
      </div>
      <div>
        <TypeAnimation
          sequence={[
            1500,
            () => {
              setProject("html");
            },
            1000,
            () => {
              setProject("react ");
            },
            700,
            () => {
              setProject("next js");
            },
          ]}
          repeat={Infinity}
        />

        <h1> {Project} </h1>
      </div>
      
      <div style={box ? {display:"flex"} :{display:"none"}}  className="parent">
        {dmyNum.map((item, index) => (
          <motion.div
            key={index}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 2,
              
            }}
          />
        ))}
      </div>

      <button className="show" onClick={handleShow}>
        {" "}
        show modal{" "}
      </button>
    </>
  );
}

export default App;
