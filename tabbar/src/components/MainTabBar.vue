<template>
  <div>
    <Tabbar>
      <TabbarItem path="home" activeColor="blue">
        <img src="~assets/img/tabbar/home.svg" slot="item-icon" />
        <img
          src="~assets/img/tabbar/home_active.svg"
          slot="item-icon-active"
        />
        <div slot="item-title">首页</div>
      </TabbarItem>

      <TabbarItem path="category" activeColor="blue">
        <img src="~assets/img/tabbar/category.svg" slot="item-icon" />
        <img
          src="~assets/img/tabbar/category_active.svg"
          slot="item-icon-active"
        />
        <div slot="item-title">分类</div>
      </TabbarItem>

      <TabbarItem path="profile" activeColor="blue">
        <img src="~assets/img/tabbar/shopcart.svg" slot="item-icon" />
        <img
          src="~assets/img/tabbar/shopcart_active.svg"
          slot="item-icon-active"
        />
        <div slot="item-title">购物车</div>
      </TabbarItem>

      <TabbarItem path="shopcart" activeColor="blue">
        <img src="~assets/img/tabbar/profile.svg" slot="item-icon" />
        <img
          src="~assets/img/tabbar/profile_active.svg"
          slot="item-icon-active"
        />
        <div slot="item-title">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>

import Tabbar from "./tabbar/tabbar.vue";
import TabbarItem from "./tabbar/TabbarItem.vue";

export default {
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>

<style>
</style>