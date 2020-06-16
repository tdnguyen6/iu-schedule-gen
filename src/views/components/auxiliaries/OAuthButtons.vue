<template>
  <div class="oath-btns">
    <button class="social-sign-in" id="gg-sign-in">Google</button>
    <button class="social-sign-in" id="gh-sign-in" @click="clickGHBtn()">
      GitHub
    </button>
    <button class="social-sign-in" id="fb-sign-in" @click="clickFBBtn()">
      Facebook
    </button>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {}
})
export default class OAuthButtons extends Vue {
  mounted() {
    this.initGGBtn();
  }
  // googleUser = {};

  initGGBtn() {
    gapi.load("auth2", function() {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      const auth2 = gapi.auth2.init({
        client_id:
          "560035296789-2krhmuidgp1078cioji1ju2bq71vqvls.apps.googleusercontent.com",
        cookiepolicy: "none"
        // ux_mode: "redirect",
        // redirect_uri: "https://tidunguyen.github.io/iu-schedule-gen/profiles"
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      const ggBtn = document.getElementById("gg-sign-in");
      attachSignin(ggBtn, auth2);
    });
    function attachSignin(element, auth2) {
      auth2.attachClickHandler(
        element,
        {},
        function(googleUser) {
          const profile = googleUser.getBasicProfile();
          // console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
          // console.log("Name: " + profile.getName());
          // console.log("Image URL: " + profile.getImageUrl());
          const credential = {
            id: profile.getId(),
            name: profile.getName(),
            img: profile.getImageUrl(),
            by: "GOOGLE"
          };
          localStorage.setItem("credential", JSON.stringify(credential));
        },
        function(error) {
          console.log(JSON.stringify(error, undefined, 2));
        }
      );
    }
    this.$router.push("/profiles");
  }

  clickGHBtn() {
    const state = new Date().getTime();
    const client_id = "1c59263c3aa4309442ec";
    location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}&state=${state}`;
    sessionStorage.setItem("gh-state", state);
  }

  clickFBBtn() {
    FB.login(function(response) {
      if (response.status === "connected") {
        console.log("status is connected");
        console.log(response);
        let id;
        let name;
        let img;
        FB.api("/me", function(response) {
          console.log("/me");
          console.log(response);
          id = response.id;
          name = response.name;
        });
        FB.api("/me/picture?redirect=0", function(response) {
          console.log("/me/picture?redirect=0");
          console.log(response);
          img = response.url
        });
        console.log(`id: ${id}`);
        console.log(`name: ${name}`);
        console.log(`img: ${img}`);
        const credential = {
          id: id,
          name: name,
          img: img,
          by: "FACEBOOK"
        };
        localStorage.setItem("credential", JSON.stringify(credential));
          // this.$router.push("/profiles");
      } else {
        console.log(
          "The person is not logged into your webpage or we are unable to tell"
        );
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.oath-btns {
  .social-sign-in {
    background: transparent;
    cursor: pointer;
    color: var(--text-color);
    border: none;
  }
}
</style>
