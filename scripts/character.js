const defaultSettings = {
  hp: 100,
  attack: 20,
};

export class Player {
  name = null;

  hp = 0;

  attack = 0;

  block = 0;

  killed = false;

  constructor(name, settings = null) {
    const { hp, attack, block } = { ...defaultSettings, ...settings };
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.block = block;
  }

  damage(attack) {
    const newHp = this.hp - (attack - this.block);

    if (newHp > 0) {
      this.hp = newHp;
    } else {
      this.hp = 0;
      this.killed = true;
    }
  }

  hit(player) {
    player.damage(this.attack);
    this.damage(player.attack);
  }
}

// import { Player } from "./player";

const stats = (...players) => players.reduce(
  (acc, p) => `${acc}${p.name} (HP:${p1.hp}, ${p1.killed ? 'killed' : 'alive'}) `,
  '',
);

const p1 = new Player('player1');
const p2 = new Player('player2', { hp: 100, attack: 35 });

console.log(stats(p1, p2));
p1.hit(p2);
console.log(stats(p1, p2));
p1.hit(p2);
console.log(stats(p1, p2));
p2.hit(p1);
console.log(stats(p1, p2));
p2.hit(p1);
console.log(stats(p1, p2));
