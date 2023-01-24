import {choice, remove} from './helper'
import foodArray from './food'

const RANDOMFRUIT = choice(foodArray)
console.log(`I'd like one ${RANDOMFRUIT}, please.`)
console.log(`Here you go: ${RANDOMFRUIT}`)
console.log(`Delicious! May I have another?`)

remove(foodArray,RANDOMFRUIT)

console.log(`I’m sorry, we’re all out. We have ${foodArray.length} left.`)