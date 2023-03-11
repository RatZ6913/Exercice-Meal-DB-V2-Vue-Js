<template>
  <section id="zone" class="mt-20">
    <h2>Voici les plats du pays :
      <Transition appear name="country">
        <span class="country">{{ state.stateZones.nameZone }}</span>
      </Transition>
    </h2>
    <p></p>
  </section>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue';

const stateZones = inject('statezone');

const state = reactive<any>({
  meals: [],
  stateZones: stateZones
})

console.log(stateZones);



</script>

<style lang="scss" scoped>

.country {
  color: var(--primary-2);
}

</style>