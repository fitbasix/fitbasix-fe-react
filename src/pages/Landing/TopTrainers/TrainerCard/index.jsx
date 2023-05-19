import React from 'react'
import "./styles.css"

import { Rating, Typography } from '@mui/material'


const TrainerCard = ({image,name,designation,experience,rating,reviews}) => {
  return (
    <div className="TrainerCard--Container">
        <div className='TrainerCard--Image'>
            <img src={image} />
        </div>
        {/* NAME */}
        <Typography variant='subtitle1' sx={{fontWeight:"700",marginTop:"0.5rem"}}>{name}</Typography>
        {/* Designation */}
        <Typography variant='body1' sx={{color:"#49AD50", fontWeight:"400", fontSize:"14px",marginTop:"2px"}}>{designation}</Typography>
        {/* Experience */}
        <Typography variant='body2' sx={{color:"#fff", fontSize:"12px",marginTop:"2px"}}>Experience - {experience} years</Typography>
        
        
        <div className='TrainerCard--ratingContainer'>
        {/* Rating */}
        <Rating  value={rating} precision={0.5} readOnly sx={{marginTop:"6px", fontSize:"16px"}} />
        {/* Reviews */}
        <Typography sx={{fontSize:"10px",marginTop:"6px"}}>({reviews})</Typography>
        </div>
    </div>
  )
}

export default TrainerCard