let arr = [1, 2, 3, 4, 5, 6]
let cardNum = [...arr, ...arr]
cardNum = cardNum.sort(() => 0.5 - Math.random())
const $ = x => document.querySelector(x)
const game = $('.game')
const cards = $('.cards')
const allCard = document.querySelectorAll('.card')



const createCard = () => {
    cardNum.forEach(number => {
        let card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('color-transparent')
        card.textContent = number
        cards.appendChild(card)
    })
}
createCard()

const state = {}
state.numbers = []
state.numOfClick = 0

const handleClicks = e => {
    if (state.numOfClick < 2) {
        if (!e.target.classList.contains('opacity') && state.numOfClick < 2) {
            e.target.classList.add('opacity')
            state.numOfClick++
                state.numbers.push(e.target.textContent)
        }
        console.log(state.numbers);
        if (state.numbers[0] === state.numbers[1]) {
            console.log('currect guess !');
        } else {
            console.log('wrong guess');
        }
    }
}

game.addEventListener('click', handleClicks)