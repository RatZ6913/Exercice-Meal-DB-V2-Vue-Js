<template>
  <section id="container" class="mt-20">
    <h1>AFFICHAGE POUR MEALS.VUE</h1>
    <p>Quelles plats vous intéresse ? Faîtes votre choix</p>

    <section id="box-cat">
      <template v-for="letter in arrLetters">
        <div class="box-by-letters m-20 d-flex">
          <h3>{{ letter }}</h3>
          <ul>
            <template v-for="mealsByLetter in state.mealsByLetter.meals">
              <template v-if="mealsByLetter.strMeal.charAt(0).toLowerCase() === letter">
                <li>{{ mealsByLetter.strMeal }}</li>
              </template>
            </template>
          </ul>
        </div>
      </template>
    </section>
  </section>
</template>


<script setup lang="ts">
import { reactive } from 'vue';
import { fetchMealsByLetters } from '../services/meals.service';

const arrLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const state = reactive<any>({
  mealsByLetter: [],
  letters: arrLetters
})

const fetchMealsByLetter = (async () => {
  try {
    state.mealsByLetter = await fetchMealsByLetters('a');
  } catch (error) {
    console.log(error);
  }
  return;
})();

</script>


<style lang="scss" scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-1);
  width: 100%;

  h1 {
    color: brown;
  }

  .box-by-letters {
    border: var(--border)
  }
}
</style>