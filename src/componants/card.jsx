import React from 'react';

export default function Card(props){
    return(
        <div className='main--div'>
            <div className='Card-container'>
                    <div className='image-container'>
                        <img className='card--image'  alt='no image' src= {props.image}/>
                    </div>
                    <div className='content-container'>
                            <div className='heading--location'>
                            <i class="fa-solid fa-location-dot"></i>
                             <span>{props.Location}</span>
                             <a className='a--linke' href={props.googleMap}>View on Google Maps</a>
                            </div>
                            <div className='main--content'>
                                <h4 className='Location--Title'>{props.site}</h4>
                                <p className='location--Date'>{props.date}</p>
                                <p className='main--text'>{props.description}</p>
                            </div>

                    </div>
            </div>
        </div>
    )

}