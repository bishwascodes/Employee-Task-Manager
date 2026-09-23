// Your application should display information about an employee, including:

// Name
// Department
// Current productivity score
// Tasks completed

export type employee = {
    name? : string,
    department? : string,
    productivityScore? : number,
    tasksCompleted? : number
}

function Employee( {name, department, productivityScore, tasksCompleted} :  employee ) {
    return (
        <h1> I'm an Employee </h1>
    )
}

export default Employee;