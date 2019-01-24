<template>
  <div class="dd">
    11111111
    <button @click="btn">btn</button>
    <!-- <L></L> -->
  </div>
</template>

<script>
import Axios from 'axios'
// import L from '@/views/1.vue'
export default {
  components: {
    // L
  },
  name: '',
  created () {

  },
  data () {
    return {}
  },
  methods: {
    btn () {
      // let str = 'https://www.baidu.com/'
      let str = '/api'
      // console.log(Axios.get('/api/syncStuCourseRecord/loadRecord?pageNum=1&pageSize=20'))
      console.log(Axios.get(str))
    }
  }
}

</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .dd
    display flex
</style>
