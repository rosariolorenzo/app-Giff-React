import React, { useEffect, useState } from 'react';
import Gif from './Gif';
import getGiffs from '../service/getGiff';



export default function ListGif ({keyword}) {
    const [gifs, setGiff] = useState ([]);
    useEffect(function(){
        getGiffs({keyword})
        .then(gifs=>setGiff(gifs))
        
    }, [])
    return gifs.map(({id, title, url}) => 
        <Gif 
            key= {id}
            title={title} 
            url={url} 
            id={id}
        />
    )

}
