<template>
  <div class="login-form">
    <label for="uname">Username</label>
    <input type="text" id="uname" v-model.trim="uname" />
    <label for="passwd">Password</label>
    <input type="password" id="passwd" v-model.trim="passwd" />
    <button @click="authenticate()"></button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DataAccess } from "@/services/logics/DataAccess";

@Component({
  components: {}
})
export default class LoginForm extends Vue {
  private uname = "";
  private passwd = "";

  async authenticate() {
    if (this.check(this.uname) && this.check(this.passwd)) {
      const uID = await DataAccess.authenticate(this.uname, this.passwd);
      if (uID != null) return uID;
      else alert("Invalid username or password");
    }
    alert("Invalid username or password");
  }

  check(str: string): boolean {
    const illegalChars = /\W/;
    if (str.length == 0 || illegalChars.test(str)) {
      return false;
    }
    return true;
  }
}
</script>

<style lang="scss" scoped>
input {
  padding: 0.5rem;
  margin: 1rem 0;
  display: block;
  background: var(--shadow);
  border: none;
  border-bottom: 1px dashed var(--text-color);
}
</style>
