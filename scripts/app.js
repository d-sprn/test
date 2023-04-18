'use strict'


const $go = document.querySelector("#go");
const $playerDamage = document.getElementById("playerDamage");
const $rivalDamage = document.getElementById("rivalDamage");


const reload = () => {
    location.reload();
};

const player = new Player("player");
const rival = new Rival("Rival");

$go.addEventListener("click", () => {
    console.log(player.playerAttackBlock());
    // player.playerAttackBlock();
    console.log(rival.rivalAttackBlock());
    // rival.rivalAttackBlock()
    console.log(player.playerHP());
    // player.playerHP()
    console.log(rival.rivalHP());
    // rival.rivalHP()
    player.playerHealthBar();
    rival.rivalHealthBar();

    if (player.hp === 0) {
        alert("player loose");
        reload();
    } else if (rival.hp === 0) {
        alert("Player win");
        reload();
    } else if (rival.hp === 0 && player.hp === 0) {
        alert("draw");
        reload();
    }
});
