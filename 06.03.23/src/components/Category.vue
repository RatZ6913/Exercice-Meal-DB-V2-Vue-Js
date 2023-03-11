<template>
  <section id="category" class="mt-20">
    <template v-for="nameCat in state.meals">
      <h2>Voici la liste des plats de {{ state.stateDatas.nameCat }} :</h2>
      <template v-for="mealsData in nameCat">
        <div class="box-meals-cat">
          <img class="imgMeals" :src="mealsData.strMealThumb">
          <span class="mt-20">{{ mealsData.strMeal }}</span>
        </div>
      </template>
    </template>
  </section>
</template>

<script setup lang="ts">
import { inject, reactive, watch } from 'vue';
import { fetchByCategory } from '../services/meals.service';
import type { CategoriesInterface } from './Categories.vue';

const stateDatas = inject<CategoriesInterface>('state')!;

const state = reactive<any>({
  meals: [],
  stateDatas: stateDatas
})

watch(
  () => stateDatas.nameCat,
  async (newValue) => {
    state.meals = await fetchByCategory(newValue);
    state.random = true;
  }
);

</script>

<style lang="scss" scoped>
#category {
  display: flex;
  flex-wrap: wrap;

  h1 {
    color: brown;
  }

  h2 {
    width: 100%;
    text-align: center;
    color: var(--primary-2);
  }

  h3 {
    color: var(--gray-3);
  }

  .imgMeals {
    width: 250px;
    height: 250px;
  }

  .box-meals-cat {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 30%;
    margin: 20px auto;
    padding: 20px;
    background-color: var(--gray-2);
    color: var(--primary-1);
    font-weight: 700;
  }
}
</style>