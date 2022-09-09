// Your code here
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents:[],
        timeOutEvents:[]


    }
}
 function  createEmployeeRecords (records) {
    let empTracker = []
    records.forEach(record => {
        let workers = createEmployeeRecord(record)
        empTracker.push(workers)

        
    });
    return empTracker

 }
 function createTimeInEvent (empTrack, String) {
let dateTime = String.split(" ")
empTrack.timeInEvents.push({
    type: 'TimeIn',
    hour: parseInt(dateTime[1]),
    date: dateTime[0]
})
return empTrack
 }
 function createTimeOutEvent (tracker, String) {
    let dateTime = String.split(" ")
    tracker.timeOutEvents.push({
        type: 'TimeOut',
        hour:parseInt(dateTime[1]),
        date: dateTime[0]
    })
    return tracker
 }
 function hoursWorkedOnDate (tracker, String) {
    let timeIn = tracker.timeInEvents.find( item =>
        item.date === String
 )
    let timeOut = tracker.timeOutEvents.find( item =>
        item.date === String
)
    return(timeOut.hour - timeIn.hour) /100

 }
 function wagesEarnedOnDate ( tracker, String) {
    let timeIn = tracker.timeInEvents.find( item => 
        item.date === String)
        let timeOut = tracker.timeOutEvents.find(item => 
            item.date === String)
            return(timeOut.hour - timeIn.hour) /100 * tracker.payPerHour
 }
 function allWagesFor (tracker) {
    let total = tracker.timeInEvents.length
    let sum = 0
    for (let i = 0; i < total; i++){
        let total = (tracker.timeOutEvents[i].hour - tracker.timeInEvents[i].hour) /100
        sum = sum + (total) * tracker.payPerHour
        
    }
    return sum

 }
 function calculatePayroll (tracker) {
    let sum = 0 
    for (let i = 0; i < tracker.length; i++) {
        sum = sum + allWagesFor(tracker[i])
    }
    return sum
 }
