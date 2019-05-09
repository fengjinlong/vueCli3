<template>
  <div class="div">
    {{aaa}}
    {{b}}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  created () {
    console.log(this)
  },
  data () {
    return {
      aaa: 1,
      b: [1]
    }
  }
}
</script>
