<template>
  <div class="div">
    {{a}}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HH',
  beforeCreate () {
    console.log('HH beforeCreate')
  },
  created () {
    console.log('HH created')
  },
  beforeMount () {
    console.log('HH beforeMount')
  },
  mounted () {
    console.log('HH mounted')
  },
  beforeDestroy () {
    console.log('HH beforeDestroy')
  },
  destroyed () {
    console.log('HH destroyed')
  },
  components: {
  },
  data () {
    return {
      a: 222
    }
  }
}
</script>
