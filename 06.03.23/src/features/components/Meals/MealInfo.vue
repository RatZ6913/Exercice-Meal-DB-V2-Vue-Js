<template>
  <button @click="emit('display', false)" class="btn btn-primary m-10">Retour vers les plats</button>
  <section id="meal-container">
    <template v-for="getMeals in state.mealsInfo">
      <template v-for="meal in getMeals">

        <div id="box-main">
          <h2>Fiche technique de :<br> <span>{{ meal.strMeal }}</span></h2>
          <img v-if="meal.strMealThumb" :src="meal.strMealThumb" :alt="`image de ${meal.strMeal}`">
          <p>{{ meal.strIngredient1 }}</p>

        </div>

        <div id="video-wrapper">
          <h3>Youtube Recipe</h3>
          <vue-plyr class="video-wrapper">
            <div data-plyr-provider="youtube" :data-plyr-embed-id="meal.strYoutube"></div>
          </vue-plyr>
        </div>

        <Ingredients />
        <Recipe :instructions = meal.strInstructions />

      </template>
    </template>
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
  strYoutube: string;
}

const state = reactive({
  mealsInfo: null as MealInfo | null
})

const props = defineProps<{
  display?: boolean;
  idMeal: Function;
}>();

const idMeal = props.idMeal();

const getMealsById = async () => {
  state.mealsInfo = await fetchMealsById(idMeal);
}

getMealsById();

const emit = defineEmits<{
  (e: 'display', value: boolean): void;
}>();

</script>

<style lang="scss" scoped>
#meal-container {
  background-color: var(--gray-2);

  #box-main {
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    width: 20%;
    height: 20%;

    h2 {
      color: var(--gray-3);
      text-align: center;
      margin: 20px auto;

      span {
        color: var(--primary-1);
        font-weight: 900;
      }
    }

    img {
      padding: 20px;
      background-color: white;
    }
  }

  #video-wrapper {
    padding: 20px;
    align-self: center;
    margin: auto;
    width: 50%;
    background-color: var(--white);
    border: 2px solid brown;
    border-radius: 15px;
    box-shadow: 2px 3px 2px 0px var(--gray-3);

    h3 {
      color: var(--danger-2);
      text-align: center;
      font-weight: 700;
      margin-bottom: 10px;
      text-decoration: underline;
    }
  }
}
</style>