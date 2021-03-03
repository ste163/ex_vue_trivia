<template>
  <section class="trivia__card">
    <p class="card__difficulty">{{ item.difficulty }}</p>
    <p class="card__question">{{ item.question }}</p>
  </section>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.trivia__card {
  background-color: var(--lightBlack);
  border-radius: 20px;
  margin: 1em;
  padding: 1em 2em;
  box-shadow: var(--shadow);
  font-size: 1.5em;
  flex-basis: 20%;
}
</style>
