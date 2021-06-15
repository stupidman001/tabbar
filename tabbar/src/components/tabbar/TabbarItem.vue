<template>

  <div>
    <div class="tab-bar-item" @click="go">
      <div v-if="!active">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-title"></slot>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  data() {
    return {}
  },
  computed: {
    active(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.active ? {color:this.activeColor} : {}
    }
  },
  methods: {
    go(){
      this.$router.replace('/'+this.path)
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-bar-item {
  text-align: center;
  line-height: 49px;
  img {
    width: 20px;
  }
}
</style>