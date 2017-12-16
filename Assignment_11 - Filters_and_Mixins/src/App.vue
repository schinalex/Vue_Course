<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <p>{{ text | reverse }}</p>
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p>{{ text | showLengths }}</p>
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <p>{{ reversedText }}</p>
        <p>{{ wordLengthText }}</p>
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <p>Voila: {{ wordLengthText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  // or import the full implementation of zip from a library (ex: Ramda)
  const zip = (arr1, arr2) => arr1.map((item, i) => [item, arr2[i]])

  const reverse = str => str.split('').reverse().join()
  const showLengths = str => {
    const words = str.split(' ')
    const lengths = words.map(word => word.length)
    return zip(words, lengths)
      .map(values => `${values[0]} (${values[1]})`)
      .join(' ')
  }

  // lets pretend this is in a separate file :D
  const wordLengthTextMixin = {
    computed: {
      wordLengthText () {
        return showLengths(this.text)
      }
    }
  }

  export default {
    mixins: [wordLengthTextMixin],
    data: () => ({
      text: 'Hello World'
    }),
    filters: {
      reverse: value => reverse(value),
      showLengths: value => showLengths(value)
    },
    computed: {
      reversedText () {
        return reverse(this.text)
      }
    }
  }
</script>

<style>
</style>
