import React from 'react';
import FormHeader from './form_header';
import FormSettingsTab from './form_builder_form_settings';
import FieldSettingsTab from './form_builder_field_settings';
import Form from './form';
import AddField from './form_builder_add_field';
import merge from 'lodash/merge';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class FormBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    if (this.props.params.formId) {
      this.props.fetchForm(this.props.params.formId);
    }
  }

  handleSelect(index, last) {
    this.props.changeTabIndex(index);
  }

  render() {
    return(
      <div className="stage group">
        <FormHeader
          logout={ this.props.logout }
          router={ this.props.router }
          changeTabIndex={ this.props.changeTabIndex }/>
        <h1 className="form-builder-heading">Form Builder</h1>

        <section className="settings-pane">
          <Tabs
            selectedIndex={ this.props.tabIndex }
            onSelect={ this.handleSelect }>
            <TabList>
              <Tab>Form Settings</Tab>
              <Tab>Add Field</Tab>
              <Tab>Field Settings</Tab>
            </TabList>

            <TabPanel>
              <FormSettingsTab
                userId={ this.props.userId }
                currentForm={ this.props.currentForm }
                createForm={ this.props.createForm }
                updateForm={ this.props.updateForm }
                router={ this.props.router }/>
            </TabPanel>

            <TabPanel>
              <AddField
                createField={ this.props.createField }
                currentForm={ this.props.currentForm }
                changeTabIndex={ this.props.changeTabIndex }/>
            </TabPanel>

            <TabPanel>
              <FieldSettingsTab
                updateField={ this.props.updateField }
                currentForm={ this.props.currentForm }
                deleteField={ this.props.deleteField }
                fieldIndex={ this.props.fieldIndex }
                changeTabIndex={ this.props.changeTabIndex }/>
            </TabPanel>
          </Tabs>
        </section>

        <Form
          changeTabIndex={ this.props.changeTabIndex }
          changeFieldIndex={ this.props.changeFieldIndex }
          currentForm={ this.props.currentForm }/>
      </div>
    );
  }
}

export default FormBuilder;
