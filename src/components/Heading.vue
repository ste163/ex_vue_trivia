<template>
  <header>
    <h1>Star Wars</h1>
    <h2>Trivia</h2>
    <div class="controls">
      <section class="card card__difficulty">
        <h3>Choose side</h3>
        <div class="buttons">
          <button
            :class="{ button__active: this.currentTheme === 'light' }"
            @click="handleThemeClick"
            value="light"
          >
            Light
          </button>
          <button
            :class="{ button__active: this.currentTheme === 'dark' }"
            @click="handleThemeClick"
            value="dark"
          >
            Dark
          </button>
        </div>
      </section>
      <section class="card card__difficulty">
        <h3>Select difficulty</h3>
        <div class="buttons">
          <button>Reset</button>
          <button :class="{ button__active: this.difficultyEasy }">Easy</button>
          <button :class="{ button__active: this.difficultyMedium }">
            Medium
          </button>
          <button :class="{ button__active: this.difficultyHard }">Hard</button>
        </div>
      </section>
    </div>
  </header>
</template>

<script>
import SetColorTheme from "../utils/SetColorTheme";

export default {
  data() {
    return {
      currentTheme: "dark",
      difficultyEasy: false,
      difficultyMedium: false,
      difficultyHard: false
    };
  },
  methods: {
    handleThemeClick(e) {
      const clicked = e.currentTarget.value;
      clicked === "light"
        ? (this.currentTheme = "light")
        : (this.currentTheme = "dark");
      SetColorTheme(this.currentTheme);
    }
    // setDifficulty(e) {
    //   // Set difficulty active for selected button
    //  Then emit signal for which was set
    // }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bowlby+One+SC&display=swap");

header {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  font-family: "Bowlby One SC", sans-serif;
  color: var(--yellow);
  margin-bottom: 5em;

  transition: color var(--themeTransition);
}

.controls {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

h1 {
  font-size: 4em;
  margin-bottom: 0;
  letter-spacing: 0.3em;
}

h2 {
  font-size: 2em;
  margin-top: 0;
  letter-spacing: 0.5em;
}

h3 {
  font-family: "Comfortaa", sans-serif;
  font-weight: 900;
  font-size: 1.3em;
  margin: 0;
  margin-bottom: 1em;
}

button {
  font-size: 1.2em;
  margin: 0.5em 1em;
}

.buttons {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.card__difficulty {
  display: flex;
  flex-flow: column wrap;
  padding: 1em;
}
</style>
