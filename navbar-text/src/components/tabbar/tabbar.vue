<template>
  <div id="nav">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#nav{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  box-shadow: 0px 20px 60px #528baa
}
</style>