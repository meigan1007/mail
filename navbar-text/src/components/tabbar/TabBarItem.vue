<template>
  <div class="nav-item" @click="btnClick">
    <div v-show="!isActive"><slot name="item-icon"></slot></div>
    <div v-show='isActive'><slot name="item-icon1"></slot></div>    
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
    <!-- <img src="../../assets/img/tabbar/home.png" alt="">
    <div>首页</div>         -->
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     Isactive:false,
  //   }
  // },
  props:{
    path:String
  },
  computed: {
    isActive(){
      return this.$route.path === this.path
    }
  },
  methods: {
    btnClick(){
      console.log(this.path);
      this.$router.replace(this.path)
    }
  },
}
</script>

<style>
.nav-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
  /* margin-top: 3px; */
}
.nav-item img{
  height: 25px;
  width: 25px;
  vertical-align: middle;
  margin-top: 3px;
}
.active{
  color: red;
}
</style>