import { useState } from 'react'
import type { employee } from './Employee'

type AddEmployeeFormProps = {
    nextId: number
    onAdd: (newEmployee: employee) => void
}

function AddEmployeeForm({ nextId, onAdd }: AddEmployeeFormProps) {
    // storing and applying the change of the form fields
    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [productivityScore, setProductivityScore] = useState(0)

    function handleSave() {
        if (name === '' || department === '') return
        if (productivityScore < 0) return

        onAdd({
            id: nextId,
            name: name,
            department: department,
            productivityScore: productivityScore,
            tasksCompleted: 0
        })
    }

    return (
        <div className="card card-body shadow-sm mb-3">
            <div className="row g-2 align-items-end">
                <div className="col-md-4">
                    <label className="form-label small">Name</label>
                    <input className="form-control" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label className="form-label small">Department</label>
                    <input className="form-control" value={department} onChange={e => setDepartment(e.target.value)} />
                </div>
                <div className="col-md-2">
                    <label className="form-label small">Productivity score</label>
                    <input type="number" min={0} className="form-control" value={productivityScore} onChange={e => setProductivityScore(Number(e.target.value))} />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-success w-100" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeForm
