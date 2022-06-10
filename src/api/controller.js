exports.doBracketsBalance = async (code = '') => {
    const regex = /([()|{}|[\]\\])/g
    const bracketsMatch = code.match(regex)

    if (!bracketsMatch) {
        return false
    }

    const openBrackets = ['(', '{', '[']
    const closedBrackets = [')', '}', ']']
    const open = []

    let isBalance = true

    bracketsMatch.forEach(element => {
        if (openBrackets.includes(element)) {
            open.push(element)
        } else if (closedBrackets.includes(element)) {
            if (!open.length) {
                isBalance = false
                return
            }

            const last = open[open.length - 1]
            const opposite = openBrackets[closedBrackets.indexOf(element)]

            if (last === opposite) {
                open.pop()
            } else {
                isBalance = false
            }
        }
    })

    if (open.length) {
        isBalance = false
    }

    return isBalance
}
