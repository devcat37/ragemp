mp.events.addCommand('carinfo', (player) => {
    player.notify(`Car[id: ${t.id}; pos: ${t.pos.x} ${t.pos.y} ${t.pos.z}]`)
  })