// Button go start
const $go = document.querySelector("#go");
const $playerDamage = document.getElementById("playerDamage");
const $rivalDamage = document.getElementById("rivalDamage");

console.log($playerDamage);
/// /////////////////////////////////////////////

const reload = () => {
  location.reload();
};

const defaultSettings = {
  hp: 100,
  attack: 20,
};

class Player {
  name = null;

  hp = 0;

  attack = 0;

  killed = false;

  constructor(name, settings = null) {
    const { hp, attack } = { ...defaultSettings, ...settings };
    this.name = name;
    this.hp = hp;
    this.attack = attack;
  }

  playerAttackBlock() {
    const $attackPlayerRadio = Array.from(
      document.querySelectorAll(".menu__attack input")
    ).indexOf(document.querySelector(".menu__attack input:checked"));
    const $blockPlayerRadio = Array.from(
      document.querySelectorAll(".menu__block input")
    ).indexOf(document.querySelector(".menu__block input:checked"));
    return {
      attackPlayer: $attackPlayerRadio,
      blockPlayer: $blockPlayerRadio,
    };
  }

  playerHP() {
    if (
      player.playerAttackBlock().blockPlayer ===
      rival.rivalAttackBlock().attackRival
    ) {
      return player.hp;
    }
    return (player.hp -= rival.attack);
  }

  playerHealthBar() {
    return ($playerDamage.style.width = `${player.hp}%`);
  }
}

class Rival {
  name = null;

  hp = 0;

  attack = 0;

  killed = false;

  constructor(name, settings = null) {
    const { hp, attack } = { ...defaultSettings, ...settings };
    this.name = name;
    this.hp = hp;
    this.attack = attack;
  }

  rivalAttackBlock() {
    const rivalBlk = () => Math.floor(Math.random() * 5);
    const rivalAtt = () => Math.floor(Math.random() * 5);
    return { attackRival: rivalAtt(), blockRival: rivalBlk() };
  }

  rivalHP = () => {
    if (
      rival.rivalAttackBlock().blockRival ===
      player.playerAttackBlock().attackPlayer
    ) {
      return rival.hp;
    }
    return (rival.hp -= player.attack);
  };

  rivalHealthBar() {
    return ($rivalDamage.style.width = `${player.hp}%`);
  }
}

const player = new Player("player");
const rival = new Rival("Rival");

$go.addEventListener("click", () => {
  console.log(player.playerAttackBlock());
  console.log(rival.rivalAttackBlock());

  console.log(player.playerHP());
  console.log(rival.rivalHP());

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
