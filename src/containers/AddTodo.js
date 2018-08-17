import React from 'react'
import { Button, Input, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import './AddTodo.css'

let AddTodo = ({ dispatch }) => {
  return (
    <div className="AddTodo">
      <form onSubmit={e => {
        e.preventDefault()
        const input = document.querySelector('input[name=todo]')
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <Button className="TodoButton" basic type='submit'><Icon name={'plus'} />
        </Button>
        <Input className="TodoText" placeholder='Task...' name='todo' />
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
