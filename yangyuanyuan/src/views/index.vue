<template>
  <div>
  <Leftlist2></Leftlist2>
  <Header></Header>
 <router-view>
 </router-view>
  </div>
</template>


<script>
import Leftlist2 from "../layout/Leftlist2.vue";
import Header from "../layout/Header.vue";

export default {

  data() {
    return {
      id: "",
      list: []
    };
  },
  components: {
    Leftlist2,
      Header,
  },

};
</script>


<style scoped>
</style>