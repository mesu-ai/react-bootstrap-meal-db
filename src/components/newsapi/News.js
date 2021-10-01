import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Singlenw from './singlenews/Singlenw';

const News = () => {
    const [news,setNews]= useState([]);
    useEffect(()=>{

        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-01&sortBy=publishedAt&apiKey=c839d96844524c268e81a670ce3789f4')
        .then(res=>res.json())
        .then(data=>setNews(data.articles))


    },[]);
    return (
        <div>
            {news.length===0 ? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span></Spinner> : 
            <Row lg={3} xs={1} md={2} className="g-4 mt-4">
                {news.map(nw=><Singlenw nw={nw} key={nw.title}></Singlenw>)}
            </Row>  
            }


        </div>  
             

    );
};

export default News;