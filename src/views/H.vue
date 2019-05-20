<template>
  <div class="div">
    {{a}}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HHHHH',
  created () {
    // console.log(Vue.prototype)
    console.log(this._watchers)
  },
  data () {
    return {
      a: 22
    }
  }
}
</script>
