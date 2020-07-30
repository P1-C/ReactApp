import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,CardFooter, CardText, CardBody, CardTitle } from 'reactstrap';

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
                <div className="row">
                    <div className="col-12 md-5 mt-5">
                    <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <span>{dish.description}</span>
                    </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 md-5 mt-5">
                    <Card>
                        <h2>Comments</h2>
                        <CardBody>
                        {comments}
                        </CardBody>
                    </Card>
                    </div>
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
