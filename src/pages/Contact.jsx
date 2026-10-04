import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contact() {
    let {ph} = useParams();
  return (
    <div>
      <h1>contact: {ph}</h1>
    </div>
  )
}
