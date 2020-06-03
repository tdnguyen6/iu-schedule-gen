<template>
  <div class="my-navbar">
    <div class="main-nav-container">
      <router-link to="/about" id="logo">
        <!-- <img alt="Vue logo" src="@/views/assets/images/logo.png" /> -->
        IU SCHEDULES GENERATOR
      </router-link>
      <div class="buttons-container">
        <ThemeToggle />
        <button id="login" class="profile-btn">Sign in</button>
        <button id="signup" class="profile-btn">Sign up</button>
        <button class="hamburger-menu" @click="clickHamburgerMenu">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>
    </div>
    <transition name="menu-click">
      <div class="nav-link-container" v-if="hamburgerMenuClicked">
        <div class="nav-link" @click="activate">
          <router-link to="/">Home</router-link>
        </div>
        <div class="nav-link" @click="activate">
          <router-link to="/about">About</router-link>
        </div>
        <div class="nav-link" @click="activate">
          <router-link to="/courses">Courses</router-link>
        </div>
        <div class="nav-link" @click="activate">
          <router-link to="/generator">Generator</router-link>
        </div>
        <div class="nav-link" @click="activate">
          <router-link to="/profiles">Profiles</router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ThemeToggle from "./ThemeToggle.vue";

@Component({
  components: {
    ThemeToggle
  }
})
export default class Navbar extends Vue {
  private hamburgerMenuClicked: boolean;

  constructor() {
    super();
    if (sessionStorage.getItem("hamburgerMenuClicked") != null)
      this.hamburgerMenuClicked = /true/i.test(
        sessionStorage.getItem("hamburgerMenuClicked") + ""
      );
    else {
      this.hamburgerMenuClicked = false;
    }
  }

  clickHamburgerMenu() {
    this.hamburgerMenuClicked = !this.hamburgerMenuClicked;
    sessionStorage.setItem(
      "hamburgerMenuClicked",
      this.hamburgerMenuClicked + ""
    );
  }

  activate() {
    const activeLinks = document.querySelectorAll(".router-link-exact-active");
    activeLinks.forEach(l => {
      l.classList.add("active");
    });
  }
}
</script>

<style lang="scss" scoped>
.my-navbar {
  font-weight: 700;
  background: var(--nav-bg);
  .main-nav-container {
    // position: relative;
    // z-index: 4;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    a {
      text-decoration: none;
    }
    img {
      width: 25px;
    }
    #logo {
      padding: 0.5rem;
      min-width: 225px;
      text-align: center;
    }

    .buttons-container {
      display: flex;
      padding: 0.5rem 0;
      align-items: center;
      justify-content: space-evenly;
      .profile-btn {
        border: 1px solid var(--text-color);
        border-radius: 0.5rem;
        font: inherit;
        padding: 0.5rem 1rem;
        margin: 0 0.5rem;
        font-size: 0.75rem;
        cursor: pointer;
      }
      #login {
        background: var(--login-btn-bg);
        color: var(--text-color-dark);
        &:hover {
          background: var(--login-btn-hover);
        }
      }
      #signup {
        background: var(--signup-btn-bg);
        color: var(--text-color-dark);
        &:hover {
          background: var(--signup-btn-hover);
        }
      }
      .hamburger-menu {
        font-size: 1.5rem;
        margin: 0 0.5rem;
        background: transparent;
        border: none;
        cursor: pointer;
        height: 100%;
      }
    }
  }
  .nav-link-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: var(--hamburger-menu-bg);
    a {
      text-decoration: none;
      display: block;
      padding: 1rem 0;
    }
    text-align: center;
    .nav-link {
      border-bottom: 2px solid transparent;
      width: 100%;
      &:hover,
      .active {
        background: var(--nav-link-hover);
        border-bottom: 2px solid var(--nav-link-hover-border-bottom);
      }
    }
  }
  .menu-click-enter-active,
  .menu-click-leave-active {
    transition: all 0.5s ease-in-out;
  }
  .menu-click-enter,
  .menu-click-leave-to {
    transform: translateX(100vw);
  }
}
</style>
