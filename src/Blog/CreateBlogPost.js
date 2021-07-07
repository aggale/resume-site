import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CreateBlogPost = () => (
    <div>
        <h1 className='create-blog-post-header'>Create Blog Post</h1>
        <Form className="create-blog-post-form">
            <Form.Group controlId="formBlogTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control as="input" />
            </Form.Group>
            <Form.Group controlId="formBlogText">
                <Form.Label>Text</Form.Label>
                <Form.Control as="textarea" rows="5"/>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </div>
)

export default CreateBlogPost;