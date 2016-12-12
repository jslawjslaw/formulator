import React from 'react';
import FormHeader from './form_header';
import FormSettingsTab from './form_builder_form_settings';
import FieldTab from './form_builder_field_settings';
import Form from './form';
import AddField from './form_builder_add_field';
import merge from 'lodash/merge';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class FormBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentForm: ""
    };
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
    return(
      <div className="stage group">
        <FormHeader logout={ this.props.logout } router={ this.props.router } />
        <h1>Form Builder</h1>

        <section className="settings-pane">
          <Tabs selectedIndex={0}>
            <TabList>
              <Tab>Form Settings</Tab>
              <Tab>Add Field</Tab>
              <Tab>Field Settings</Tab>
            </TabList>

            <TabPanel>
              <FormSettingsTab
                userId={ this.props.userId }
                formId={ this.props.formId }
                currentForm={ this.props.currentForm }
                createForm={ this.props.createForm }
                updateForm={ this.props.updateForm }/>
            </TabPanel>

            <TabPanel>
              <AddField
                createField={ this.props.createField }
                currentForm={ this.props.currentForm }
                formId={ this.props.formId } />
            </TabPanel>

            <TabPanel>
              <FieldTab
                updateField={ this.props.updateField }
                currentForm={ this.props.currentForm }
                deleteField={ this.props.deleteField }
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
