import React from "react";
import Auth from "../hoc/Auth";

const Home = () => {
  return (
    <div>
      <h1>HEllooo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quam ipsa
        repudiandae odit nisi, debitis animi incidunt, earum ad architecto ex
        quisquam ab quibusdam corporis fugiat sequi consequuntur officia hic
        nesciunt sapiente voluptate fuga, quae nemo. Debitis, praesentium
        quaerat! Asperiores obcaecati quaerat repellat sequi sint mollitia
        explicabo ex illum beatae, molestias, minima natus maxime corrupti
        officiis aspernatur ipsum optio eius. Magni dignissimos nam tempore sint
        assumenda. Saepe inventore ipsam eligendi maxime voluptatum fugit omnis
        adipisci dicta! Optio rerum minima expedita maiores. Aspernatur iste
        eligendi debitis? Harum repellendus iste deserunt quos molestias maxime
        aut, aliquam, tempore, quam quasi voluptatum eum voluptatem!
      </p>
    </div>
  );
};

export default Auth(Home);
