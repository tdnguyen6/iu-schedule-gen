<template>
  <div class="home">
    <div class="content-wrapper">
      <Navbar />
      <div class="home-content">
        <div class="slogan">
          Frustrated with course registration at IU ?
        </div>
        <img src="@/views/images/frustrated.jpg" />
        <div class="slogan">
          With IU Schedule Generator, registering course at IU is no longer a
          pain
        </div>
        <img src="@/views/images/happy.jpg" />
        <div class="slogan">
          How do I start ?
          <button class="step-toggle" @click="showStep = !showStep">
            {{ showStep ? "Hide" : "Show" }}
          </button>
        </div>
        <transition-group name="appear-right" tag="ul" appear>
          <li
            v-for="(step, id) in steps"
            :key="+id"
            class="step"
            :style="`--i: ${id}`"
          >
            <hr />
            <em>{{ step }}</em>
            <hr />
          </li>
        </transition-group>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/views/components/auxiliaries/Navbar.vue";
import Footer from "@/views/components/auxiliaries/Footer.vue";

@Component({
  components: {
    Navbar,
    Footer
  }
})
export default class Home extends Vue {
  showStep = false;
  get steps() {
    return this.showStep
      ? [
          "Sign In Using Social Network Account (Optional)",
          "Go To Profile Page (If you signed in)",
          "Add a Profile (If you signed in and have no profile)",
          "Load a Profile (If you signed in)",
          "Go To Courses Page to add Courses, Classes and Sessions",
          "Go To Generator Page to see all suitable schedules ",
          "Save or Delete your Profile (If you signed in)",
          "Read wonderful things on the About Page 🎫",
          "Fork or Star this project on GitHub 🌟"
        ]
      : [];
  }
}
</script>

<style lang="scss" scope>
.home {
  .home-content {
    margin: 1rem 0;
    .slogan {
      text-align: center;
      background: var(--bg);
      font-weight: 700;
      font-size: 1rem;
      padding: 1rem;

      .step-toggle {
        background: #{$m-c3};
        color: #{$m-c8};
        border: none;
        cursor: pointer;
        height: 2rem;
        margin-left: 1rem;
        border: 1px dotted var(--text-color);
        box-shadow: 3px 3px 6px var(--shadow);
      }
    }

    img {
      width: 100%;
      // visibility: hidden;
    }

    .appear-right-enter,
    .appear-right-leave-to {
      opacity: 0;
      transform: translateX(50vw);
    }

    .appear-right-enter-active,
    .appear-right-leave-active {
      transition: all 0.5s ease-in-out calc(var(--i) * 0.5s);
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        text-align: center;
        padding: 0.5rem 3rem;
      }
    }
  }
}
</style>
