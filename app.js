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
const handleClick = e => {
    if (e.target.classList.contains('card')) {
        if (!e.target.classList.contains('opacity')) {
            e.target.classList.add('opacity')
            console.log(e.target.textContent);
        }
        [...cards.children].forEach(child => {
            if (child.classList.contains('opacity')) {
                console.log();
            }
        })
    }
}

game.addEventListener('click', handleClick)