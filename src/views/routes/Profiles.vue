<template>
  <div class="profiles">
    <div class="loader-wrapper" v-show="loading">
      <pacman-loader
        color="var(--text-color)"
        size="25px"
        class="loader"
      ></pacman-loader>
    </div>
    <div class="content-wrapper" :class="{ blur: loading }">
      <Modal :control="control" />
      <Navbar />
      <div v-html="profileInfo" class="profile-info"></div>
      <div class="profile-choices">
        <transition name="profile-list">
          <button @click="newProfile()" class="add-btn" v-if="hasProfile">
            <font-awesome-icon :icon="['fas', 'plus']" />New Profile
          </button>
        </transition>
        <transition-group name="profile-list" tag="ul" appear>
          <li
            class="profile-item"
            v-for="(id, index) in profileIDs"
            :class="{ currentProfile: id == loadedID }"
            :key="+index"
            :style="`--i: ${index}`"
          >
            <div class="profile-label">Profile ID: {{ id }}</div>
            <div class="btns-div">
              <button @click="loadProfile(id)" :disabled="id == loadedID">
                Load
              </button>
              <button @click="saveProfile()" :disabled="id != loadedID">
                Save
              </button>
              <button @click="deleteProfile(id)">Delete</button>
            </div>
          </li>
        </transition-group>
      </div>
    </div>
    <Footer :class="{ blur: loading }" />
  </div>
</template>

<script lang="ts">
import Navbar from "@/views/components/auxiliaries/Navbar.vue";
import { Vue, Component } from "vue-property-decorator";
import { DataAccess } from "@/services/logics/DataAccess";
import Modal from "@/views/components/auxiliaries/Modal.vue";
import { ModalControl } from "@/views/components/auxiliaries/Modal.vue";
import Footer from "@/views/components/auxiliaries/Footer.vue";
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";

@Component({
  components: {
    Navbar,
    Modal,
    Footer,
    PacmanLoader
  }
})
export default class Profiles extends Vue {
  loading = false;
  profileInfo = "";
  profileIDs: number[] = [];
  hasProfile = false;
  loadedID = DataAccess.currentProfileID;
  control: ModalControl = {
    title: "",
    toggle: false,
    type: "",
    content: null
  };
  created() {
    this.loading = true;
    this.checkCredential()
      .catch(e => {
        location.href = `${location.origin}/${
          location.pathname.split("/")[1]
        }/profiles`;
        console.log(e);
      })
      .finally(() => (this.loading = false));
  }
  async checkCredential() {
    await this.checkGHState();
    const credentialStr = localStorage.getItem("credential");
    if (credentialStr != null) {
      this.hasProfile = true;
      const credential = JSON.parse(credentialStr);
      console.log(credential);
      this.profileInfo = `
        <h3>Hello ${credential.name}</h3>
        <img src="${credential.img}">
      `;
      this.profileIDs = await DataAccess.getProfileIDs(
        credential.id,
        credential.by
      );
    } else {
      console.log("not logged in");
      this.profileInfo = `
      <center style="padding: 2rem">
        <h3>You have not signed in</h3>
        <p style="padding: 1rem 0">Please sign in to see your profile and to be able to save your courses</p>
      </center>
      `;
    }
  }

  // get currentProfileID() {
  //   return DataAccess.currentProfileID;
  // }

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
          location.href = `${location.origin}/${
            location.pathname.split("/")[1]
          }/profiles`;
        }
      }
    }
  }

  async newProfile() {
    const credential = JSON.parse(localStorage.credential);
    let newID;
    try {
      this.loading = true;
      newID = await DataAccess.newProfile(credential.id, credential.by);
    } catch (e) {
      location.href = `${location.origin}/${
        location.pathname.split("/")[1]
      }/profiles`;
      console.log(e);
    } finally {
      this.loading = false;
    }
    this.profileIDs.unshift(newID);
  }

  async loadProfile(profileID: number) {
    try {
      this.loading = true;
      await DataAccess.load(profileID);
    } catch (e) {
      location.href = `${location.origin}/${
        location.pathname.split("/")[1]
      }/profiles`;
      console.log(e);
    } finally {
      this.loading = false;
    }
    this.loadedID = profileID;
    // this.$forceUpdate();
  }

  async saveProfile() {
    try {
      this.loading = true;
      await DataAccess.save();
    } catch (e) {
      location.href = `${location.origin}/${
        location.pathname.split("/")[1]
      }/profiles`;
      console.log(e);
    } finally {
      this.loading = false;
    }
    this.control.title = `Profile ${this.loadedID} successfully saved`;
    this.control.toggle = true;
  }

  async deleteProfile(profileID: number) {
    try {
      this.loading = true;
      await DataAccess.delete(profileID);
    } catch (e) {
      location.href = `${location.origin}/${
        location.pathname.split("/")[1]
      }/profiles`;
      console.log(e);
    } finally {
      this.loading = false;
    }
    if (profileID == this.loadedID) {
      DataAccess.courseList = [];
    }
    this.profileIDs = this.profileIDs.filter(e => e != profileID);
    // this.$forceUpdate();
  }
}
</script>

<style lang="scss" scoped>
.profiles {
  .loader-wrapper {
    position: fixed;
    z-index: 150;
    height: 100vh;
    width: 100vw;
    background: var(--loading-overlay);
    .loader {
      margin: auto;
      width: 120px;
      top: 45vh;
    }
  }
  .modal {
    z-index: 100;
  }

  .blur {
    filter: blur(5px);
  }

  /deep/ .profile-info {
    margin: 2rem auto;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-evenly;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .profile-choices {
    * {
      font-weight: 700;
    }
    .add-btn {
      padding: 1rem;
      border: none;
      background: transparent;
      cursor: pointer;
      --i: 10;
    }
    margin: 2rem auto;
    ul {
      padding: 0;
      .profile-item {
        margin: 1rem 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: stretch;
        border: 1px dotted var(--text-color);
        .profile-label {
          flex-grow: 1;
          padding: 1rem;
        }
        .btns-div {
          display: flex;
          justify-content: space-evenly;
          align-items: stretch;
          button {
            padding: 1rem;
            border: none;
            background: transparent;
            cursor: pointer;
            &:disabled {
              cursor: unset;
              opacity: 0.5;
              z-index: unset;
            }
          }
        }
      }
    }
    width: 50%;
    min-width: 400px;
    @media (max-width: 400px) {
      margin: 1rem;
      width: auto;
      min-width: unset;
    }

    .profile-list-enter-active,
    .profile-list-leave-active {
      transition: all 0.25s ease-in-out calc(var(--i) * 0.05s);
      // transition: all 0.5s ease-in-out;
    }
    .profile-list-enter,
    .profile-list-leave-to {
      opacity: 0;
    }

    .profile-item {
      list-style: none;
      background: var(--class-title-bg);
    }
    .currentProfile {
      background: var(--course-title-bg);
    }
  }
}
</style>
