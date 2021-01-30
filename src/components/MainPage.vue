<template>
  <div class="pictures">
    <div class="pictures__title h1 text-left mt-4 mb-2">
      Картины эпохи Возрождения
    </div>
    <div class="pictures__inner d-flex row">
      <div class="picture pb-2">
        <div class="picture__body d-flex column">
          <div class="picture__body__img">
            <img src="../assets/pictures/venera.svg">
          </div>
          <div class="picture__body__title h2 text-left">
            «Рождение Венеры»
          </div>
          <div class="picture__body__author h2 text-left">
            Сандро Боттичелли
          </div>
          <div class="picture__body__buy__and__price d-flex row align-center space-around">
            <div class="picture__body__prices d-flex column space-between  text-left">
              <div class="picture__body__old__price h6 ">
                2 000 000 $
              </div>
              <div class="picture__body__price h3 ">
                1 000 000 $
              </div>
            </div>
            <div class="picture__body__buy button_buy h5 d-flex align-center">
              Купить
            </div>
          </div>
        </div>
      </div>
      <div class="picture pb-2">
        <div class="picture__body d-flex column">
          <div class="picture__body__img">
            <img src="../assets/pictures/ve4er.svg">
          </div>
          <div class="picture__body__title h2 text-left">
            «Тайная вечеря»
          </div>
          <div class="picture__body__author h2 text-left">
            Леонардо да Винчи
          </div>
          <div class="picture__body__buy__and__price d-flex row align-center space-around">
            <div class="picture__body__prices d-flex column space-between  text-left">
              <div class="picture__body__old__price h6 ">
              </div>
              <div class="picture__body__price h3 ">
                3 000 000 $
              </div>
            </div>
            <div class="picture__body__buy button_buy h5 d-flex align-center">
              Купить
            </div>
          </div>
        </div>
      </div>
      <div class="picture pb-2">
        <div class="picture__body d-flex column">
          <div class="picture__body__img">
            <img src="../assets/pictures/adam.svg">
          </div>
          <div class="picture__body__title h2 text-left">
            «Сотворение Адама»
          </div>
          <div class="picture__body__author h2 text-left">
            Микеланджело
          </div>
          <div class="picture__body__buy__and__price d-flex row align-center space-around">
            <div class="picture__body__prices d-flex column space-between  text-left">
              <div class="picture__body__old__price h6 ">
                6 000 000 $
              </div>
              <div class="picture__body__price h3 ">
                5 000 000 $
              </div>
            </div>
            <div class="picture__body__buy button_buy button_buy_in_cart h5 d-flex align-center">
              В корзине
            </div>
          </div>
        </div>
      </div>
      <div class="picture picture__bought pb-2">
        <div class="picture__body d-flex column">
          <div class="picture__body__img">
            <img src="../assets/pictures/anatomia.svg">
          </div>
          <div class="picture__body__title h2 text-left">
            «Урок анатомии»
          </div>
          <div class="picture__body__author h2 text-left">
            Рембрандт
          </div>
          <div class="picture__body__buy__and__price d-flex row align-center ">
            <div class="picture__body__prices d-flex column space-between  text-left">
              <div class="picture__body__old__price h6 ">

              </div>
              <div class="picture__body__price price__bought h3 ">
                Продана на аукционе
              </div>
            </div>
            <div class="picture__body__buy button_buy button_buy__bought h5 d-flex align-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'mainPage',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.picture {
  width: 280px;
  position: relative;
  border: 1px solid #E1E1E1;
  margin-right: 32px;

  &:last-child {
    margin-right: 0px;
  }
}

.picture__body__img img {
  margin-bottom: 0px;
  padding-bottom: 0px;
  border-bottom: 1px solid #E1E1E1;
}

.picture__body__title {
  margin-top: 20px;
}

.picture__body__author {
  margin-top: 3px;
}

.picture__body__title, .picture__body__author {
  margin-left: 23px;
}

.picture__body__prices {
  margin-left: 12px;
}

.picture__body__old__price {
  color: #A0A0A0;
  text-decoration-line: line-through;

}

.picture__body__price {
  color: #343030;
}

.picture__body__buy__and__price {
  margin-top: 23px;
}

.picture__body__buy {
  color: white;
  padding-left: 31px;
  padding-right: 31px;
  padding-top: 13px;
  margin-right: 12px;
  font-weight: bold;
  padding-bottom: 14px;
  background: #403432;
}
.button_buy_in_cart{
  background-color: #5B3A32;
  padding-left: 10px;
  padding-right: 11px;
  &:before{
    content: url('../assets/logoIcons/feather_check.svg');
    width: 13px;
    height: 9px;
    margin-right: 11px;
    margin-top: -12px;
  }
}
.button_buy__bought{
  display: none;
}
.price__bought{
  text-align: left;
  width: 100%;
}
.picture__bought{
  opacity: 0.5;
}

</style>
