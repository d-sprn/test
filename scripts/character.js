'use strict'

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
        const {hp, attack} = {...defaultSettings, ...settings};
        this.name = name;
        this.hp = hp;
        this.attack = attack;
    }

    rivalAttackBlock() {
        return {
            attackRival: Math.floor(Math.random() * 5),
            blockRival: Math.floor(Math.random() * 5)
        };
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
        return ($rivalDamage.style.width = `${rival.hp}%`);
    }

}
