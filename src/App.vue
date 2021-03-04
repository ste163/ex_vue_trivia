<template>
  <section id="app">
    <heading
      :isDifficultyEasyActive="isDifficultyEasyActive"
      :isDifficultyMediumActive="isDifficultyMediumActive"
      :isDifficultyHardActive="isDifficultyHardActive"
      @select-difficulty="handleSelectedDifficulty"
    />
    <transition-group class="trivia__container" name="list">
      <trivia-card
        class="list-item"
        v-for="item in filterTriviaItems"
        :item="item"
        :key="item.question"
        @reveal-answer="handleReveal"
      />
    </transition-group>
  </section>
</template>

<script>
import data from "./trivia";
import Heading from "./components/Heading.vue";
import TriviaCard from "./components/TriviaCard.vue";

export default {
  data() {
    return {
      triviaItems: [...data],
      isDifficultyEasyActive: false,
      isDifficultyMediumActive: false,
      isDifficultyHardActive: false
    };
  },
  components: {
    Heading,
    TriviaCard
  },
  methods: {
    handleSelectedDifficulty(selected) {
      // Change active difficulty state by button selection
      switch (selected) {
        case "reset":
          this.isDifficultyEasyActive = false;
          this.isDifficultyMediumActive = false;
          this.isDifficultyHardActive = false;
          this.triviaItems.forEach(t => (t.answerShown = false));
          break;
        case "easy":
          this.isDifficultyEasyActive = !this.isDifficultyEasyActive;
          break;
        case "medium":
          this.isDifficultyMediumActive = !this.isDifficultyMediumActive;
          break;
        case "hard":
          this.isDifficultyHardActive = !this.isDifficultyHardActive;
          break;
      }
      // Filter trivia items by currently active selections
      this.filterTriviaItems();
    },
    handleReveal(item) {
      item.answerShown = true;
    }
  },
  computed: {
    filterTriviaItems() {
      const holdingArray = this.triviaItems.filter(item => {
        // Check if Easy is selected, if this item is also easy, add to holding array
        if ((item.difficulty === "easy") & this.isDifficultyEasyActive) {
          return item;
        }
        if ((item.difficulty === "medium") & this.isDifficultyMediumActive) {
          return item;
        }
        if ((item.difficulty === "hard") & this.isDifficultyHardActive) {
          return item;
        }
      });
      return holdingArray;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&display=swap");

:root {
  /* Colors */
  --black: #161419;
  --lightestBlack: #19171c;
  --lighterBlack: #25222a;
  --lightBlack: #2d2933;

  --fontWhite: #e6e6e6;
  --yellow: #e5e575;

  /* Shadows */
  --shadow: -4px -4px 9px #201e24, 4px 4px 9px rgba(0, 0, 0, 0.1);
  --shadowInset: inset -4px -4px 9px #262527,
    inset 4px 4px 9px rgba(0, 0, 0, 0.5);

  --themeTransition: 0.3s;
}

body {
  display: flex;
  align-content: center;
  justify-content: space-around;

  color: var(--fontWhite);
  letter-spacing: 0.1em;

  margin: 0;
  padding: 0;
  background-color: var(--black);

  transition: background-color var(--themeTransition);
}

p {
  font-family: "Comfortaa", sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5em;
}

button {
  font-family: "Comfortaa", sans-serif;
  font-weight: 900;
  font-size: 0.8em;
  color: var(--fontWhite);

  background-color: var(--lighterBlack);

  margin-bottom: 0.5em;
  padding: 0.5em 1em;

  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 30px;

  box-shadow: var(--shadow);

  transition: background-color var(--themeTransition),
    box-shadow var(--themeTransition);
}

button:hover {
  background-color: var(--lightBlack);
}

.button__active:hover {
  background-color: var(--lighterBlack);
  cursor: auto;
}

.button__active__resetable:hover {
  cursor: pointer;
}

button:active,
.button__active,
.button__active__resetable {
  background-color: var(--lighterBlack);
  box-shadow: var(--shadowInset);
  transform: translateY(1.2px);
}

.trivia__container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.card {
  margin: 1em;
  border-radius: 20px;

  background-color: var(--lightestBlack);
  box-shadow: var(--shadow);

  transition: background-color var(--themeTransition),
    box-shadow var(--themeTransition);
}

/* transition-group animations */
.list {
  display: flex;
  backface-visibility: hidden;
  z-index: 1;
}

.list-move {
  transition: all 0.5s;
}

.list-enter-active {
  transition: all 0.3s ease-out;
}

.list-enter {
  transform: translateY(-20px);
  opacity: 0;
}

.list-leave-active {
  transition: all 0.5s ease-out;
  transform: translateY(50%);
  position: absolute;
  opacity: 0;
  z-index: 0;
}
</style>
