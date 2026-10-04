import React from "react";
import { useParams } from "react-router-dom";

export default function Images() {
  let { url } = useParams();
  return (
    <div>
     <h1>{url}</h1>
    </div>
  );
}
