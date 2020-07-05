<template>
    <div>
    <div class="box">
    <div class="box1">
         账号
      <input type="text" />
      <br />密码
      <input type="text" />
      <br />
      <button @click="click">登录</button>
      <router-link :to="'/index'"></router-link>
      </div>   
</div>

    </div>
</template>


<script>
export default {
methods: {
    click(){
        this.$router.push("/index")
    }
},
}
</script>


<style scoped>
    .box {
        background-image: url(../images/1.jpg);
        position: fixed;
        height: 100%;
        top: 0;
        left: 0;
        width: 100%;
        background-repeat: no-repeat;
        background-size: 100%;
    }
      .box1 {
        width: 100px;
        height: 100px;
        margin-left: 50%;
        
    }

</style>