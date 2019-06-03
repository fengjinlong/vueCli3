<template>
  <div class="div">
    <P v-model="tags"></P>
  </div>
</template>

<script>
import P from '@/views/p.vue'
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
    P
  },
  data () {
    return {
      tags: ['test1', 'test2'],
      aaa: 1,
      b: [1],
      val: 1
    }
  }
}
</script>
