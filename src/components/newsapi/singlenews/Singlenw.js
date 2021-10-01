import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Singlenw = (props) => {

    console.log(props);
    const {author,title,urlToImage,publishedAt,content} =props.nw;

    return (
        <div>
            <Col>
                <Card className="h-100">
                    <Card.Img variant="top" src={urlToImage} height="200" />
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <h5 className="">{author}</h5>
                    <h5 className=""><i>{publishedAt}</i> </h5>
                    <Card.Text>
                        {content}
                        
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            
        </div>
    );
};

export default Singlenw;