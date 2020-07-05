<template>
  <div>

    <ul>
      <li v-for="(item,index) in list1" :key="index">
        <img :src="item.coverImgUrl" />
      </li>
    </ul>
  </div>
</template>



<script>
// import Leftlist1 from "./Leftlist1.vue";


export default {

  data() {
    return {
      list1: [],
      id: ""
    };
  },
  created() {
    axios
      .post("https://showme.myhope365.com/api/shop/shopGoods/open/list")
      .then(res => {
        this.list1 = res.data.rows;
      });
  },
  watch: {
    $route() {
      const formdata = new FormData();
      formdata.append("categoryId", this.$route.query.id);
      axios
        .post(
          "https://showme.myhope365.com/api/shop/shopGoods/open/list",
          formdata
        )
        .then(res => {
          this.list1 = res.data.rows;
        });
    }
  }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  height: 100%;
  flex-grow: 1;
  margin-left: 200px;
  background-color: #f0f2f5;
}
li {
  padding: 15px;
  width: 200px;
  float: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
img {
  width: 200px;
  height: 200px;
}
</style>