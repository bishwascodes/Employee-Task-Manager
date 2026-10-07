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

function Task({id, employeeId, taskName, priority="High", estimatedHours, isCompleted} : task) {
    return (
        <div id={`task-${id}`} className="task-item">
            <h3>{taskName}</h3> <span className="priority-pill">{priority}</span>
            <h4>Assigned Employee: {employeeId}</h4>
            <h5>Estimated Hours: {estimatedHours}</h5>
            <span>Progress: {isCompleted ? "Completed" : "In Progress"}</span>
        </div>
    )
}

export default Task