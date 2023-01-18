import React from 'react';
import Banner from './Banner.js';
import '../styles/Home.css';
import Card from './Card.js';

//import { Card } from 'react-bootstrap';

function Home(){


    return(
        <div className='home'>
        
        <Banner/>

        <div className="home_section">

            <Card src="https://a0.muscache.com/im/pictures/miso/Hosting-21159806/original/836c0ba5-1e34-4bff-95df-fa1d2230822f.jpeg?im_w=720"
            title="home"
            description="none"
            price="55€/night"
            />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTna1XJlnUx5kOLTh_kk-Y2cfG6pdjBcUIylIcCUNyEt_Jm85SRU4ffZywDrjLcGUwLv3o&usqp=CAU"
            title="home"
            description="none"
            price="30€/night"
            />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdANch6fTrvMzTcijwn1XIrWDD2eBQZJq_Yg&usqp=CAU"
            title="maison"
            description="none"
            price="67€/night"
             />
        </div>
        <div className="home_section">
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfcWkhLh5hngjN4PtTSq2wLC05MebSfZGtA&usqp=CAU"
            title="home"
            description="none"
            price="43€/night"
            />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWW9G9Zt4a0WkGdSQToCYQXaib8OJcnSfgYQ&usqp=CAU"
            title="home"
            description="none"
            price="60€/night"
            />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqP2_G-QBGA8tnEnCPXXWEo2v3cUrzoJJyrrHIhvs3YMcqJy_kJ0BMwYKV1kZavPg0O3Q&usqp=CAU"
            title="home"
            description="none"
            price="34€/night"
            />
        </div>
 
        </div>
    )


}
export default Home;