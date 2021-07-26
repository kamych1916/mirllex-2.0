<template>
  <div id="404-index">
    <main id="main" class="site-main bg-half-ring-up">
      <PageTitle />

      <div id="page-content" class="block">
        <div class="wrapper">
          <p class="spacer p-top-lg w-50 m-0">
            Не&nbsp;удалось найти страницу, которую вы&nbsp;искали. Страница
            могла быть удалена, или вы&nbsp;неправильно написали слово при
            поиске.
          </p>

          <div
            class="
              spacer
              p-top-xl p-bottom-xl
              d-xl-flex d-lg-flex d-md-flex
              justify-content-between
              block
              m-top-extrasmall
            "
          >
            <BackToHome />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import PageTitle from "~/blocks/404/PageTitle";
import BackToHome from "~/components/Button/BackToHome";

export default {
  components: {
    PageTitle,
    BackToHome,
  },
  mounted: function () {
    document.body.classList.add("error404");
    document.body.classList.add("bg-fixed");
    document.body.classList.add("bg-line");
  },
  beforeDestroy() {
    document.body.classList.remove("error404");
    document.body.classList.remove("bg-fixed");
    document.body.classList.remove("bg-line");
  },
  metaInfo: {
    title: "404 | Oxer - Minimal Portfolio Vue JS Template",
    titleTemplate: "%s",
  },
};
</script>
