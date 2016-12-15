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
      <div className="body">
        <div className="forms-container">
          <div className="head-nav">
            <FormHeader
              logout={ this.props.logout }
              router={ this.props.router }
              changeTabIndex={ this.props.changeTabIndex }/>
          </div>

            <div className="stage group">
              <section className="stage-info">
                <h1 className="form-name">Form Builder</h1>
              </section>
              <div className="side">
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
                      router={ this.props.router }
                      updateStateForm={ this.props.updateStateForm }
                      errors={ this.props.errors }/>
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
                      changeTabIndex={ this.props.changeTabIndex }
                      updateStateField={ this.props.updateStateField }
                      errors={ this.props.errors }/>
                  </TabPanel>
                </Tabs>
              </div>

              <Form
                changeTabIndex={ this.props.changeTabIndex }
                changeFieldIndex={ this.props.changeFieldIndex }
                currentForm={ this.props.currentForm }/>
            </div>

        </div>
      </div>
    );
  }
}

export default FormBuilder;
