import React from "react";

export default function Video({ pk }) {
  return (
    <div>
      <img src={pk.image_url} />
      <h1>{pk.name}</h1>
    </div>
  );
}

//whatever the content that providing to me
//that content will show in the form in html
