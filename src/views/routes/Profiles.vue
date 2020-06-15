<template>
  <div class="about">
    <Navbar :key="navBarKey" />
    <h1>This is Profiles page</h1>
    <login-form />
  </div>
</template>

<script lang="ts">
import Navbar from "@/views/components/auxiliaries/Navbar.vue";
import { Vue, Component } from "vue-property-decorator";
import LoginForm from "@/views/components/forms/LoginForm.vue";

@Component({
  components: {
    Navbar,
    LoginForm
  }
})
export default class Profiles extends Vue {
  navBarKey = 1;
  constructor() {
    super();
    this.checkCredential();
  }
  async checkCredential() {
    await this.checkCredential();
    const credential = localStorage.getItem("credential");
    if (credential != null) {
      console.log(JSON.parse(credential));
      this.navBarKey = -this.navBarKey;
    } else {
      console.log("not logged in");
    }
  }

  async checkGHState() {
    const state = sessionStorage.getItem("gh-state");
    // console.log(`State is ${state}`);
    if (state == null) return;
    const queryString = location.search;
    // console.log(`Query string is ${queryString}`);
    if (queryString != "") {
      const urlParams = new URLSearchParams(queryString);
      // console.log(`Url Params is ${urlParams}`);

      if (urlParams.get("code") != null && urlParams.get("state") != null) {
        // console.log(`Code is ${urlParams.get("code")}`);
        const code = urlParams.get("code");
        if (urlParams.get("state") === state) {
          const clientId = "1c59263c3aa4309442ec";
          const clientSecret = "fec5f1f104db27ab7e2e4d69511c25b94f44ddcd";
          let res = await fetch(
            `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,
            { method: "POST" }
          );
          const ans = await res.text();
          const tokenStr = ans.split("&")[0].split("=")[1];
          res = await fetch("https://api.github.com/user", {
            headers: {
              Authorization: `token ${tokenStr}`
            }
          });
          const ghUser = await res.json();
          const credential = {
            id: ghUser.id,
            name: ghUser.name,
            img: ghUser.avatar_url,
            by: "GITHUB"
          };
          localStorage.setItem("credential", JSON.stringify(credential));
          history.replaceState(null, "", location.pathname);
          sessionStorage.removeItem("gh-state");
        }
      }
    }
  }
}
</script>
