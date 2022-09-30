
import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

import db from "../firebase"
import { doc, deleteDoc } from "firebase/firestore";

import Draggable from 'react-draggable';

class QuestionCard extends React.Component {

  constructor() {
    super();
    this.state = {
      open: false,
      deleted: false,
    };
  }

  deleteQuestion = async (id) => {
    await deleteDoc(doc(db, "Questions", id));
    setTimeout(() => {
      window.location.reload(false);
    }, 5000)
    this.setState({ deleted: true })
  }

  openQuestion = () => {

    if (this.state.open) {
      this.setState({ open: false })
    } else {
      this.setState({ open: true })
    }
  }

  render() {

    return (


      <Draggable handle=".handle">
        <Card className='handle'>
          <Card.Content>
            <Icon name='trash' style={{ float: 'right', cursor: 'pointer' }} onClick={() => this.deleteQuestion(this.props.id)} />
            {this.state.deleted && <div className="questionSearchContainer"><h1>Deleted Successfully.</h1></div>}
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Description style={{ cursor: 'pointer' }} onClick={() => this.openQuestion()}>
              {this.state.open === false && <div>{this.props.problem.substr(0, 80) + "..."}</div>}
              {this.state.open === true && <div>{this.props.problem}</div>}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <h3>
              <Icon name='tags' />
              <span>{this.props.tags}</span>
            </h3>
            <h4 style={{ marginTop: '5px' }}>{this.props.date}</h4>
          </Card.Content>
        </Card>
      </Draggable>

    )
  }

} export default QuestionCard;
