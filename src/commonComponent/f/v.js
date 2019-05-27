const throttle = function (fn, wait = 50, ctx) {
  let timer
  return function (...params) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(ctx, params)
    }, wait)
  }
}

export default {
  name: 'Throttle',
  abstract: true,
  props: {
    time: Number,
    events: String
  },
  created () {
    this.eventKeys = this.events.split(',')
  },
  render () {
    const vnode = this.$slots.default[0]
    let time = this.time
    this.eventKeys.forEach((key) => {
      const target = vnode.data.on[key]
      vnode.data.on[key] = throttle(target, time, vnode)
    })
    return vnode
  }
}
