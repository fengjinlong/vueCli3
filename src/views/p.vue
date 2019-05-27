<template>
  <C>
    <div slot-scope="{}" class="tags-input">
      <span class="tags-input-tag">
        <span>Testing</span>
        <span>Design</span>
        <button type="button" class="tags-input-remove">&times;</button>
      </span>
      <input class="tags-input-text" placeholder="Add tag...">
    </div>
  </C>
</template>

<script  type='text/ecmascript-6'>
import C from './c.vue'
export default {
  components: {
    C
  }
}
</script>
