const {v4: uuidv4} = require('uuid')

require('./command')
require('./mechanic')
require('../utils')

global.transports = []

global.createVehicle = function(model, position, data) {
    if (model === undefined) {
        model = "schwarzer"
      }
      
      let vehGame = mp.vehicles.new(mp.joaat(model), position, data)
      vehGame.numberPlate = "ALISA"

      let veh = new Vehicle(vehGame, model)
      global.transports.push(veh)

      return veh.id
}

global.vehicleById = function(id) {
    for(let i = 0; i < global.transports.length; i++) {
        if (global.transports[i].id === id) return global.transports[i]
    }
    return undefined
}

class Vehicle {
    constructor(veh, model) {
        this.model = model
        this.veh = veh
        this._id = veh.id
        this.parts = {
            transmission: global.random(60, 100),
            suspension: global.random(60, 100),
            engine: global.random(60, 100),
            frame: global.random(60, 100),
        }
    }

    get id() {
        return this._id
    }
    
    set id(value) {
        this._id = value
    }

    get pos() {
        return this.veh.position
    }
}

mp.events.add("playerJoin", (player) => {
    player.setpos = function(pos, r) {
        if (r === undefined) {
            r = 0
        }
        player.position = pos
        player.heading = r
    }
})

global.createVehicle('firetruk', new mp.Vector3(-824.887084, -347.7195129, 37.58963394, {
    heading: 163.8,
}))