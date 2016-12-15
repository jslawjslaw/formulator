import React from 'react';
import FormHeader from '../form/form_header';

class ResultsView extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentForm: "",
      submissions: ""
    };
  }

  componentDidMount() {
    this.props.fetchSubmissions(this.props.routeParams.formId).then( (action) => this.setState({ submissions: action.submissions }) );
    this.props.fetchForm(this.props.routeParams.formId).then( (action) => this.setState({ currentForm: action.currentForm }) );
  }

  render() {
    let headers;
    let rows = [];
    if (this.state.currentForm.fields) {
      headers = this.state.currentForm.fields.map( (field, idx) => {
        return (
          <td key={ idx + 1 }>{ field.label }</td>
        );
      });
      headers.splice(0, 0, <td key={ 0 }>#</td>)

      let subs = this.state.submissions
      let counter = 0;
      for(var key in subs) {
        if(subs.hasOwnProperty(key)) {
          let cols = subs[key].map( (entry, idx) => {
            return (
              <td className="td" key={ idx + 1 }>{ entry.value }</td>
            );
          });
          cols.splice(0, 0, <td className="td" key={ 0 }>{ counter }</td>);
          counter = counter + 1;
          rows.push(<tr>{ cols }</tr>)
        }
      }
    }


    return(
      <div className="body">
        <div className="forms-container">
          <div className="head-nav">
            <FormHeader logout={ this.props.logout } router={ this.props.router } />
          </div>

          <div className="stage">
            <section className="stage-info">
              <h1 className="form-name">Submissions</h1>
              <p className="p">{ this.state.currentForm.title }</p>
            </section>

            <table className="grid-bar">
              <tbody className="tbody">
                <tr>
                  { headers }
                </tr>
                { rows }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsView;
