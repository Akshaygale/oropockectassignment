import React, { useState } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import './Listview.css'



function Listview() {

    const [news, setNews] = useState([])

    const fetchNews = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=1b367d227d0a42799905b85836d36846")
            .then((response) => {
                console.log(response);
                setNews(response.data.articles)
            })
    }

    return (
        <div>

        <Button className='option' onClick={fetchNews}>view</Button>          

            <div className="container">
                <div className="row">
                    {
                        news.map((value, index) => {
                            return (
                                <div key={index} className="newsbox">
                                    <div className="newscontin" >
                                        <img src={value.urlToImage} className="images" alt="..." />
                                        <h5 className="title">{value.title}</h5>
                                        <p className="description">{value.description}</p>
                                        
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Listview;