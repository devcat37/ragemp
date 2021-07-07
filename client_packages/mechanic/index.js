let browser = mp.browsers.new('package://mechanic/index.html')
browser.active = false
let toggle = false

function closeBrowser() {
    browser.active = false
    mp.gui.cursor.show(false, false)
}

function updateInfo(id, repair) {
    browser.execute(`updateInfo('${id}', '${JSON.stringify(repair)}')`)
}

mp.events.add('mechanic.start', (id, repair) => {
    browser.active = true
    mp.gui.cursor.show(true, true)
    updateInfo(id, repair)
})

mp.events.add('mechanic.update', (id, repair) => {
    updateInfo(id, repair)
})

mp.events.add('mechanic.repair', (id, part) => {
    mp.events.callRemote('mechanic.repair', id, part)
})

mp.events.add('mechanic.close', () => {
    closeBrowser()
})