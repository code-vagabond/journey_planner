import React from 'react'
import { Checkbox, Grid, Menu, Segment, Form } from 'semantic-ui-react'
// import json from 'json-loader!file.json';

import Categories_Data from './category_data_eventbrite'


var categoriesData = Categories_Data();


class Categories extends React.Component{
  constructor (props) {
    super(props);
    this.state = {value:''};
  }

  handleChange = (e, {value}) =>{
    this.setState ({value: value})
    console.log(this.state.checked)
  }
  render () {
    return (
      <Grid className ='filter-menu'>
        <Grid.Row>
            <Grid.Column width={4}>
            <Segment>
              <Form.Field>
                <Checkbox label='Music'  />
                <Checkbox label='Business & Professional' value={this.state.checked} onChange={this.handleChange} />
                <Checkbox label='Food & Drink' />
                <Checkbox label='Community & Culture' />
                <Checkbox label='Performing & Visual Arts' />
                <Checkbox label='Film, Media & Entertainment' />
                <Checkbox label='Sports & Fitness' />
                <Checkbox label='Health & Wellness' />
                <Checkbox label='Science & Technology' />
                <Checkbox label='Charity & Causes' />
                <Checkbox label='Religion & Spirituality' />
                <Checkbox label='Family & Education' />
                <Checkbox label='Religion & Spirituality' />
                <Checkbox label='Seasonal & Holiday' />
                <Checkbox label='Government & Politics' />
                <Checkbox label='Fashion & Beauty' />
                <Checkbox label='Home & Lifestyle' />
                <Checkbox label='Hobbies & Special Interest' />
                <Checkbox label='Other' />
              </Form.Field>
            </Segment>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}


export default Categories
