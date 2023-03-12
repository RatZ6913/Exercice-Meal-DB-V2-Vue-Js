<template>
  <button @click="emit('display', false)" class="btn btn-primary m-10">Retour vers les plats</button>
  <section id="meal-container">
    <h1>AFFICHAGE MEALINFOS ( peut etre une vue seulement à voir )</h1>
    <p>{{ nameMeal }}</p>

    <template v-for="getMeals in state.mealsInfo">
      <template v-for="meal in getMeals">
        <img v-if="meal.strMealThumb" :src="meal.strMealThumb" alt="">
        <!-- <video controls :src="meal.strYoutube"></video> -->
        <!-- <iframe :src="meal.strYoutube" frameborder="0" allowfullscreen></iframe> -->

        <div id="video-wrapper">
          <h2>Youtube Recipe</h2>
          <vue-plyr class="video-wrapper">
            <div data-plyr-provider="youtube" :data-plyr-embed-id="meal.strYoutube"></div>
          </vue-plyr>
        </div>

        <p>{{ meal }}</p>
      </template>
    </template>
    <Ingredients />
    <Recipe />
  </section>
</template>


<script setup lang="ts">
import Ingredients from '@/features/components/Meals/Ingredients.vue';
import Recipe from '@/features/components/Meals/Recipe.vue';
import { fetchMealsById } from '@/services/meals.service';
import { reactive } from 'vue';

interface MealInfo {
  strMeal: String;
  strMealThumb: Function;
  strYoutube: Function;
}

const state = reactive({
  mealsInfo: null as MealInfo | null
})

const props = defineProps<{
  display?: boolean;
  idMeal: Function;
}>();

const nameMeal = props.idMeal();

const getMealsById = async () => {
  state.mealsInfo = await fetchMealsById(nameMeal);
}

getMealsById();

const emit = defineEmits<{
  (e: 'display', value: boolean): void;
}>();

</script>


<style lang="scss" scoped>
#meal-container {
  background-color: var(--gray-2);

  h2 {
    color: var(--danger-2);
    text-align: center;
    font-weight: 700;
    margin-bottom: 10px;
    text-decoration: underline;
  }
  #video-wrapper {
    padding: 20px;
    align-self: center;
    margin: auto;
    width: 50%;
    background-color: var(--white);
    border: 2px solid brown;
    border-radius: 15px;
    box-shadow: 2px 3px 2px 2px var(--gray-3);
  }
}
</style>