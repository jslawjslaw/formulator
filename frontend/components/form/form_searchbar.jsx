import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import FormLi from './form_li';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ input: e.currentTarget.value });
  }

  matches() {
    const matches = [];
    if (this.state.input.length === 0) {
      return this.props.forms;
    }

    this.props.forms.forEach(form => {
      let sub = form.title.slice(0, this.state.input.length);
      if (sub.toLowerCase() === this.state.input.toLowerCase()) {
        matches.push(form);
      }
    });

    return matches;
  }

  componentWillMount() {
    this.props.fetchForms();
  }

  render() {
    let forms = this.matches().map((form, idx) => {
      return (
        <li className="form-lis" key={idx}>
          <FormLi
            form={ form }
            deleteForm={ this.props.deleteForm }
            makePrivate={ this.props.makePrivate }
            fetchForm={ this.props.fetchForm }
            router={ this.props.router }/>
        </li>
      );
    });

    return (
      <div className="search-content">
        <section className="search-section group">
          <label className="search-label">Search
            <input onChange={ this.handleChange } value={ this.state.input } />
          </label>
        </section>
        <section>
          <ul className="forms-list">
            <ReactCSSTransitionGroup
              transitionName='search'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              { forms }
            </ReactCSSTransitionGroup>
          </ul>
        </section>
      </div>
    );
  }
}

export default Searchbar;
