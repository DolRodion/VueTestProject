<template>
  <div class="content-table">
    <h1>Помощь</h1>
    <br>
    <p>Тут могла бы быть ваша реклама :D </p>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Faq extends Vue {}
</script>

<style>
.content-table {
  width: 80%;
  padding: 10px 15px;
  background-color: white;
  border-radius: 15px;
  margin: 50px auto 100px auto;
  padding-bottom: 100px;
}

.content-table h1 {
  font-size: 36px;
}
.content-table b, .content-table p {
  font-size: 22px;
  line-height: 1.5;
}
</style>
