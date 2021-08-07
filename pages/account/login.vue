<template>
  <div class="container">
    <form @submit.prevent="signIn" class="wpcf7-form">
      <h3>Авторизация</h3>

      <div class="form-group py-16">
        <input
          v-model="email"
          name="email"
          placeholder="E-mail адрес"
          auto-complete
          required
          clearable
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
      </div>

      <div class="form-group py-16">
        <input
          v-model="password"
          name="password"
          placeholder="Пароль"
          required
          show-password
          type="password"
          pattern=".{8,}"
          title="Пароль должен составлять из 8 или более символов"
        />
      </div>

      <div class="pt-10">
        <input
          name="submit"
          type="submit"
          class="btn btn-dark border-0 transform-scale-h"
          value="Отправить"
        />
      </div>
    </form>
  </div>
</template>

<script>
// import { auth } from "@/plugins/firebase";
export default {
  name: "login",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  mounted() {
    // auth.useDeviceLanguage();
  },
  methods: {
    signIn() {
      // auth
      //   .signInWithEmailAndPassword(this.email, this.password)
      //   .then((data) => {
      //     console.log(data);
      //     this.$router.push("/account/" + data.user.uid);
      //   })
      //   .catch((error) => alert("🤕" + error.message));
    },
  },
};
</script>
