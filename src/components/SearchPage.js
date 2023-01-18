import React from 'react';
import  '../styles/SearchPage.css';
import {Button} from '@material-ui/core';
import SearchResult from './SearchResult.js';
import Couple from '../assets/couple.jpg';
import Douceur from '../assets/douceur.jpg';
import Crete from '../assets/crete.jpg';
import Appartement from '../assets/appartement.jpg';


function SearchPage(){

  

    return(

        <div className='searchPage '>
             
             <div className='searchPage_info '>

                <p>
                    62 stays . 26 august to 30
                    august . 2 guest
                </p>

                <h1>Stays nearby</h1>

                <Button variant="outlined">Cancellation</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
           
             </div>
             <SearchResult

             img="https://demarchesadministratives.fr/images/actualites/3473/paris-airbnb.jpg"
             location="Paris"
             title="stay at this comfortable room"
             description="tour eiffel landscape, wifi, kitchen, tools, bathroom, 1 bed of 2 places, free parking, washing machine"
             star={5}
             price="109€"
             total="218"

             
             />

                <SearchResult

                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqP2_G-QBGA8tnEnCPXXWEo2v3cUrzoJJyrrHIhvs3YMcqJy_kJ0BMwYKV1kZavPg0O3Q&usqp=CAU"
                location="Champs-sur-marne"
                title="stay at this vacationroom"
                description="near transport, wifi, kitchen, tools, bathroom, 1 bed of 2 places, free parking, washing machine"
                star={3}
                price="45€"
                total="90"


                />

                <SearchResult

                img={Appartement}
                location="Paris"
                title="A comfortable appartement just for you"
                description=" wifi, kitchen, tools, bathroom, 1 bed of 2 places, free parking, washing machine"
                star={4}
                price="40€"
                total="140"


                />

                <SearchResult

                img={Couple}
                location="Marseille"
                title="stay at this romantique room"
                description=" wifi, kitchen, tools, bathroom, 1 bed of 2 places, free parking, washing machine"
                star={4}
                price="40€"
                total="140"


                />

                <SearchResult

                img={Douceur}
                location="Montreuil"
                title="live at this soft room "
                description="wifi, kitchen, tools, bathroom, 1 bed of 2 places, free parking, washing machine"
                star={5}
                price="70€"
                total="140"


                />

             <SearchResult

             img={Crete}
             location="Mons"
             title="Wonderful room"
             description=" wifi, kitchen, tools, bathroom, 1 bed of 2 places, free parking, washing machine"
             star={4}
             price="45€"
             total="90"

             
             />                   
             
        </div>
    ) 




}

export default SearchPage;
