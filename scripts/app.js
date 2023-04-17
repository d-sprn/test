"use strict"
// import {attack} from './fight'

let healthArrPlayer  = [   ];

let healthArrRival  = [   ];

let $healthPlayer = document.querySelector('#playerHealth')
let $healthRival = document.querySelector('#rivalHealth')


// Button go start
let $go = document.querySelector('#go');

////////////////////////////////////////////////

//player fight function
const playerFight = () => {
    const blockCheck = () => {
        const $blockPlayerRadio = document.getElementsByName('block');
        for (let i = 0; i < $blockPlayerRadio.length; i++){ if ($blockPlayerRadio[i].checked){ return i } }
    }
    const attCheck = () =>{
        const $attackPlayerRadio = document.getElementsByName('attack');
        for (let i = 0; i < $attackPlayerRadio.length; i++){ if ($attackPlayerRadio[i].checked){ return i } }
    }
    return { playerBlock: blockCheck(), playerAttack: attCheck(),}
}

const rivalFight = () => {
    const rivalBlk = () => { return Math.floor(Math.random() * 3) }
    const rivalAtt = () => { return Math.floor(Math.random() * 3) }
    return { rivalBlock: rivalBlk(), rivalAttack: rivalAtt(), }
}

/////////////////////////////////////////////////

$go.addEventListener("click",  () => {


    console.log(playerFight());


    console.log(rivalFight())
    healthArrPlayer = [ ]
    healthArrRival = [ ]

    const fight = () => {
        const player = () => {
            if (playerFight().playerBlock === rivalFight().rivalAttack) { return  console.log('Blocked')
            } else { return  healthArrPlayer.push(`<span class="health__point"></span>`) }
        }
        const rival = () => {
            if (rivalFight().rivalBlock === playerFight().playerAttack) { return  console.log('Blocked')
            } else { return  healthArrRival.push(`<span class="health__point"></span>`)}
        }
        return{ player: player(), rival: rival(), }
    }

    console.log(fight())

    $healthPlayer.insertAdjacentHTML('afterbegin', healthArrPlayer.join(' '))
    $healthRival.insertAdjacentHTML('afterbegin', healthArrRival.join(' '))



    console.log(healthArrPlayer)
    console.log(healthArrRival)

})
