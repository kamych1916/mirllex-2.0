<template>
  <form v-on:submit.prevent="submitForm" class="wpcf7-form">
    <p class="row">
      <span class="col-lg">
        <input
          class="w-100 my-3"
          v-model="form.name"
          name="name"
          type="text"
          size="30"
          maxlength="245"
          required="required"
          placeholder="Как к вам обращаться"
        />
      </span>

      <span class="col-lg">
        <input
          class="w-100 my-3"
          v-model="form.tel"
          name="name"
          type="telephone"
          maxlength="245"
          required="required"
          placeholder="Ваш номер телефона"
        />
      </span>

      <span class="col-lg">
        <input
          class="w-100 my-3"
          v-model="form.email"
          name="email"
          type="email"
          size="30"
          maxlength="100"
          required="required"
          placeholder="Ваш e-mail"
        />
      </span>
    </p>

    <p>
      <textarea
        v-model="form.message"
        name="message"
        cols="45"
        rows="8"
        maxlength="65525"
        required="required"
        placeholder="Вкратце опишите ваш запрос"
      ></textarea>
    </p>

    <p class="mb-0">
      <input
        name="submit"
        type="submit"
        class="btn btn-dark border-0 transform-scale-h"
        value="Отправить"
      />
    </p>
  </form>
</template>

<script>
export default {
  name: "ContactsForm",
  data() {
    return {
      form: {
        name: null,
        tel: null,
        email: null,
        message: null,
      },
    };
  },
  methods: {
    async submitForm(e) {
      let emailjs = require("emailjs-com");
      try {
        emailjs.sendForm(
          "service_ce1colu",
          "template_32pfcxp",
          e.target,
          "user_AqZRrlr2TkrhVvEbpLeSF",
          {
            name: this.form.name,
            tel: this.form.tel,
            email: this.form.email,
            message: this.form.meessage,
          }
        );
        alert("Ваше сообщение отправлено, ответим в кратчайшие сроки!");
      } catch (error) {
        console.log({ error });
      }
      this.form = {
        name: null,
        tel: null,
        email: null,
        message: null,
      };
    },
  },
};
</script>
