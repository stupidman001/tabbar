<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'Tabbar'
};
</script>

<style scoped lang="scss">
@import "/css/base.css";
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  justify-content: space-around;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
