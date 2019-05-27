<template>
  <div class="div">
    <!-- <H></H> -->
    <Throttle :time="1000" events="click">
      <button @click="fff">{{val}}</button>
    </Throttle>
    <P></P>
  </div>
</template>

<script>
import Throttle from '@/commonComponent/f/v.js'
import P from './p.vue'
// import H from '@/views/H.vue'
// @ is an alias to /src

export default {
  name: 'home',
  methods: {
    ff () {
      this.$nextTick(function () {
        this.val++
      })
    },
    fff () {
      this.val++
    }
  },
  components: {
    Throttle,
    P
  },
  data () {
    return {
      aaa: 1,
      b: [1],
      val: 1
    }
  }
}
</script>
