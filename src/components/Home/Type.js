import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          '<span style="color: white;">Software Engineer</span>',
          '<span style="color: white;">Freelancer</span>',
          '<span style="color: white;">Mobile Engineer</span>',
          '<span style="color: white;">Full Stack Engineer</span>',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
