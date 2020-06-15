<template>
  <div class="my-navbar">
    <Modal :control="control" />
    <div class="main-nav-container">
      <router-link to="/about" id="logo">
        IU SCHEDULES GENERATOR
      </router-link>
      <div class="buttons-container">
        <ThemeToggle />
        <button
          id="login"
          class="profile-btn"
          v-show="!isSignedIn()"
          @click="showSocialBtns()"
        >
          Sign in
        </button>
        <button
          id="signup"
          class="profile-btn"
          v-show="isSignedIn()"
          @click="signOut()"
        >
          Sign out
        </button>
        <button class="hamburger-menu" @click="clickHamburgerMenu">
          <font-awesome-icon
            :icon="['fas', 'bars']"
            v-if="routerLinks.length <= 0"
          />
          <font-awesome-icon :icon="['fas', 'times']" v-else />
        </button>
      </div>
    </div>
    <div class="nav-link-container">
      <transition-group name="menu-click" tag="ul">
        <li
          v-for="(link, index) in routerLinks"
          :key="link.id"
          :style="`--i: ${index}`"
          @click="activate"
        >
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ThemeToggle from "./ThemeToggle.vue";
import Modal from "@/views/components/auxiliaries/Modal.vue";
import { ModalControl } from "@/views/components/auxiliaries/Modal.vue";

@Component({
  components: {
    ThemeToggle,
    Modal
  }
})
export default class Navbar extends Vue {
  private navMenuIsOpen: boolean;
  private hamburgerMenuClicked = false;
  private control: ModalControl = {
    title: "",
    toggle: false,
    type: "",
    content: null
  };

  get routerLinks() {
    if (this.navMenuIsOpen || this.hamburgerMenuClicked) {
      return [
        {
          path: "/",
          name: "Home",
          id: 1
        },
        {
          path: "/about",
          name: "About",
          id: 2
        },
        {
          path: "/courses",
          name: "Courses",
          id: 3
        },
        {
          path: "/generator",
          name: "Generator",
          id: 4
        },
        {
          path: "/profiles",
          name: "Profiles",
          id: 5
        }
      ];
    }
    return [];
  }

  constructor() {
    super();
    if (sessionStorage.getItem("navMenuIsOpen") != null)
      this.navMenuIsOpen = /true/i.test(
        sessionStorage.getItem("navMenuIsOpen") + ""
      );
    else this.navMenuIsOpen = false;
  }

  clickHamburgerMenu() {
    this.navMenuIsOpen = !this.navMenuIsOpen;
    this.hamburgerMenuClicked = this.navMenuIsOpen;
    sessionStorage.setItem("navMenuIsOpen", this.navMenuIsOpen + "");
  }

  activate() {
    const activeLinks = document.querySelectorAll(".router-link-exact-active");
    activeLinks.forEach(l => {
      l.classList.add("active");
    });
  }

  isSignedIn() {
    return sessionStorage.getItem("credential") != null;
  }

  signOut() {
    // remove credential in session
    // clear cache
    // remove course list
    console.log("signedOut");
  }

  showSocialBtns() {
    this.control.toggle = true;
    this.control.type = "OAuthButtons";
  }
}
</script>

<style lang="scss" scoped>
.my-navbar {
  font-weight: 700;
  box-shadow: 0px 5px 5px var(--shadow);
  background: var(--nav-bg);
  .main-nav-container {
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
      background: var(--logo-text);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .buttons-container {
      display: flex;
      padding: 1rem 0;
      align-items: center;
      justify-content: space-evenly;
      .profile-btn {
        border: 1px dotted var(--text-color);
        box-shadow: 3px 3px 2px var(--shadow);
        font: inherit;
        padding: 0.5rem 1rem;
        margin: 0 0.5rem;
        font-size: 0.75rem;
        transition: 0.25s ease-out;
        cursor: pointer;
        &:hover {
          box-shadow: 6px 6px 4px var(--shadow);
        }
      }
      #login {
        background: var(--login-btn-bg);
        &:hover {
          background: var(--login-btn-hover);
        }
      }
      #signup {
        background: var(--signup-btn-bg);
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
    text-align: center;
    ul {
      padding: 0;
      margin: 0;
      li {
        list-style-type: none;
        border-top: 1px dashed var(--shadow);
        border-bottom: 3px solid transparent;
        &:hover,
        .active {
          background: var(--nav-link-hover);
          border-bottom: 3px solid var(--nav-link-hover-border-bottom);
        }
        a {
          text-decoration: none;
          display: block;
          padding: 1rem 0;
        }
      }
    }
  }
  .menu-click-enter-active {
    transition: 0.5s ease-in-out calc(var(--i) * 0.1s);
  }

  .menu-click-leave-active {
    transition: opacity 0.5s ease-in-out calc(var(--i) * 0.1s),
      transform 0.5s ease-in-out calc(var(--i) * 0.1s),
      background 0.5s ease-in-out 0.5s;
  }

  .menu-click-leave-to,
  .menu-click-enter {
    transform: translateX(50%);
    opacity: 0;
  }
}
</style>
