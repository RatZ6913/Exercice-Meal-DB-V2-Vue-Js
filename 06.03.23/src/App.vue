<template>
  <body>
    <HeaderView />
    <main>
      <aside>
        <section id="searchContainer">
          <SearchMeals />
        </section>
      </aside>
      <section id="mainContent">
        <Component :is="components[selectedComponent]" /> 
        <!-- <HomeView />
        <Categories />
        <Zones />
        <Meals /> -->
      </section>
    </main>
    <FooterView />
  </body>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Component as C } from 'vue';
import HeaderView from './views/HeaderView.vue';
import FooterView from './views/FooterView.vue';
import HomeView from './views/HomeView.vue';
import SearchMeals from './components/SearchMeals.vue';
import Categories from './components/Categories.vue';
import Meals from './components/Meals.vue';
import Zones from './components/Zones.vue';

const components : { [s: string]: C } = {
  HomeView,
  Categories,
  Zones,
  Meals
}

const selectedComponent = ref('HomeView');
console.log(components);


// const urlPathName = window.location.pathname;

// const checkPathUrl = ref(urlPathName);

// function checkUrlPath(urlPathName: string): boolean {
//   if(urlPathName) {
//     return true;
//   } else {
//     return false;
//   }
// }


</script>

<style lang="scss">
@import './assets/scss/main.scss';

#searchContainer {
  background-color: rgba(255, 255, 255, 0.456);
}

#mainContent {
  width: 100%;
  display: flex;
}
</style>
