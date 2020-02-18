var pokeData = [
  {
    name: "eevee",
    img: "assets/eevee.png",
    id: 1
  },
  {
    name: "sylveon",
    img: "assets/sylveon.png",
    id: 2
  },
  {
    name: "umbreon",
    img: "assets/umbreon.png",
    id: 3
  },
  {
    name: "flareon",
    img: "assets/flareon.png",
    id: 4
  },
  {
    name: "jolteon",
    img: "assets/jolteon.png",
    id: 5
  },
  {
    name: "leafeon",
    img: "assets/leafeon.png",
    id: 6
  },
  {
    name: "glaceon",
    img: "assets/glaceon.png",
    id: 7
  },
  {
    name: "vaporeon",
    img: "assets/vaporeon.png",
    id: 8
  },
  {
    name: "espeon",
    img: "assets/espeon.png",
    id: 9
  },
  {
    name: "eevee",
    img: "assets/eeveeTwo.png",
    id: 10
  },
  {
    name: "sylveon",
    img: "assets/sylveonTwo.png",
    id: 11
  },
  {
    name: "umbreon",
    img: "assets/umbreonTwo.png",
    id: 12
  },
  {
    name: "flareon",
    img: "assets/flareonTwo.png",
    id: 13
  },
  {
    name: "jolteon",
    img: "assets/jolteonTwo.png",
    id: 14
  },
  {
    name: "leafeon",
    img: "assets/leafeonTwo.png",
    id: 15
  },
  {
    name: "glaceon",
    img: "assets/glaceonTwo.png",
    id: 16
  },
  {
    name: "vaporeon",
    img: "assets/vaporeonTwo.png",
    id: 17
  },
  {
    name: "espeon",
    img: "assets/espeonTwo.png",
    id: 18
  }
]
var array = []
pokeData.forEach(item => {
  array.push(
    `<div id="${item.id}" data-value="${item.name}" class="card"><div class="front"></div><div  class="back"><img src="${item.img}"></div></div>`
  )
})

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

shuffle(array)
$("#memoryBoard").html(array)
$("#memoryBoard")
  .find(".card")
  .flip({
    trigger: "click"
  })

let pickOne = undefined
let flipOne = undefined
let pickTwo = undefined
let flipTwo = undefined
let score = 0
let lives = 15
let health = document.getElementById("health")
health.innerHTML = `You have ${lives} lives remaining.`

$(".card").click(function() {
  if (pickOne === undefined) {
    pickOne = $(this).attr("data-value")
    flipOne = $(this).attr("id")
  } else {
    pickTwo = $(this).attr("data-value")
    flipTwo = $(this).attr("id")
    setTimeout(function() {
      if (pickOne === pickTwo) {
        score += 1
        if (score === 9) {
          var winScreen = document.getElementById("win")
          winScreen.style.visibility = "visible"
        }
        $(`#${flipOne}`)
          .off(".flip")
          .unbind("click")
        $(`#${flipTwo}`)
          .off(".flip")
          .unbind("click")

        pickOne = undefined
        flipOne = undefined
        pickTwo = undefined
        flipTwo = undefined
      } else if (pickOne !== pickTwo) {
        lives--
        health.innerHTML = `You have ${lives} lives remaining.`
        if (lives === 0) {
          var loseScreen = document.getElementById("lose")
          loseScreen.style.visibility = "visible"
        }
        $(`#${flipOne}`).flip(false)
        $(`#${flipTwo}`).flip(false)
        pickOne = undefined
        flipOne = undefined
        pickTwo = undefined
        flipTwo = undefined
      }
    }, 650)
  }
})
