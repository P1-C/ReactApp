import React, { Component } from 'react'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form';
import { required, maxLength, minLength } from './ContactComponent'



export class CommentForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment)
        this.toggleModal();
    }


    render() {
        return (
            <div>
                <LocalForm>
                    <Row className="form-group">
                        <Col>
                            <Button outline onClick={this.toggleModal} type="submit" color="secondary">
                                <span className="fa fa-edit fa-lg"></span>Submit Comments
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>

                <div className="container">
                    <Modal isOpen={this.state.isModalOpen} >
                        <ModalHeader>Submit Comments</ModalHeader>
                        <ModalBody>
                            <div className="m-3">
                                <LocalForm onSubmit={(value) => this.handleSubmit(value)}>
                                    <Row className="form-group">
                                        <Label htmlFor="rating">Rating</Label>
                                        <Control.select model=".rating" name="contactType"
                                            className="form-control" id="rating" defaultValue="1">
                                            <option>
                                                1
                                            </option>
                                            <option>
                                                2
                                            </option>
                                            <option>
                                                3
                                            </option>
                                            <option>
                                                4
                                            </option>
                                            <option>
                                                5
                                            </option>
                                        </Control.select>
                                    </Row>
                                    <Row className="form-group">
                                        <Label>Your Name</Label>
                                        <Control.text
                                            model=".author"
                                            id="author"
                                            validators={{
                                                required,
                                                minLength: minLength(3),
                                                maxLength: maxLength(15)
                                            }}
                                            className="form-control"
                                            placeholder="Your Name" />
                                        <Errors className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 character or less'
                                            }}
                                        />
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="comment">Comment</Label>
                                        <Control.textarea
                                            rows="6"
                                            model=".comment"
                                            className="form-control"
                                            id="comment"
                                            placeholder="Write your comments" />
                                    </Row>
                                    <Row className="form-group">
                                        <Col>
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>

            </div>
        )
    }
}

export default CommentForm
