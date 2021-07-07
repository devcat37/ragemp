global.distancePointToPoint = function(pos1, pos2) {
    return Math.abs(Math.sqrt(
      Math.pow((pos1.x - pos2.x), 2) + Math.pow((pos1.y - pos2.y), 2) + Math.pow((pos1.z - pos2.z), 2)
    ))
  }

global.nearbyCar = function(pos) {
  let carid = -1
  let near = 999999
  for(let i = 0; i < transports.length; i++) {
    let distance = global.distancePointToPoint(pos, transports[i].pos)
    if (distance < near) {
      carid = i
      near = distance
    }
  }
  if (carid === -1 || near > 5.0) {
    return undefined
  }
  return transports[carid]
}

global.random = function(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}