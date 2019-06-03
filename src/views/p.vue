<template>
    <div class='input-tags--container'>
        <!-- <h1>布局1 包裹组件引用模式<P v-model="tags"></P>   props: ['value'],</h1> -->
        <C :value="value" @input="(tags) => { $emit('input', tags) }">
            <div slot-scope="{tags,inputEvents,inputAttrs,removeTag}" class="input-tags-wrap">
                <span class="tag" v-for="(tag,index) in tags" :key="index">
                    <span>{{tag}}</span>123
                    <button @click="removeTag(tag)">&times;</button>
                </span>
                <input type="text" class="tag_input" v-on="inputEvents" v-bind="inputAttrs">
            </div>

        </C>

        <!-- <h1>布局2普通引用模式<P></P></h1>
        <C v-model="tags">
            <div slot-scope="{tags,inputEvents,inputAttrs,removeTag,addTag}" class="input-tags-wrap--two">
                <div class="tag_list--container">
                    <div class="tag_input--wrap">
                        <input type="text" class="tag_input--two" placeholder="Add tag..." v-on="inputEvents" v-bind="inputAttrs">
                        <button type="button" class="tag_input--button" @click="addTag">添加</button>
                    </div>
                    <div v-for="(tag,index) in tags" :key="index" class="tag--wrap">
                        <span>{{index+1}}： {{tag}}</span>
                        <button class="" @click="removeTag(tag)">删除</button>
                    </div>
                </div>

            </div>

        </C> -->
    </div>

</template>

<script>
import C from './c.vue'

export default {
  data () {
    return {
    }
  },
  props: ['value'],
  components: {
    C
  }
}
</script>

<style>
</style>
