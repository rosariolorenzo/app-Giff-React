import React from 'react'

export default function giff({title , id , url}){
    return (
    <div>
    <h4>{title}</h4>
    <div>{id}</div>
    <img alt= {title} src={url} /> 
  </div>
    )
}

