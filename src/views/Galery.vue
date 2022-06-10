<template>
  <div class="content-galery">
    <ul>
      <li><img src="../assets/cat1.jpg" /></li>
      <li><img src="../assets/cat2.jpg" /></li>
      <li><img src="../assets/cat5.jpg" /></li>
      <li><img src="../assets/dog1.jpg" /></li>
      <li><img src="../assets/dog2.jpg" /></li>
      <li><img src="../assets/cat4.jpg" /></li>
      <li><img src="../assets/cat3.jpg" /></li>
      <li><img src="../assets/dog1.jpg" /></li>
      <li><img src="../assets/cat1.jpg" /></li>
      <li><img src="../assets/dog2.jpg" /></li>
      <li><img src="../assets/cat1.jpg" /></li>
      <li><img src="../assets/dog2.jpg" /></li>
      <li><img src="../assets/cat4.jpg" /></li>
      <li><img src="../assets/cat5.jpg" /></li>
      <li><img src="../assets/dog1.jpg" /></li>
      <li><img src="../assets/cat2.jpg" /></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Galery extends Vue {}
</script>

<style>
.content-galery {
  width: 80%;
  margin: 100px auto 200px auto;
}

.content-galery ul{
  margin: 0;
  padding: 0;
}

.content-galery ul li{
  position: relative;
  display: inline-block;
  margin-right: 10px;
  width: 24%;
}

.content-galery ul li:nth-child(4n){
    margin-left: 0;
}

.content-galery ul li img{
  width: 100%;
  height: 300px;
}

</style>
