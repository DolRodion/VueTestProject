<template>
  <div class="content-table">
    <h1>Простенькая табличка</h1>
    <table class="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>ZIP</th>
          <th>Birthday</th>
          <th>Points</th>
          <th>Average</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gloria</td>
          <td>Reeves</td>
          <td>67439</td>
          <td>10/18/1985</td>
          <td>4</td>
          <td>0.1</td>
          <td>$50</td>
        </tr>
        <tr>
          <td>Gloria</td>
          <td>Reeves</td>
          <td>67439</td>
          <td>10/18/1985</td>
          <td>4</td>
          <td>0.1</td>
          <td>$50</td>
        </tr>        <tr>
          <td>Gloria</td>
          <td>Reeves</td>
          <td>67439</td>
          <td>10/18/1985</td>
          <td>4</td>
          <td>0.1</td>
          <td>$50</td>
        </tr>        <tr>
          <td>Gloria</td>
          <td>Reeves</td>
          <td>67439</td>
          <td>10/18/1985</td>
          <td>4</td>
          <td>0.1</td>
          <td>$50</td>
        </tr>        <tr>
          <td>Gloria</td>
          <td>Reeves</td>
          <td>67439</td>
          <td>10/18/1985</td>
          <td>4</td>
          <td>0.1</td>
          <td>$50</td>
        </tr>        <tr>
          <td>Gloria</td>
          <td>Reeves</td>
          <td>67439</td>
          <td>10/18/1985</td>
          <td>4</td>
          <td>0.1</td>
          <td>$50</td>
        </tr>        <tr>
          <td>Gloria</td>
          <td>Reeves</td>
          <td>67439</td>
          <td>10/18/1985</td>
          <td>4</td>
          <td>0.1</td>
          <td>$50</td>
        </tr>        <tr>
          <td>Gloria</td>
          <td>Reeves</td>
          <td>67439</td>
          <td>10/18/1985</td>
          <td>4</td>
          <td>0.1</td>
          <td>$50</td>
        </tr>        <tr>
          <td>Gloria</td>
          <td>Reeves</td>
          <td>67439</td>
          <td>10/18/1985</td>
          <td>4</td>
          <td>0.1</td>
          <td>$50</td>
        </tr>        <tr>
          <td>Gloria</td>
          <td>Reeves</td>
          <td>67439</td>
          <td>10/18/1985</td>
          <td>4</td>
          <td>0.1</td>
          <td>$50</td>
        </tr>        <tr>
          <td>Gloria</td>
          <td>Reeves</td>
          <td>67439</td>
          <td>10/18/1985</td>
          <td>4</td>
          <td>0.1</td>
          <td>$50</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Table extends Vue {}
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

.table {
	width: 100%;
	margin-bottom: 20px;
	border: 1px solid #dddddd;
	border-collapse: collapse; 
  font-size: 22px;
}

.table th {
	font-weight: bold;
	padding: 15px;
	background: #efefef;
	border: 1px solid #dddddd;
}

.table td {
	border: 1px solid #dddddd;
	padding: 15px;
}
</style>
