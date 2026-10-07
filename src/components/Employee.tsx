// Your application should display information about an employee, including:

// Name
// Department
// Current productivity score
// Tasks completed

export type employee = {
    id: number,
    name : string,
    department : string,
    productivityScore : number,
    tasksCompleted : number
}

function Employee( {id, name, department, productivityScore, tasksCompleted} :  employee ) {
    return (
        <div className="employee-item">
            <h2 id={`id-${id}`}> {name} </h2>
            <h3>Department : {department}</h3>
            <h4>Productivity Score : {productivityScore}</h4>
            <p> Tasks Completed :  {tasksCompleted}</p>
        </div>
    )
}

export default Employee;