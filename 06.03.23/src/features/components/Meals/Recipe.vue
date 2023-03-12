<template>

  <h1>AFFICHAGE RECIPE</h1>

  {{ attrs.state }}
</template>





<script setup lang="ts">
import { useAttrs } from 'vue';


const props = defineProps<{
  instructions?: string;
}>();

const instructions = props.instructions!;

const attrs = useAttrs();



</script>




<style lang="scss" scoped></style>