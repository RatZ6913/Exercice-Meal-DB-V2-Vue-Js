<template>
    <HeaderView @navigate="pageNavigate" :page="state.page" />
    <main>
      <aside v-if="state.page !== 'Meals'">
        <section id="searchContainer">
          <SearchMeals />
        </section>
      </aside>
      <section id="mainContent">
        <Component :is="pages[state.page]"/> 
      </section>
    </main>
    <FooterView />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { Component as C } from 'vue';
import HeaderView from './views/HeaderView.vue';
import FooterView from './views/FooterView.vue';
import HomeView from './views/HomeView.vue';
import SearchMeals from './components/SearchMeals.vue';
import Categories from './components/Categories.vue';
import Meals from './components/Meals.vue';
import Zones from './components/Zones.vue';
import type { Page } from './interfaces/type';

const state = reactive<{
  page: Page;
}>({
  page: 'HomeView'
})

const pages: {[s: string]: C;} = {
  HomeView,
  Categories,
  Zones,
  Meals
}

function pageNavigate(page: Page): void {
  state.page = page;
}

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
 