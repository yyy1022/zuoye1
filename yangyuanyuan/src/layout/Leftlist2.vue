<template>
  <div class="left">
    <ul>
      <li v-for="(item,index) in list" :key="index" @click="changeColor(index)"  :class="index==nowindex?'active':''">
       <router-link :to="'/index?id='+item.categoryId">
       {{item.name}}</router-link>
       </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      nowindex:0
    };
  },
  created() {
    axios
      .post("https://showme.myhope365.com/api/shop/shopCategory/open/list")
      .then(res => {
        console.log(res);
        this.list = res.data.rows;
      });
  },
  methods: {
    changeColor(index){
      this.nowindex=index
    }
  },

};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
  color: #fff;
}
a{
  display: block;
  color: #fff;
  text-decoration: none;
  width: 100%;
  height: 100%;
}
li{
 line-height: 40px;
  text-align: center;
  height: 40px;
  cursor: pointer;
  margin-top: 10px;
}
.left {
  background-color: black;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
}
.active{
  background-color: red;
}
</style>