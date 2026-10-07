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
        <div id={`id-${id}`} className="card h-100 shadow-sm">
            <div className="card-body">
                <h3 className="card-title h5 mb-1">{name}</h3>
                <p className="card-subtitle text-muted small mb-3">{department}</p>

                <ul className="list-unstyled small mb-0">
                    <li className="d-flex justify-content-between">
                        <span className="text-muted">Productivity score</span>
                        <strong>{productivityScore}</strong>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span className="text-muted">Tasks completed</span>
                        <strong>{tasksCompleted}</strong>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Employee;
