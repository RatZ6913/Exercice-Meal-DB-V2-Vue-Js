<template>
  <section id="container" class="mt-20">
    <h2>Voici les différents catégories : </h2>
    <p>Choisissez le type de plat qui vous convient</p>

    <div id="box-cat">
      <template v-for="category in state.category.meals">
          <button class="btn-cat m-10 btn btn-primary">{{ category.strCategory }}</button>
      </template>
    </div>

  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { fetchMealsCategory } from '../services/meals.service';

const state = reactive<any>({
  category: []
})

const fetchCat = (async () => {
  try {
    state.category = await fetchMealsCategory();
  } catch (error) {
    console.log(error);
  }
  return;
})()


</script>


<style lang="scss" scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-1);
  width: 100%;

  h2 {
    color: brown;
    font-size: 24px;
  }
}

#box-cat {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  background-color: var(--gray-2);

  .btn-cat {
    width: 250px;
    box-shadow: 1px 2px 1px var(--gray-1);
  }
}
</style>
