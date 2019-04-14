import React from 'react';


const ImageList = (props)=>{

    const images = props.images.map(image=>{
        return <img className="mx-2 my-2" alt="people" key={image.id} src={image.urls.small} height="322" width="322"></img>
    })

    return (
        <div className="col">{images}</div>
    )
}

export default ImageList;