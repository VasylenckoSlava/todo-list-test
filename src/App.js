import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import './App.css'

const App = () => (
  <div className="AppContainer">
    <h1>My Todo List</h1>
    <Footer />
    <div className="App">
      <VisibleTodoList />
      <AddTodo />
    </div>
  </div>
)

export default App
