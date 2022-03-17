<template>
  <div id="background">
    <div id="title-bar">
      <div id="drag-bar"></div>
      <div class="close-btn" @click="closeWindow">
        <fa-icon icon="xmark" />
      </div>
    </div>
    <router-view />
  </div>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
</template>

<script>
import { ipcRenderer } from "electron";

export default {
  methods: {
    closeWindow() {
      ipcRenderer.send('close')
    }
  },
};
</script>

<style lang="scss">
$bRadius: 8px;

#background {
  background: #33333344;
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid gray;
  border-radius: $bRadius;

  user-select: none;
}

#title-bar {
  width: 100%;
  height: 20px;
  background: #00000044;
  border-top-left-radius: $bRadius;
  border-top-right-radius: $bRadius;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #drag-bar {
    -webkit-app-region: drag;
    height: 100%;
    width: calc(100% - 20px);
  }

  .close-btn {
    height: 20px;
    width: 20px;
    color: #efefef;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #ddd;
      animation: spin 0.5s ease-in-out;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
