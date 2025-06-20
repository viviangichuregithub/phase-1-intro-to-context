// Your code here
// Function 1: createEmployeeRecord
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  };
}

// Function 2: createEmployeeRecords
function createEmployeeRecords(dataArrays) {
  return dataArrays.map(createEmployeeRecord);
}

// Function 3: createTimeInEvent
function createTimeInEvent(employee, dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  employee.timeInEvents.push({
    type: "TimeIn",
    date,
    hour: parseInt(hour, 10)
  });
  return employee;
}

// Function 4: createTimeOutEvent
function createTimeOutEvent(employee, dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  employee.timeOutEvents.push({
    type: "TimeOut",
    date,
    hour: parseInt(hour, 10)
  });
  return employee;
}

// Function 5: hoursWorkedOnDate
function hoursWorkedOnDate(employee, date) {
  const timeIn = employee.timeInEvents.find(event => event.date === date);
  const timeOut = employee.timeOutEvents.find(event => event.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

// Function 6: wagesEarnedOnDate
function wagesEarnedOnDate(employee, date) {
  return hoursWorkedOnDate(employee, date) * employee.payPerHour;
}

// Function 7: allWagesFor
function allWagesFor(employee) {
  return employee.timeInEvents
    .map(event => event.date)
    .reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0);
}

// Function 8: calculatePayroll
function calculatePayroll(employees) {
  return employees.reduce((total, emp) => total + allWagesFor(emp), 0);
}
