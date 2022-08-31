const employee = {
    name: 'Bob',
    streetAddress: '123 Spooer st.'
};

function updateEmployeeWithKeyAndValue (employee, key, value){
    const newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee;
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
const deleteFromEmployeeByKey = (employee, key) => {
     const newEmployee = {...employee};
     delete newEmployee[key];
    return newEmployee;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}