new Vue({
  el: '#exercise',
  data: {
    classes: {
      highlight: false,
      shrink: false 
    },
    color: '',
    enteredClass: '',
    show: '',
    styles: {},
    effectStarted: false,
    progress: 0
  },
  methods: {
    startEffect () {
      if (!this.effectStarted) {
        let x = true
        setInterval(() => {
          this.classes.highlight = x
          this.classes.shrink = !x
          x = !x
        }, 500)
        this.effectStarted = true
      }
    },
    setStyle (event) {
      const inputText = event.target.value

      this.styles = inputText.split(' ').join('').split(',').reduce((styles, text) => {
        let style, value
        [ style, value ] = text.split(':')
        return { ...styles, [style]: value }
      }, {})
      console.log(this.styles)  
    },
    startProgress () {
      if (this.progress < 100) {
        const progress = setInterval(() => {
          this.progress++
          if (this.progress === 100) clearInterval(progress)
        }, 1000)
      }
    }
  }
});
