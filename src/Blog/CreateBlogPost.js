import React from 'react';
import { Button, Form } from 'react-bootstrap';

import { addBlogPost } from '../firebase/firebase-utils'

class CreateBlogPost extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            summary: '',
            url: '',
            content: []
        }
    }
    
    /**
     * Calls firebase to add the blog post to the firestore db
     * @param {*} event 
     */
    handleSubmit = async (event) => {
        event.preventDefault();

        console.log(this.state)
        const { title, summary, url, content } = this.state;

        addBlogPost(title, summary, url, content);

        // Clear form
        event.target.reset();
    }

    /**
     * Updates the value of non-content state items
     * @param {*} event 
     */
    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    /**
     * Updates the content value of state as particular field is edited.
     * @param {} event onChange event
     */
    handleContentChange = (index) => (event) => {
        const { value } = event.target;

        this.setState(currentState => {
            const newContent =  currentState.content;
            newContent[index].value = value;
            return { content: newContent };
        });
    }

    /**
     * Creates a button click handler that adds a new blank piece of content so that a 
     * new textarea/input appears for the user to fill in.
     * @param {} type text or image
     * @returns handleAdd function for appropriate content type
     */
    handleAdd = (type) => (event) => {
        this.setState((currentState) => {
            const newContent = [...currentState.content, {type, value: ""}]

            return {
                ...currentState, 
                content: newContent
            }
        });
    }

    /**
     * Creates a button click handler that removes a piece of content from the state and the 
     * textbox associated with it from the screen.
     * @param {*} index 
     * @returns handleRemove function for item at index
     */
    handleRemove = (index) => (event) => {
        this.setState(currentState => {
            const newContent =  currentState.content;
            newContent.splice(index, 1);
            return { content: newContent };
        })
    }
    
    render() {
        return (
            <div>
                <h1 className='create-blog-post-header'>Create Blog Post</h1>
                <Form className="create-blog-post-form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBlogTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="title" onChange={this.handleChange} as="input" />
                    </Form.Group>
                    <Form.Group controlId="formBlogSummary">
                        <Form.Label>Summary</Form.Label>
                        <Form.Control name="summary" onChange={this.handleChange} as="input" />
                    </Form.Group>
                    <Form.Group controlId="formBlogUrl">
                        <Form.Label>Url</Form.Label>
                        <Form.Control name="url" onChange={this.handleChange} as="input" />
                    </Form.Group>
                    {this.state.content.map((content, i) => 
                        (<Form.Group controlId={"formBlogText" + i}>
                                <Form.Label>{content.type}</Form.Label>
                                <Form.Control 
                                    name={`${content.type}-content`} 
                                    onChange={this.handleContentChange(i)} 
                                    as={content.type === "text" ? "textarea" : "input"} 
                                    rows="5"
                                />
                                <Button onClick={this.handleRemove(i)}>x</Button>
                            </Form.Group>
                        )
                    )}
                    <div>
                        <Button variant="secondary" onClick={this.handleAdd("text")}>Add Text</Button>
                        <Button variant="secondary" onClick={this.handleAdd("image")}>Add Image</Button>
                    </div>
                    
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default CreateBlogPost;