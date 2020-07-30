import React, { Component } from 'react';
import { Card, CardImg,CardDeck, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish !== null && dish !== undefined) {
            const commentsList = dish.comments.map((comments) => {
                return (
                    <div key={comments.id}>
                        <CardText>{comments.comment}<br/>--{comments.author} -{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</CardText>
                        <br/>
                    </div>
                    
                    
                )
            })

            return (
                <div className="row col-12">
                    <CardDeck>
                    <Card className="m-2">
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <span>{dish.description}</span>
                    </CardBody>
                        </Card>
                        <Card className="m-2">
                        <h2>Comments</h2>
                        <CardBody>
                        {commentsList}
                        </CardBody>
                    </Card>
                    </CardDeck>
                   
                </div>
                
            )
        } else {
            return <div></div>;
        }
    }

    render() {
        return (
            <div className="row">
                {this.renderDish(this.props.dish)}
        </div>
        )
    }

}

export default DishDetail;
