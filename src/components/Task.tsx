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

type taskProp = task & {employeeName: string, onComplete: () => void}

const priorityBadge = {
    "Very High": "text-bg-danger",
    "High": "text-bg-warning",
    "Normal": "text-bg-secondary"
}

function Task({id, employeeName, taskName, priority="High", estimatedHours, isCompleted, onComplete} : taskProp) {
    return (
        <div id={`task-${id}`} className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
                    <h3 className="card-title h6 mb-0">{taskName}</h3>
                    <span className={`badge ${priorityBadge[priority]}`}>{priority}</span>
                </div>

                <p className="text-muted small mb-1">Assigned employee: {employeeName}</p>
                <p className="text-muted small mb-3">Estimated hours: {estimatedHours}</p>

                <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className={`badge ${isCompleted ? "text-bg-success" : "text-bg-light border"}`}>
                        {isCompleted ? "Completed" : "In Progress"}
                    </span>
                    {!isCompleted && (
                        <button className="btn btn-sm btn-outline-success" onClick={onComplete}>
                            Mark as completed
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Task
