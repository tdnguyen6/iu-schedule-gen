<template>
  <div class="about">
    <Navbar />
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
  constructor() {
    super();
    this.checkGHState();
    this.checkCredential();
  }
  checkCredential() {
    const credential = localStorage.getItem("credential");
    if (credential != null) {
      console.log(credential);
    } else {
      console.log("not logged in");
    }
  }

  checkGHState() {
    const state = sessionStorage.getItem("gh-state");
    if (state == null) return;
    const queryString = location.search;
    if (queryString != "") {
      const urlParams = new URLSearchParams(queryString);

      if (urlParams.get("code") != null && urlParams.get("state") != null) {
        const code = urlParams.get("code");
        if (urlParams.get("state") === state) {
          // console.log(`Code is ${urlParams.get("code")}`);
          const clientId = "1c59263c3aa4309442ec";
          const clientSecret = "fec5f1f104db27ab7e2e4d69511c25b94f44ddcd";
          fetch(
            `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,
            { method: "POST" }
          )
            .then(res => res.text())
            .then(ans => {
              const tokenStr = ans.split("&")[0].split("=")[1];
              fetch("https://api.github.com/user", {
                headers: {
                  Authorization: `token ${tokenStr}`
                }
              })
                .then(res => res.json())
                .then(ghUser => {
                  // console.log(json);
                  const credential = {
                    id: ghUser.id,
                    name: ghUser.name,
                    img: ghUser.avatar_url,
                    by: "GITHUB"
                  };
                  localStorage.setItem(
                    "credential",
                    JSON.stringify(credential)
                  );
                  history.replaceState(null, "", location.pathname);
                  sessionStorage.removeItem("gh-state");
                });
            });
        }
      }
    }
  }
}
</script>
