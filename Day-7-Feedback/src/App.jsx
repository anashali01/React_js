import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const App = () => {
  const [feedback , setFeedback] = useState({});
  const [list , setList] = useState([]);
  const [star, setStar] = useState(0);
  const [state, setState] = useState(0);

  const handleOver = (i) => {
    setState(i + 1);
  };
  const handleLeave = () => {
    setState(0);
  };
  const handleClick = (i) => {
    setStar(i + 1);
  };
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFeedback({...feedback , [name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = [...list , {...feedback , star : star} ]
    setList(newList);
    setFeedback({})
    setStar(0)
  }

  console.log(list);
  
  return (
    <div className="app">
      {/* FORM */}
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>Give Your Feedback</h2>

        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          value={feedback.name || ""}
        />

        <textarea
          name="review"
          placeholder="Write your review..."
          rows={4}
          onChange={handleChange}
          value={feedback.review || ""}
        ></textarea>

        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={32}
              color={star > i || state > i ? "#facc15" : "#e5e7eb"}
              onMouseOver={() => handleOver(i)}
              onMouseLeave={handleLeave}
              onClick={() => handleClick(i)}
            />
          ))}
        </div>

        <button type="submit">Submit Feedback</button>
      </form>

      {/* FEEDBACK CARDS */}
      <div className="card-wrapper">
        {list.map((item, idx) => (
          <div className="feedback-card" key={idx}>
            <h3>{item.name}</h3>

            <div className="card-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={18}
                  color={item.star > i ? "#facc15" : "#e5e7eb"}
                />
              ))}
            </div>

            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
