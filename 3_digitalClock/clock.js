
const clock = document.getElementById('clock')

setInterval(() => {
    const newDate = new Date()
    clock.innerHTML = newDate.toLocaleTimeString()
    
}, 1000);