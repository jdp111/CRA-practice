function choice(items) {
    const len = items.length
    const randNum = Math.floor(Math.random() * len)
    return items[randNum]

}

function remove(items, item) {
    if (items.includes(item)){
        const index = items.findIndex(i => i == item)
        items.splice(index,1)
        return item
    }
    return undefined
}

export {choice, remove}