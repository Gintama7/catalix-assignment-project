import React, { useEffect, useState } from 'react';
import './Slider.css';
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs';

function Slider({url,limit}) {
    const [images,setImages] = useState([]);
    const [currentSlide,setCurrentSlide] = useState(0);
    const [errorMsg,setErrorMsg] = useState(null);
    const [loading,setLoading] = useState(false);
    
    async function fetchImages(getUrl)
    {
        try{
            const res = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data = await res.json();

            if(data)
            {
                setImages(data);
                setLoading(false);
            }


        }catch(e){
            setErrorMsg(e.message);
            setLoading(false);
        }
    }
    

    useEffect(()=>{
        if(url !== "")fetchImages(url);

    },[url])

    if(loading)
    {
        return <div>Loading data........</div>
    }

    if(errorMsg !== null)
    {
        return <div> Error occured! {errorMsg}</div>
    }

    const handlePrevious=()=>{
        setCurrentSlide(currentSlide ===0 ? images.length-1 : currentSlide-1);
    }
    
    const handleNext=()=>{
        setCurrentSlide(currentSlide === images.length-1 ? 0 : currentSlide +1);
    }

  return (
    <div className='container'>
      <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left'/>
      {
       images && images.length ? images.map((image,index)=>(
            <img
            key={image.id}
            src={image.download_url}
            alt={image.download_url}
            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
            />
        )): null
      }
      <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right'/>
      <span className='circle-indicators'>
        {
            images && images.length ? 
            images.map((_,index)=>(
                <button key={index}
                className={index === currentSlide ? "current-indicator" : "current-indicator inactive-indicator"} 
                onClick={()=>setCurrentSlide(index)}
                >

                </button>
                
            ))
            :null
        }
        
      </span>
    </div>
  )
}

export default Slider
