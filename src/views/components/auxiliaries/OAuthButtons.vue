<template>
  <div class="oath-btns">
    <button class="social-sign-in gg-sign-in">
      <font-awesome-icon :icon="['fab', 'google']" class="gg-g" />
      <span class="gg-o1">o</span>
      <span class="gg-o2">o</span>
      <span class="gg-g">g</span>
      <span class="gg-l">l</span>
      <span class="gg-e">e</span>
    </button>
    <button class="social-sign-in gh-sign-in" @click="clickGHBtn()">
      <font-awesome-icon :icon="['fab', 'github']" />
      <span> GitHub</span>
    </button>
    <button class="social-sign-in fb-sign-in" @click="clickFBBtn()">
      <font-awesome-icon :icon="['fab', 'facebook']" />
      <span> Facebook</span>
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
  created() {
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
      const ggBtn = document.getElementsByClassName("gg-sign-in")[0];
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
          location = `${location.origin}/${
            location.pathname.split("/")[1]
          }/profiles`;
        },
        function(error) {
          console.log(JSON.stringify(error, undefined, 2));
        }
      );
    }
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
        FB.api("/me?fields=id,name,picture", function(response) {
          const credential = {
            id: response.id,
            name: response.name,
            img: response.picture.data.url,
            by: "FACEBOOK"
          };
          localStorage.setItem("credential", JSON.stringify(credential));
          location = `${location.origin}/${
            location.pathname.split("/")[1]
          }/profiles`;
        });
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
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    background: var(--bg);
    * {
      color: var(--text-color);
      transition: all 0.2s ease-out;
    }
    display: block;
    cursor: pointer;
    border: none;
    font-weight: 700;
    font-size: 1rem;
    border: 1px dotted var(--text-color);
    box-shadow: 5px 5px 10px var(--shadow);
    width: 10rem;
    height: 3rem;
    margin: 1rem 0;
  }

  .gg-sign-in {
    background: var(--gg-sign-in-bg);
    // *{
    //   color: var(--gg-sign-in-fg);
    // }
    // &:hover {
    //   * {
    //     color: var(--gg-sign-in-fg-hover);
    //   }
    // }
    &:hover {
      span, path {
        opacity: 0.7;
      }
    }
    .gg-g {
      color: #{$gg1};
      path {
        color: #{$gg1};
      }
    }
    .gg-o1 {
      color: #{$gg2};
    }
    .gg-o2 {
      color: #{$gg3};
    }
    .gg-l {
      color: #{$gg4};
    }
    .gg-e {
      color: #{$gg2};
    }
  }
  .gh-sign-in {
    border: 1px dotted var(--social-btn-border);
    background: var(--gh-sign-in-bg);
    * {
      color: var(--gh-sign-in-fg);
    }
    &:hover {
      * {
        color: var(--gg-sign-in-fg-hover);
      }
    }
  }
  .fb-sign-in {
    background: var(--fb-sign-in-bg);
    * {
      color: var(--fb-sign-in-fg);
    }
    &:hover {
      * {
        color: var(--gg-sign-in-fg-hover);
      }
    }
  }
}
</style>
