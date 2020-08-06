import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CommentForm } from './CommentFormComponent'
import { Loading } from './LoadingComponent'


function  RenderDish({dish}) {
            return (
                <div className="col-12 col-md-5 m-2">
                    <Card>
                        <CardImg top width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <span>{dish.description}</span>
                        </CardBody>
                    </Card>
                   
                </div>
                
        )
    }

function  RenderComments({comments, addComment, dishId}) {
        return (
            <div className="col-12 col-md-5 m-2">
                <Card>
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        <hr/>
                        <CardText>
                            <ul className="list-unstyled">
                                {comments.map((comment) => {
                                    return (
                                        <div key={comment.id}>
                                            <li>{comment.comment}</li>
                                            <li>
                                                --{comment.author}
                                               ,
                                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                            </li>
                                            <br/>
                                        </div>   
                                    )
                                })}
                            </ul> 
                        </CardText>
                        <CommentForm className="ml-0" dishId={dishId} addComment={addComment}/>
                    </CardBody>
                    </Card>
                   </div>
        )
}
    
const DishDetail = (props) => {
    if (props.isLoading) {
        return ( 
            <div className="conatiner">
                <div className="row">
                     <Loading />
                </div>
            </div>
        )
    } else if (props.errMess) {
        return ( 
            <div className="conatiner">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )
    }
    if (props.dish != null) {
        return (
            <div className="container mt-4">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
                <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id}/>
                </div>
                </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default DishDetail;
