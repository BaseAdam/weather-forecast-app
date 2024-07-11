import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { date } from "../../utils/date";
import { AppDispatch } from "../../state/store";
import { useDispatch } from "react-redux";
import { setCityToCompare } from "../../features/citySlice";

export default function Header() {
    const dispatch = useDispatch<AppDispatch>();
    const [city, setCity] = useState("");
    const navigate = useNavigate();
    const handleSearch = () => navigate(`/${city}`);

    // clear city to compare on every search submit
    useEffect(() => {
        dispatch(setCityToCompare(""));
      }, [handleSearch, dispatch]);

    return (
        <nav className="header-container">
            <Link 
                to="/" 
                style={{ textDecoration: 'none'}}
            >
                <h1 className="header-title">Weather Forecast</h1>
            </Link>
            <p className="header-date">
                {date}
            </p>
            <div className="header-input-container">
                <input className="header-input"
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="header-button" onClick={() => {
                    handleSearch()
                    setCity("")
                    }}>Search</button>
            </div>
        </nav>
    );
}