import React from 'react'
import MasonryList from "react-native-masonry-list";

export default function ImageLayoutView({images}) {
    if(images.length === 0){
        return null;
    }
    return (
        <MasonryList
            images={images.map( ({source}) => ({uri: source, dimensions: { width: 200, height: 200 }}))}
            rerender={true}
        />
        
    )
}
 