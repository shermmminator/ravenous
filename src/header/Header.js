import React from "react";
import { useState, useEffect } from "react";
import "./Header.css";
import { fetchBusinessMiddleware } from "../slices/bunisessSlice";
import { useDispatch } from "react-redux";

function Header() {

    const [searchFilter, setSearchFilter] = useState("");
    const [firmLocation, setFirmLocation] = useState("");
    const [firmType, setFirmType] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchBusinessMiddleware("CA", "Korean", "best_match"));

    }, [])

    const activeOrNot = (element) => {

        if (searchFilter === element) {

            return "active";
        }

        return "";
    }

    const searchHandler = (e) => {
        
        e.preventDefault();

        if(searchFilter === "" || firmLocation === "" || firmType === "") {

            alert("Select all the options available")

            return
        }

        dispatch(fetchBusinessMiddleware(firmLocation, firmType, searchFilter));
    }

    return (
        <>
            <header className="header-container">
                <div className="title-container">
                    <h1 className="title">ravenous</h1>
                </div>
                <div className="filter-container">
                    <div className="filter-options">
                        <div 
                            onClick={() => setSearchFilter("best_match")}
                            className={activeOrNot("best_match")}
                        >
                            <p>Best Match</p>

                        </div>
                        <div 
                            onClick={() => setSearchFilter("rating")}
                            className={activeOrNot("rating")}
                        >
                            <p>Highest Rated</p>
                        </div>
                        <div 
                            onClick={() => setSearchFilter("review_count")}
                            className={activeOrNot("review_count")}
                            >
                            <p>Most Reviewed</p>
                        </div>
                    </div>

                    <div className="input-field-container">
                        <div className="location">
                            <input 
                                value={firmLocation}
                                placeholder="Select your location"
                                onChange={(e) => setFirmLocation(e.target.value)}
                            />
                        </div>
                        <div className="type">
                            <input 
                                value={firmType}
                                placeholder="Select type"
                                onChange={(e) => setFirmType(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="submit-button-container">
                        <div
                            onClick={searchHandler}
                        >
                            Submit</div>
                    </div>
                </div>
            </header>
        </>
    )
};

export default Header;