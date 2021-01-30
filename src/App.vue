<template>
  <!-- eslint-disable max-len -->
  <div id="app" class="d-flex column space-between">
    <div class="nav__and__views">
      <div class="nav">
        <div class="nav__container container d-flex row align-center space-between">
          <div class="nav__container__left d-flex row align-center space-between ">
            <img src="./assets/logoIcons/logo-museum 2.svg">
            <router-link class="h4" to="/">Каталог</router-link>
            <router-link class="h4" to="/about">Доставка</router-link>
            <router-link class="h4" to="/about">Оплата</router-link>
            <router-link class="h4" to="/about">Контакты</router-link>
            <router-link class="h4" to="/about">О галерее</router-link>
          </div>
          <div class="nav__container__right d-flex row align-center space-between">
            <div class="nav__container__right__inner d-flex row align-center space-around">
              <div class="nav__container__right__inner__form h6 text-left">
                Поиск по названию картины
              </div>
              <div class="nav__container__right__inner__find h4">
                Найти
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="views">
        <div class="views__container container">
          <router-view/>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer__nav nav">
        <div class="nav__container container d-flex row align-center space-between">
          <div class="nav__container__left d-flex row align-center space-between ">
            <img src="./assets/logoIcons/logo-museum-next.svg">
            <router-link class="h4" to="/">Каталог</router-link>
            <router-link class="h4" to="/about">Доставка</router-link>
            <router-link class="h4" to="/about">Оплата</router-link>
            <router-link class="h4" to="/about">Контакты</router-link>
            <router-link class="h4" to="/about">О галерее</router-link>
          </div>
          <div class="nav__container__right footer__phone__and__address d-flex row align-center space-between">
            <div class="nav__container__right__inner w100 n-brd d-flex row align-center space-between">
              <div class="nav__container__right__inner__phone h5 text-left  d-flex align-center">
                <img class="nav__container__right__inner__img" src="./assets/logoIcons/phone.svg">
                +7 (495) 555-55-55
              </div>
              <div  class="nav__container__right__inner__address h5 d-flex align-center">
                <img class="nav__container__right__inner__img" src="./assets/logoIcons/geo.svg">
                г. Москва, ул. Расплетина, 24
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Merriweather', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F6F3F3;
  height: 100vh;
}

.nav {

  border-bottom: 1px solid #E1E1E1;
  height: 95px;
  padding: 0px;
  margin: 0px;

  a {
    color: #2c3e50;
  }
}

.nav__container {
  height: 100%;
}

.nav__container__left {
  width: 50.6%;
}

.nav__container__right__inner {
  border: 1px solid #E1E1E1;
  height: 48px;
}

.nav__container__right__inner__form {
  width: 276px;
  color: #9F9F9F;
  margin-left: 16px;
}

.nav__container__right__inner__find {
  color: white;
  padding-left: 36px;
  padding-right: 36px;
  padding-top: 13px;
  font-weight: bold;
  padding-bottom: 14px;
  background: #403432;
}

.footer {
  background-color: #ECEAEA;
  height: 93px;
  a{
    color: #555555;
  }
}
.footer__phone__and__address{
  width: 446px;
}
.nav__container__right__inner__img{
  margin-right: 8px;
}

.h1 {
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
}

.h2 {
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
}

.h3 {
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
}

.h4 {
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
}

.h5 {
  font-size: 14px;
  font-weight: normal;
  line-height: 21px;
}

.h6 {
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
}

.w100 {
  width: 100%;
}

.w50 {
  width: 50%;
}

.w30 {
  width: 30%;
}

.container {
  position: relative;
  display: block;
  width: 1216px;
  margin: auto;

}

.mt-4 {
  margin-top: 46px;
}

.mb-2 {
  margin-bottom: 39px;
}

.pb-2 {
  padding-bottom: 24px;
}

.d-flex {
  display: flex;
}

.row {
  flex-direction: row;
}

.column {
  flex-direction: column;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.align-center {
  align-items: center;
}

.space-around {
  justify-content: space-around;
}

.space-between {
  justify-content: space-between;
}
.n-brd{
  border: none!important;
}

</style>
