import { useState } from 'react'
import type { task } from './Task'
import type { employee } from './Employee'

type AddTaskFormProps = {
    nextId: number
    employees: employee[]
    onAdd: (newTask: task) => void
}

function AddTaskForm({ nextId, employees, onAdd }: AddTaskFormProps) {
    const [taskName, setTaskName] = useState('')
    const [employeeId, setEmployeeId] = useState(employees[0].id)
    const [priority, setPriority] = useState<task['priority']>('Normal')
    const [estimatedHours, setEstimatedHours] = useState(1)

    function handleSave() {
        if (taskName === '') return
        if (estimatedHours < 0) return

        onAdd({
            id: nextId,
            taskName: taskName,
            employeeId: employeeId,
            priority: priority,
            estimatedHours: estimatedHours,
            isCompleted: false
        })
    }

    return (
        <div className="card card-body shadow-sm mb-3">
            <div className="row g-2 align-items-end">
                <div className="col-md-4">
                    <label className="form-label small">Task name</label>
                    <input className="form-control" value={taskName} onChange={e => setTaskName(e.target.value)} />
                </div>
                <div className="col-md-3">
                    <label className="form-label small">Assign to</label>
                    <select className="form-select" value={employeeId} onChange={e => setEmployeeId(Number(e.target.value))}>
                        {employees.map(emp => (
                            <option key={emp.id} value={emp.id}>{emp.name}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-2">
                    <label className="form-label small">Priority</label>
                    <select className="form-select" value={priority} onChange={e => setPriority(e.target.value as task['priority'])}>
                        <option>Very High</option>
                        <option>High</option>
                        <option>Normal</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <label className="form-label small">Hours</label>
                    <input type="number" min={0} className="form-control" value={estimatedHours} onChange={e => setEstimatedHours(Number(e.target.value))} />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-success w-100" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddTaskForm
