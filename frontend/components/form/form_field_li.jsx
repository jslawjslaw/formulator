import React from 'react';

class FieldLi extends React.Component {
  render() {
    let input;
    if (this.props.field.field_type === 'radio') {
      input = <radio></radio>
    } else {
      input = <input type={ this.props.field.field_type } />
    }

    return (
      <section>
        <p>{ this.props.field.label }</p>
        <p>{ this.props.field.user_instruction }</p>
        { input }
      </section>
    );
  }
}

export default FieldLi;
