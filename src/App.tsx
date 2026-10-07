import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Employee from './components/Employee'
import Task from './components/Task'

import type {task} from './components/Task'
import type {employee} from './components/Employee'

import {initialEmployee} from './data/initialEmployee'
import {initialTasks} from './data/initialTasks'


function App() {
  const [employees, setEmployees] = useState<employee[]>(initialEmployee)
  const [tasks, setTasks] = useState<task[]>(initialTasks)

   
  return (
    <>
     <Header/>

      {
        employees.map(item=>{
          return <Employee key={item.id} id={item.id} name={item.name} department={item.department} productivityScore={item.productivityScore} tasksCompleted={item.tasksCompleted}/>
        })
      }
      
       {
        tasks.map(item=>{
          return <Task key={item.id} {...item}/>
          // learnt that {...item} saves me by not having to repeat the props as above so I just leave them here and leave the one above as it is to see the comparision
        })
      }

    <Footer/>

    </>
  )
}

export default App
