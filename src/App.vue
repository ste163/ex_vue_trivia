<template>
  <section id="app">
    <heading />
    <!-- List of all the items -->
    <template v-for="item in triviaItems">
      <trivia-card :key="item.question" />
    </template>
    <!-- Play around with animating between list states -->
  </section>
</template>

<script>
import data from "./trivia";
import Heading from "./components/Heading.vue";
import TriviaCard from "./components/TriviaCard.vue";

export default {
  data() {
    return {
      triviaItems: data,
    };
  },
  components: {
    Heading,
    TriviaCard,
  },
};
</script>

<style></style>
