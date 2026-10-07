import { useState, useEffect } from 'react'

// All the components
import Header from './components/Header'
import Footer from './components/Footer'
import Employee from './components/Employee'
import Task from './components/Task'
import AddEmployeeForm from './components/AddEmployeeForm'
import AddTaskForm from './components/AddTaskForm'

// All types
import type {task} from './components/Task'
import type {employee} from './components/Employee'

//initial data from the data folder
import {initialEmployee} from './data/initialEmployee'
import {initialTasks} from './data/initialTasks'


function App() {
  // importing initial content either from the localstorage memory if there's any or straight from the initial data that we've inside the data foldr
  const [employees, setEmployees] = useState<employee[]>(() => {
    const saved = localStorage.getItem('employees')
    return saved ? JSON.parse(saved) : initialEmployee
  })
  const [tasks, setTasks] = useState<task[]>(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : initialTasks
  })

  // whenver the employees or tasks list change, we're making sure that we update that is our local storage so that even on page refresh, the content inside the page remains the same.
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees))
  }, [employees])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // states to track if we need to show form for new employee or task creation
  const [showEmployeeForm, setShowEmployeeForm] = useState(false)
  const [showTaskForm, setShowTaskForm] = useState(false)

  // tracking id number whenever we need to create new employee or tasks
  const nextEmployeeId = employees.length > 0 ? employees[employees.length - 1].id + 1 : 1
  const nextTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1

  function addEmployee(newEmployee: employee) {
    setEmployees([...employees, newEmployee])
    setShowEmployeeForm(false)
  }

  function addTask(newTask: task) {
    setTasks([...tasks, newTask])
    setShowTaskForm(false)
  }

  // all of them check for the item if it's the selected one, if yes, they return the updated value, else they just return the actual value
  function increaseProductivity(id: number) {
    setEmployees(employees.map(e => e.id === id ? { ...e, productivityScore: e.productivityScore + 1 } : e))
  }

  function decreaseProductivity(id: number) {
    setEmployees(employees.map(e => e.id === id ? { ...e, productivityScore: Math.max(0, e.productivityScore - 1) } : e))
  }

  function recordWork(id: number) {
    setEmployees(employees.map(e => e.id === id ? { ...e, tasksCompleted: e.tasksCompleted + 1 } : e))
  }

  function resetStats(id: number) {
    setEmployees(employees.map(e => e.id === id ? { ...e, productivityScore: 0, tasksCompleted: 0 } : e))
    setTasks(tasks.map(t => t.employeeId === id ? { ...t, isCompleted: false } : t))
  }

  function completeTask(id: number, employeeId: number) {
    setTasks(tasks.map(t => t.id === id ? { ...t, isCompleted: true } : t))
    recordWork(employeeId)
  }


  return (
    <>
     <Header/>

      <main className="container">
        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="h4 mb-0">Employees</h2>
            <button className="btn btn-primary btn-sm" onClick={() => setShowEmployeeForm(!showEmployeeForm)}>
              {showEmployeeForm ? 'Cancel' : '+ Add Employee'}
            </button>
          </div>
          {/* Conditional rendering of React component */}
          {showEmployeeForm && <AddEmployeeForm nextId={nextEmployeeId} onAdd={addEmployee} />}

          <div className="row g-3">
            {
              employees.map(item=>{

                return (
                  <div key={item.id} className="col-sm-6 col-lg-3">
                    <Employee id={item.id} name={item.name} department={item.department} productivityScore={item.productivityScore} tasksCompleted={item.tasksCompleted}
                      onIncrease={() => increaseProductivity(item.id)}
                      onDecrease={() => decreaseProductivity(item.id)}
                      onReset={() => resetStats(item.id)}
                    />
                  </div>
                )
              })
            }
          </div>
        </section>

        <section>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="h4 mb-0">Tasks</h2>
            <button className="btn btn-primary btn-sm" onClick={() => setShowTaskForm(!showTaskForm)}>
              {showTaskForm ? 'Cancel' : '+ Add Task'}
            </button>
          </div>

          {showTaskForm && <AddTaskForm nextId={nextTaskId} employees={employees} onAdd={addTask} />}

          <div className="row g-3">
            {
              tasks.map(item=>{
                 const employeeName = employees.find(emp => emp.id === item.employeeId)?.name ?? "Unassigned"
                return (
                  <div key={item.id} className="col-sm-6 col-lg-4">
                    <Task employeeName={employeeName} onComplete={() => completeTask(item.id, item.employeeId)} {...item}/>
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
