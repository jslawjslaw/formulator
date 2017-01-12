import React from 'react';
import FieldLi from './form_field_li';
import { Link } from 'react-router';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.changeFieldAndTabIndex = this.changeFieldAndTabIndex.bind(this);
    this.moveCard = this.moveCard.bind(this);
  }

  changeFieldAndTabIndex(idx) {
    return () => {
      this.props.changeFieldIndex(idx);
      this.props.changeTabIndex(2);
    }
  }

  moveCard(dragIndex, hoverIndex) {
    const field1 = this.props.currentForm.fields[dragIndex];
    const field2 = this.props.currentForm.fields[hoverIndex];
    this.props.updateFields(field1, field2);
  }

  render() {
    let fields;
    if (this.props.currentForm.fields) {
      fields = this.props.currentForm.fields.map( (field) => {
        return (
          <li
            className="user-form-field"
            onClick={ this.changeFieldAndTabIndex(field.ord) }
            key={ field.ord }>
            <FieldLi moveCard={ (dInd, hInd) => this.moveCard(dInd, hInd) } field={ field } />
          </li>
        );
      });
    } else {
      fields = [];
    }

    return(
      <div className="main">
        <div className="user-generated-form">
          <section className="user-generated-form-head">
            <h1 className="user-form-title">{ this.props.currentForm.title }</h1>
            <p className="user-form-description">{ this.props.currentForm.description }</p>
          </section>
          <ul className="user-fields-ul">
            { fields }
          </ul>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Form);
