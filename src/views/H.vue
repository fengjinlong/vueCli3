<template>
  <div class="div">
    <!-- <a style="display:block" href="javascript:void(0)" v-for="(ele,i) in arr" :key="i">{{ele}}</a> -->
    <span>
  <slot name="slotProps" v-bind:user="user">
    {{ user.lastName }}
  </slot>
</span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'slotProps',
  created () {
    // console.log(Vue.prototype)
  },
  data () {
    return {
      user: [1, 2, 3, 4, 5]
    }
  }
}
</script>
