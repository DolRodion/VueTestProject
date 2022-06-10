<template>
  <div class="content-table">
    <h1>Контакты</h1>
    <br>
    <p><b>Фио </b> - Долгополов Родион Игоревич</p>
    <p><b>VK </b> - https://vk.com/in_fini_ti</p>
    <p><b>Inst </b> - https://www.instagram.com/conadar</p>
    <p><b>Facebook </b> - https://www.facebook.com/</p>
    <p><b>Email </b> - dolrodion@gmail.com</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Contact extends Vue {}
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
