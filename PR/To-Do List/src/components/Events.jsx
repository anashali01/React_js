import React, { useRef, useState } from "react";

const Events = () => {
  const [isHide, setHide] = useState(false);
  const textRef = useRef();
  const nameRef = useRef();

  const handleHide = () => {
    textRef.current.style.opacity = "0";
  };
  const handleShow = () => {
    textRef.current.style.opacity = "1";
  };

  // Handle Toggle
  const handleToggle = () => {
    setHide(!isHide);
  };

  // Handle Change
  const handleChange = (dets) => {
    nameRef.current.textContent = dets.target.value;
  };

  // Handle Focus
  const handleFocus = (dets) => {
    dets.target.style.background = "transparent";
    dets.target.style.border = "1px solid white";
  };

  // Handle Mouse Enter
  const handleMouseEnter = (dets) => {
    dets.target.style.width = "100%";
  };

  // Handle Mouse Leave
  const handleMouseLeave = (dets) => {
    dets.target.style.width = "200px";
  };
  return (
    <>
      <div className="event-wrapper" style={bg}>
        <h1
          style={{
            textAlign: "center",
            color: "#035295",
            marginBottom: "30px",
          }}
        >
          React Event Handling Examples
        </h1>

        <h2
          style={{ color: "#035295", marginTop: "30px", marginBottom: "15px" }}
        >
          1. onClick Event - Show/Hide
        </h2>
        <button onClick={handleShow}>Show</button>
        <button onClick={handleHide}>Hide</button>

        <p
          ref={textRef}
          style={{
            transition: "all 0.2s linear",
            border: "2px solid #035295",
            padding: "10px 25px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim
          possimus aspernatur, incidunt repudiandae numquam est placeat aut
          sapiente sed.
        </p>

        <h2
          style={{ color: "#035295", marginTop: "30px", marginBottom: "15px" }}
        >
          2. onClick Event - Toggle
        </h2>
        <button onClick={handleToggle} style={{ marginTop: "20px"}}>
          Toggle
        </button>
        <p
          style={{
            transition: "all 0.2s linear",
            border: "2px solid #035295",
            padding: "10px 25px",
            opacity: `${isHide ? "0" : "1"}`,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          itaque illo necessitatibus vero nihil sint, omnis ad exercitationem
          possimus libero. Dolores molestias modi doloribus? Voluptatem magnam
          eius ratione aliquam sapiente.
        </p>

        <h2
          style={{ color: "#035295", marginTop: "30px", marginBottom: "15px" }}
        >
          3. onChange & onFocus Events - Input Field
        </h2>
        <input
          type="text"
          name=""
          id=""
          onChange={handleChange}
          onFocus={handleFocus}
          style={{
            width: "50%",
            padding: "15px 10px",
            margin: "20px auto",
            display: "block",
            transition: "all 0.3s linear",
            borderRadius: "35px",
            border: "1px solid darkGrey",
          }}
          placeholder="Enter Your Name"
        />
        <h2>Your Name : </h2>
        <h4 ref={nameRef}></h4>

        <h2
          style={{ color: "#035295", marginTop: "30px", marginBottom: "15px" }}
        >
          4. onMouseEnter & onMouseLeave Events - Hover Effect
        </h2>
        <div
          style={box}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hover Me
        </div>
      </div>
    </>
  );
};
const box = {
  width: "200px",
  height: "200px",
  background: "#00004a",
  transition: "all 0.4s ease-in",
  fontSize: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const bg = {
  minHeight: "100vh",
  background: "#020617" /* dark theme */,
  padding: "40px 60px",
  color: "#e5e7eb",
};
export default Events;
