import React, { Component } from 'react';
import { Card, CardImg,CardDeck, CardText, CardBody, CardTitle } from 'reactstrap';

class SelectedComponent extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish !== null) {
            const comments = dish.comments.map((comments) => {
                return (
                    <div key={comments.id}>

                        <CardText>{comments.comment}<br />--{comments.author} -{comments.date}</CardText>
                        <br/>
                    </div>
                    
                    
                )
            })
            console.log(dish.comments);

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
                        {comments}
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
                    {this.renderDish(this.props.selectedDish)}
        </div>
        )
    }

}

export default SelectedComponent;
