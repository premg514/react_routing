import React from "react";

export default function Videos({ pk }) {
  return (
    <div>
      <img src={pk.image} />
      <h1>{pk.title}</h1>
      <p>{pk.views} views</p>
    </div>
  );
}

//whatever the content that providing to me 
//that content will show in the form in html
