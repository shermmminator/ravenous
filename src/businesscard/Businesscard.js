import React from "react";
import "./Businesscard.css";


function Businesscard(props) {

    const { business } = props;


    return (

        <>
            <article className="business-container">
                <div className="business-card-body">
                    <div className="business-photo-container">
                        <img src={business.imageSrc} className="business-photo" alt="firm-reference"/>
                    </div>
                    <div className="business-details-container">
                        <h3 className="title">{business.name}</h3>
                        <div className="business-details">
                            <div><span className="street">{business.address}</span><p className="type">{business.category}</p></div>
                            <div><span className="district">{business.city}</span><p className="score">{business.rating}</p></div>
                            <div><span className="city">{business.state}</span><p className="review-count">{business.reviewCount}</p></div>
                        </div>
                        
                    </div>
                </div>
            </article>
        </>
    )
}

export default Businesscard;