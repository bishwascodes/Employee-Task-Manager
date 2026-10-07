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

      <main className="container">
        <section className="mb-5">
          <h2 className="h4 mb-3">Employees</h2>
          <div className="row g-3">
            {
              employees.map(item=>{
                return (
                  <div key={item.id} className="col-sm-6 col-lg-3">
                    <Employee id={item.id} name={item.name} department={item.department} productivityScore={item.productivityScore} tasksCompleted={item.tasksCompleted}/>
                  </div>
                )
              })
            }
          </div>
        </section>

        <section>
          <h2 className="h4 mb-3">Tasks</h2>
          <div className="row g-3">
            {
              tasks.map(item=>{
                return (
                  <div key={item.id} className="col-sm-6 col-lg-4">
                    <Task {...item}/>
                  </div>
                )
                // learnt that {...item} saves me by not having to repeat the props as above so I just leave them here and leave the one above as it is to see the comparision
              })
            }
          </div>
        </section>
      </main>

    <Footer/>

    </>
  )
}

export default App
