import React from 'react';
import FormHeader from './form_header';
import FormSettingsTab from './form_builder_form_settings';
import FieldTab from './form_builder_add_fields';
import Form from './form';
import merge from 'lodash/merge';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class FormBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentForm: ""
    };
  }

  selectTab(num) {
    this.setState({ selectedPane: num });
  }

  componentWillMount() {
    if (this.props.formId) {
      this.props.fetchForm(this.props.formId).then(({ currentForm }) => {
        this.setState({
          currentForm
        });
      });
    }
  }

  render() {
    let pane = this.props.panes[this.state.selectedPane];

    return (
      <div className="stage group">
        <FormHeader logout={ this.props.logout } router={ this.props.router } />
        <h1>Form Builder</h1>

        <section className="settings-pane">
          <Tabs onSelect={ this.handleSelect } selectedIndex={1}>
            <TabList>
              <Tab>Form Settings</Tab>
              <Tab>Add Field</Tab>
            </TabList>

            <TabPanel>
              <FormSettingsTab
                userId={ this.props.userId }
                formId={ this.props.formId }
                currentForm={ this.props.currentForm }
                createForm={ this.props.createForm } />
            </TabPanel>

            <TabPanel>
              <FieldTab
                createField={ this.props.createField }
                currentForm={ this.props.currentForm }
                formId={ this.props.formId } />
            </TabPanel>
          </Tabs>
        </section>

        <Form currentForm={ this.props.currentForm }/>
      </div>
    );
  }
}

export default FormBuilder;
