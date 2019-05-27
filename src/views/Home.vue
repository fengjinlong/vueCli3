<template>
  <div class="div">
    <H>
      <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
    </H>
  </div>
</template>

<script>
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
