function getTime()
{
    const date = new Date();
    return date.getHours()+"Hrs" + " " + date.getMinutes()+"Min" +" "+ date.getSeconds()+"Sec";
}

function showSessionExpire() {
    console.log("Its Activity B Your session is expired at"+ getTime());
    
}
console.log("Its me Activity A  My session ends at: " + getTime());
setTimeout(showSessionExpire, 5000);
console.log("Activity-A triggering Activity B at" + getTime());