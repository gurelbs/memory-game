let arr = [1, 2, 3, 4, 5, 6]
let cardNum = [...arr, ...arr]
cardNum = cardNum.sort(() => 0.5 - Math.random())
const $ = x => document.querySelector(x)
const game = $('.game')
const cards = $('.cards')
const score = $('.score')
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

const state = {
    numbers: [],
    numOfClick: 0,
    score: 0,
    isCurrect: false
}

const handleClicks = e => {
    let cardsChildren = [...cards.children]
    console.log(cardsChildren);
    if (e.target.classList.contains('card') && state.numOfClick < 2) {
        state.numbers.push(e.target.textContent);
        state.numOfClick++;
        e.target.classList.add('opacity');
        e.target.classList.remove('color-transparent')
        const showNumber = () => {
            e.target.classList.remove('opacity');
            e.target.classList.add('color-transparent')
        }
        setTimeout(showNumber, 1000)
    }
    state.numbers[0] === state.numbers[1] ? state.isCurrect = true : state.isCurrect
    if (state.isCurrect === true) {
        console.log(state.numbers[0], state.numbers[1]);
        state.score += 10
        score.textContent = state.score
        state.numbers = []
        state.numOfClick = 0
    } else {
        console.log(state.numbers);
        state.numbers = []
        state.numOfClick = 0
    }
}

game.addEventListener('click', handleClicks)