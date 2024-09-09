import React from "react";

const Welcome = ({ title }: { title?: string }) => {
  return (
    <div>
      <h1>Welcome to {title}</h1>
    </div>
  );
};

export default Welcome;
