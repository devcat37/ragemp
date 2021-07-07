mp.events.addCommand('getpos', (player) => {
    player.outputChatBox(`pos x: ${player.position.x}; y: ${player.position.y}; z: ${player.position.z}; r: ${player.heading}`)
})


mp.events.addCommand('spawn', (player, _, spawn) => {
    switch (spawn) {
        case 'job_fire':
            player.setpos(new mp.Vector3(-827.6926, -341.441, 37.5355), 295.327)
            break
    }

    player.setpos(new mp.Vector3(-827.6926, -341.441, 37.5355), 295.327)
})

mp.events.addCommand('start', (player, _, system) => {
    if (!system) return;

    require('./fire').start()
    
})