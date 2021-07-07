require('./mechanic')

const keyG = 0x47

const jobMechanic = "mechanic"

const userJob = jobMechanic

mp.keys.bind(keyG, true, function() {
    switch(userJob) {
        case jobMechanic:
            handlerMechanic()
            break
    }
})

function handlerMechanic() {
    mp.events.callRemote('mechanic.start')
}