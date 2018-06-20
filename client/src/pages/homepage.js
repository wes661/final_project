import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
    <div>
        <h1>Home page</h1>
        <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
      ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
      quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
      imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
      diam, sit amet facilisis lectus blandit at.
    </p>
        <p>
            <Link to="/medications"> medications </Link>
        </p>
        <p>
            <Link to="/appointments"> appointments </Link>
        </p>  
        <p>
            <Link to="/overview"> overview </Link>
        </p>
    </div>
);

export default Homepage;