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
            <div class="picture__body__buy button__buy button__buy_in_cart h5 d-flex align-center"
                 v-if="picture1 === 'done'">
              В корзине

            </div>
            <div class="picture__body__buy button__buy h5 d-flex align-center" v-else-if="picture1 !== 'sending' "
                 v-on:click="clicked(1)">
              Купить
            </div>

            <div class="loader" v-else>
              <svg viewBox="0 0 80 80">
                <circle id="test" cx="40" cy="40" r="32"></circle>
              </svg>
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
            <div class="picture__body__buy button__buy button__buy_in_cart h5 d-flex align-center"
                 v-if="picture2 === 'done'">
              В корзине

            </div>
            <div class="picture__body__buy button__buy h5 d-flex align-center" v-else-if="picture2 !== 'sending' "
                 v-on:click="clicked(2)">
              Купить
            </div>

            <div class="loader" v-else>
              <svg viewBox="0 0 80 80">
                <circle id="test" cx="40" cy="40" r="32"></circle>
              </svg>
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
            <div class="picture__body__prices d-flex column space-between text-left">
              <div class="picture__body__old__price h6 ">
                6 000 000 $
              </div>
              <div class="picture__body__price h3 ">
                5 000 000 $
              </div>
            </div>
            <div class="picture__body__buy button__buy button__buy_in_cart h5 d-flex align-center">
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
              <div class="picture__body__price picture__body__price_bought h3 ">

                Продана на аукционе
              </div>
            </div>
            <div class="picture__body__buy button__buy button__buy_bought h5 d-flex align-center">
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
  computed: {
    picture1() {
      return this.$store.getters.getTodoById(1);
    },
    picture2() {
      return this.$store.getters.getTodoById(2);
    },
  },
  methods: {
    clicked(id: number) {
      this.$store.dispatch('ADD_PICTURES', id);
    },
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

  &__bought {
    opacity: 0.5;
  }
}

.picture__body {
  &__img img {
    margin-bottom: 0px;
    padding-bottom: 0px;
    border-bottom: 1px solid #E1E1E1;
  }

  &__title {
    margin-top: 20px;
  }

  &__author {
    margin-top: 3px;
  }

  &__prices {
    margin-left: 12px;
  }

  &__price {
    color: #343030;

    &__bought {
      text-align: left;
      width: 100%;
    }
  }

  &__old__price {
    color: #A0A0A0;
    text-decoration-line: line-through;
  }

  &__buy__and__price {
    margin-top: 23px;
  }

  &__buy {
    color: white;
    padding-left: 31px;
    padding-right: 31px;
    padding-top: 13px;
    margin-right: 12px;
    font-weight: bold;
    padding-bottom: 14px;
    background: #403432;
  }

}

.picture__body__title, .picture__body__author {
  margin-left: 23px;
}


</style>
