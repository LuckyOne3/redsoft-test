<template>
  <!-- eslint-disable max-len -->
  <div id="app" class="d-flex column space-between">
    <div class="nav__and__views">
      <div class="nav">
        <div class="nav__container container d-flex row align-center space-between">
          <div class="nav__container__left d-flex row align-center space-between ">
            <img src="./assets/logoIcons/logo-museum 2.svg">
            <router-link class="h5" to="/">Каталог</router-link>
            <router-link class="h5" to="/about">Доставка</router-link>
            <router-link class="h5" to="/about">Оплата</router-link>
            <router-link class="h5" to="/about">Контакты</router-link>
            <router-link class="h5" to="/about">О галерее</router-link>
          </div>
          <div class="nav__container__right d-flex row align-center space-between">
            <div class="nav__container__right__inner d-flex row align-center space-around">

                <input class="nav__container__right__inner__form h6 text-left n-brd" type="text" placeholder="Поиск по названию картины">

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
            <router-link class="h5" to="/">Каталог</router-link>
            <router-link class="h5" to="/about">Доставка</router-link>
            <router-link class="h5" to="/about">Оплата</router-link>
            <router-link class="h5" to="/about">Контакты</router-link>
            <router-link class="h5" to="/about">О галерее</router-link>
          </div>
          <div class="nav__container__right footer__phone__and__address d-flex row align-center space-between">
            <div class="nav__container__right__inner w100 n-brd d-flex row align-center space-between">
              <div class="nav__container__right__inner__phone h5 text-left  d-flex align-center">
                <img class="nav__container__right__inner__img" src="./assets/logoIcons/phone.svg">
                +7 (495) 555-55-55
              </div>
              <div class="nav__container__right__inner__address h5 d-flex align-center">
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

// navbar
.nav {

  border-bottom: 1px solid #E1E1E1;
  height: 95px;
  padding: 0px;
  margin: 0px;

  a {
    color: #2c3e50;
  }

  &__container {
    height: 100%;

    &__left {
      width: 50.6%;
    }

    &__right {
      &__inner {
        border: 1px solid #E1E1E1;
        height: 48px;

        &__img {
          margin-right: 8px;
        }

        &__form {
          width: 277px;
          margin-left: 13px;
          background-color: inherit;
          font-family: 'Merriweather', serif;
          &::placeholder {
            text-align: left;
            color: #9F9F9F;
            opacity: 1; /* Firefox */
            font-size: 14px;
            font-weight: 200;
            line-height: 21px;
            font-family: 'Merriweather', serif;
            letter-spacing: 0.2px;
          }
        }

        &__find {
          color: white;
          padding-left: 36px;
          padding-right: 36px;
          padding-top: 13px;
          font-weight: 200!important;
          padding-bottom: 14px;
          background: #403432;
        }
      }
    }
  }
}

// footer


.footer {
  background-color: #ECEAEA;
  height: 93px;


  &__phone__and__address {
    width: 446px;
  }

  a {
    color: #555555;
  }
}


</style>
