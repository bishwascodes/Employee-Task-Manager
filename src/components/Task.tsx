// Task: Update company website
// Priority: High
// Estimated Hours: 3
// Completed: No

export type task = {
    id : number,
    taskName : string,
    employeeId : number,
    priority : "Very High" | "High" | "Normal",
    estimatedHours : number,
    isCompleted : boolean

}

const priorityBadge = {
    "Very High": "text-bg-danger",
    "High": "text-bg-warning",
    "Normal": "text-bg-secondary"
}

function Task({id, employeeId, taskName, priority="High", estimatedHours, isCompleted} : task) {
    return (
        <div id={`task-${id}`} className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
                    <h3 className="card-title h6 mb-0">{taskName}</h3>
                    <span className={`badge ${priorityBadge[priority]}`}>{priority}</span>
                </div>

                <p className="text-muted small mb-1">Assigned employee: {employeeId}</p>
                <p className="text-muted small mb-3">Estimated hours: {estimatedHours}</p>

                <div className="mt-auto">
                    <span className={`badge ${isCompleted ? "text-bg-success" : "text-bg-light border"}`}>
                        {isCompleted ? "Completed" : "In Progress"}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Task
