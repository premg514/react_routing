import React from "react";
import Video from "../components/Video";

export default function Videos() {
  let videos_data = [
    {
      id: 1,
      name: "HTML",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHWj-8fguQTMFlGfvbA0I5_c4R54-MIlqVR5vvtJkVXA&s",
    },
    {
      id: 2,
      name: "CSS",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9AyEB-MyxRfhn7amM15GFqjhFPVXHFZbThH4LOcCWA&s=10",
    },
    {
      id: 3,
      name: "js",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJ3KVBMzGEhQoq8tylfrG2LNV1DQIRrswahNq08YeCA&s",
    },
    {
      id: 4,
      name: "REACT.JS",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw3HApB4bsvabXW3L14cV-LhFo0L71QmEESJN3vW9Ow&s",
    },
  ];
  return (
    <div>
      {videos_data.map(function (video) {
        <Video key={video.id} video={video} />;
      })}
    </div>
  );
}
