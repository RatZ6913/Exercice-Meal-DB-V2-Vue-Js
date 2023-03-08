<template>
  <section id="container" class="mt-20 d-flex flex-column align-items-center">
    <Transition appear name="title">
      <h1>Bienvenue, sur <strong>Meals</strong></h1>
    </Transition>

    <Transition appear name="text">
      <p>Ici, vous trouveriez tous types de repas</p>
    </Transition>

    <Transition appear name="float">
      <div id="content" class="d-flex flex-column align-items-center justify-content-center">
        <p>Envie de découvrir de nouvelles saveurs ? </p>
        <p>Alors, venez visiter nos recettes !</p>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#container {
  background-color: var(--gray-1);
  width: 100%;

  h1 {
    color: var(--primary-1);
    font-size: 32px;
  }

  #content {
    background-image: url('@/assets/images/bg-image.jpg');
    background-size: cover;
    width: 50%;
    height: 50vh;
    box-shadow: 1px 2px 3px var(--primary-1);

    p {
      text-align: center;
      border: none;
      width: 80%;
      margin: 0;
      background-color: #ffffffd3;
      color: var(--gray-3);
      padding: 20px;
    }
  }

  .text-enter-from,
  .title-enter-from {
    translate: -10px;
    opacity: 0;
  }

  .float-enter-from {
    transform: translateX(-20%);
    opacity: 0;
  }

  .text-enter-to,
  .title-enter-to {
    translate: 0px;
    opacity: 1;
  }

  .float-enter-to {
    transform: translateX(0%);
  }

  .float-enter-active,
  .text-enter-active,
  .title-enter-active {
    transition: 2s;
  }

  .text-enter-active {
    transition-delay: 1.5s;
  }
  .float-enter-active {
    transition-delay: 2.5s;
  }
}
</style>