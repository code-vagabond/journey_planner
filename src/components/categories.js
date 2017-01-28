import React from 'react'
import { Checkbox, Grid, Menu } from 'semantic-ui-react'
import json from 'json-loader!file.json';

// import Data from './category_data_eventbrite'
import Data from './cat_data.json';
console.log(Data)
const Categories = () => (
  <Grid className ='filter-menu' >
    <Grid.Row>
        <Grid.Column width={3}>

        <Checkbox label='Music' />
        <Checkbox label='Business & Professional' />
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

      </Grid.Column>
    </Grid.Row>
  </Grid>

)

export default Categories
