<template>
  <tab-bar>
      <tab-bar-item path='/home'>
        <!-- <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="">
        <img slot="item-icon1" src="./assets/img/tabbar/homeActive.png" alt=""> -->
        <img slot="item-icon" src="../assets/img/tabbar/home.png" alt="">
        <img slot="item-icon1" src="../assets/img/tabbar/homeActive.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/about'>
        <img slot="item-icon" src="../assets/img/tabbar/about.png" alt="">
        <img slot="item-icon1" src="../assets/img/tabbar/aboutActive.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/shop'>
        <img slot="item-icon" src="../assets/img/tabbar/shop.png" alt="">
        <img slot="item-icon1" src="../assets/img/tabbar/shopActive.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/user'>
        <img slot="item-icon" src="../assets/img/tabbar/user.png" alt="">
        <img slot="item-icon1" src="../assets/img/tabbar/userActive.png" alt="">
        <div slot="item-text">用户</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>

import TabBar from './tabbar/tabbar'
import TabBarItem from'./tabbar/TabBarItem'

export default {
    TabBar,
    TabBarItem
}
</script>

<style scoped>

</style>>
