<template>
  <div>
      <img class="header-img" src="../src/assets/header.jpg">
      <div class="header-block">
        <h1 class="mt-2" align=center>Разделы сайта</h1>
        <ul class="main-menu">
          <li><router-link to="/"><img src="../src/assets/main.png"><span>Главная</span></router-link></li>
          <li><router-link to="/News"><img src="../src/assets/news.png"><span>Новости</span></router-link></li>
          <li><router-link to="/Galery"><img src="../src/assets/galery.png"><span>Галерея</span></router-link></li>
          <li><router-link to="/Table"><img src="../src/assets/table.png"><span>Таблица</span></router-link></li>
          <li><router-link to="/Contact"><img src="../src/assets/help.png"><span>Контакты</span></router-link></li>
          <li><router-link to="/Faq"><img src="../src/assets/faq.png"><span>FAQ</span></router-link></li>
        </ul>
      </div>
      
      <router-view />
  </div>
</template>



<style>
body
{
  padding: 0;
  margin: 0;
  background-color: #f7f7f7;
}

.header-img
{
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  height: 300px;
  width: 100%;
}

.header-block
{
  position: relative;
  width: 1200px;
  height: 500px;
  z-index: 3;
  margin: 150px auto 0 auto;
  background-color: rgb(226, 237, 226);
  border-radius: 20px;
}

.main-menu li{
  list-style: none;
  line-height: 2;
}

.main-menu li span{
  margin-left: 40px;
}

.main-menu li img{
  position: absolute;
  height: 25px;
  margin-top: 12px;
}

.main-menu li a{
  padding: 5px 10px;
  text-decoration: none;
  font-size: 25px;
  color: black;
}
</style>
