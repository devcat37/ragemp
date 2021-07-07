require('./command')

mp.events.addCommand('veh', (player, model) => {
    let position = mp.players.local.position;
    position.x += 1;
    position.y += 1;
    let data = {
        color: [[0,0,0],[0,0,0]]
    }
    global.createVehicle(model, position, data)
})

mp.events.add('mechanic.start', (player) => {
    let transport = global.nearbyCar(player.position)
    if (!transport) return;
    transport.engine = parseInt(transport.bodyHealth)

    player.call('mechanic.start', [transport.id, transport.parts])
})

mp.events.add('mechanic.repair', (player, id, repair) => {
    player.playAnimation('mp_arresting', 'idle', 1, 49)
    
    let transport = global.vehicleById(parseInt(id))
    transport.parts[repair] = 100

    if (repair === 'frame') {
        transport.repair()
    }

    transport.engine = parseInt(transport.bodyHealth)

    player.call('mechanic.update', [transport.id, transport.parts])
})