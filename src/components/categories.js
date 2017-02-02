import React from 'react'
import { Button, Checkbox, Grid, Menu, Segment, Form, Icon } from 'semantic-ui-react'
import Slider from 'react-rangeslider'

import Categories_Data from './category_data_eventbrite'


const categoriesDataArr = Categories_Data();




class Categories extends React.Component{
  constructor (props) {
    super(props);
    this.state = {selectedCategories:[], catIDs:[], rangeSlider:10};
  }

  onSliderChange = (rangeSlider) => {
    this.setState({
      rangeSlider: rangeSlider
    })
  }

  //change handler for category checkboxes
  onChange = (event, data) => {
    console.log(`event.target.value: ${JSON.stringify(event.target.value)}`);
    console.log(`data: ${JSON.stringify(data, null, 2)}`);
    var checkedLabels = this.state.selectedCategories;
    if (data.checked) {
      checkedLabels.push(data.label)
      this.setState({selectedCategories: checkedLabels})
      console.log(this.state.selectedCategories)
    }
    else {
      var index = checkedLabels.indexOf(data.label);
      checkedLabels.splice(index, 1)
      console.log(this.state.selectedCategories)
    }

  }

  getCategoryID = () => {
    var catIDs = [];
    var checkedLabels = this.state.selectedCategories

    for (var i= 0; i<categoriesDataArr.length; i++) {
      for (var i2= 0; i2< checkedLabels.length; i2++) {
        if (checkedLabels[i2] == categoriesDataArr[i].name) {
          catIDs.push(categoriesDataArr[i].id)
          console.log(catIDs)
        }
      }
    }

    this.setState ({catIDs: catIDs})
  }


  render () {
    return (
      <Grid className ='filter-menu'>
        <Grid.Row>
          <Grid.Column width={4}>
            <Segment.Group>
              <Segment>
                <h3>Select your interests</h3>
                <Form.Field >
                  <Checkbox label='Music' onChange={this.onChange} />
                  <Checkbox label='Business & Professional' onChange={this.onChange}/>
                  <Checkbox label='Food & Drink' onChange={this.onChange}/>
                  <Checkbox label='Community & Culture' onChange={this.onChange}/>
                  <Checkbox label='Performing & Visual Arts' onChange={this.onChange}/>
                  <Checkbox label='Film, Media & Entertainment' onChange={this.onChange}/>
                  <Checkbox label='Sports & Fitness' onChange={this.onChange}/>
                  <Checkbox label='Health & Wellness' onChange={this.onChange}/>
                  <Checkbox label='Science & Technology' onChange={this.onChange}/>
                  <Checkbox label='Charity & Causes' onChange={this.onChange}/>
                  <Checkbox label='Religion & Spirituality' onChange={this.onChange}/>
                  <Checkbox label='Family & Education' onChange={this.onChange}/>
                  <Checkbox label='Religion & Spirituality' onChange={this.onChange}/>
                  <Checkbox label='Seasonal & Holiday' onChange={this.onChange}/>
                  <Checkbox label='Government & Politics' onChange={this.onChange}/>
                  <Checkbox label='Fashion & Beauty' onChange={this.onChange}/>
                  <Checkbox label='Home & Lifestyle' onChange={this.onChange}/>
                  <Checkbox label='Hobbies & Special Interest' onChange={this.onChange}/>
                  <Checkbox label='Other' onChange={this.onChange}/>
                </Form.Field>
              </Segment>
              <Segment>
                <h3>Within the range of:</h3>
                <div>
                  <Slider
                    min= {1}
                    max= {100}
                    value= {this.state.rangeSlider}
                    orientation = "vertical"
                    onChange= {this.onSliderChange}
                  />
                </div>
                <h4>{this.state.rangeSlider} km</h4>
              </Segment>
              <Segment>
                <Button color='red' fluid onClick={this.getCategoryID} >Search    <Icon name='search'/></Button>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    )
  }
}


export default Categories




// <Checkbox label='Music'/>
// <Checkbox label='Business & Professional' />
// <Checkbox label='Food & Drink'/>
// <Checkbox label='Community & Culture'/>
// <Checkbox label='Performing & Visual Arts' />
// <Checkbox label='Film, Media & Entertainment' />
// <Checkbox label='Sports & Fitness' />
// <Checkbox label='Health & Wellness' />
// <Checkbox label='Science & Technology' />
// <Checkbox label='Charity & Causes' />
// <Checkbox label='Religion & Spirituality' />
// <Checkbox label='Family & Education' />
// <Checkbox label='Religion & Spirituality' />
// <Checkbox label='Seasonal & Holiday' />
// <Checkbox label='Government & Politics' />
// <Checkbox label='Fashion & Beauty' />
// <Checkbox label='Home & Lifestyle' />
// <Checkbox label='Hobbies & Special Interest' />
// <Checkbox label='Other' />
