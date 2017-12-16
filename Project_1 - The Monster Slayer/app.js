new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        playing: false,
        attacks: []
    },
    methods: {
        receiveAttack () {
            const damage = 7
            this.playerHealth -= this.playerHeath - damage < 0 ? this.playerHealth : damage
            if (this.playerHealth === 0) this.gameOver({ win: false })
            this.attacks.push({
                attacker: 'monster',
                damage: damage
            })
            console.log(`player: ${this.playerHealth}`)
        },
        attack (damage) {
            this.monsterHealth -= this.monsterHealth - damage < 0 ? this.monsterHealth : damage
            if (this.monsterHealth === 0) this.gameOver({ win: true })
            this.attacks.push({
                attacker: 'player',
                damage: damage
            })
            console.log(`monster: ${this.monsterHealth}`)
            this.receiveAttack()
        },
        heal () {
            this.playerHealth += (this.playerHealth + 10) > 100 ? 100 - this.playerHealth : 10
            this.receiveAttack()
        },
        gameOver ({win}) {
            const message = win ? 'Coongrats! You won!' : 'You lost. Better luck next time!'
            setTimeout(() => {
              if(confirm(`${message}\nTry again?`)) this.start()
            }, 500) // workaround for the fact that confirm or alert stops (the World, and) the execution of Vue magic
                    // but I need it to finish the animations and get the healthbar to 0 before I display the game over message
        },
        reset () {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.playing = false
            this.attacks = []
            console.log('reseted')
        },
        start () {
          this.reset()
          this.playing = true
        }
    }
})
