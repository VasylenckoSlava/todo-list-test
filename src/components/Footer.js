import React from 'react'
import { Button, Icons } from 'semantic-ui-react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div>
    <label></label>
    {' '}
    <Button.Group size='mini'>
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      <Button.Or />
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      <Button.Or />
      <FilterLink filter="SHOW_COMPLETED">
       Completed
      </FilterLink>
    </Button.Group>
  </div>
)

//var icons = [ 
	//{ className:  'trash', content: '\\f1f8'},];

export default Footer
