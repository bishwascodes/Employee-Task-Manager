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

type employeeProp = employee & {
    onIncrease: () => void,
    onDecrease: () => void,
    onReset: () => void
}

function Employee( {id, name, department, productivityScore, tasksCompleted, onIncrease, onDecrease, onReset} :  employeeProp ) {
    return (
        <div id={`id-${id}`} className="card h-100 shadow-sm">
            <div className="card-body">
                <h3 className="card-title h5 mb-1">{name}</h3>
                <p className="card-subtitle text-muted small mb-3">{department}</p>

                <ul className="list-unstyled small mb-0">
                    <li className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-muted">Productivity score</span>
                        <span className="d-flex align-items-center gap-2">
                            <button className="btn btn-outline-secondary btn-sm py-0" onClick={onDecrease} disabled={productivityScore === 0}>−</button>
                            <strong>{productivityScore}</strong>
                            <button className="btn btn-outline-secondary btn-sm py-0" onClick={onIncrease}>+</button>
                        </span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span className="text-muted">Tasks completed</span>
                        <strong>{tasksCompleted}</strong>
                    </li>
                </ul>

                {productivityScore === 0 && (
                    <div className="alert alert-warning small py-2 mt-3 mb-0">
                        {name} needs attention. Their productivity has dropped to 0.
                    </div>
                )}
            </div>

            <div className="card-footer bg-transparent d-flex gap-2">
                <button className="btn btn-outline-danger btn-sm flex-fill" onClick={onReset}>Reset</button>
            </div>
        </div>
    )
}

export default Employee;
