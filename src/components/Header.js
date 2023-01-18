import React from 'react';
import '../styles/Header.css';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Avatar} from "@material-ui/core";
import {Link}from "react-router-dom";

function Header(){


    return(
        <div className="header">
            <Link to ='/home'>
                <img 
                className="header_icone"
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                alt=""/>
            </Link>
            <div className="header_center">
                <input type="text"/>

                <SearchIcon/>

                 </div>

                 <div className="header_right">
                    <p>becomea a host</p>
                    
                    <LanguageIcon/>
                    <ExpandMoreIcon/>
                    <Avatar/>
                    
 


                 </div>

        </div>
    )


}
export default Header;