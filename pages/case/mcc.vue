<template>
  <div id="works-inside-index">
    <main id="main" class="site-main bg-half-ring-right bg-half-ring-top pt-2">
      <section id="page-content">
        <div class="wrapper">
          <div id="single">
            <div class="row">
              <div class="col-lg my-5">
                <p class="date ml-1">
                  с <span class="large">25</span>мая 2021 по
                  <span class="large">30</span>июня 2021
                </p>
                <h1 class="smallest">Механизм Рассмотрения Обращений.</h1>
                <a
                  href="https://mirllex.site"
                  target="_blank"
                  class="link"
                  style="color: #d07679"
                >
                  Посетить сайт.
                </a>
              </div>
              <div
                class="
                  col-lg
                  my-5
                  d-flex
                  justify-content-lg-end justify-content-center
                "
              >
                <img
                  width="200"
                  style="height: 200px"
                  src="/images/mcc-logo.png"
                />
              </div>
            </div>
            <div class="container mb-5">
              <p>
                <b class="fs-22">Клиент</b>
              </p>
              <p>
                Министерство Здравоохранения Таджикистана ежемесячно принимает
                большое количество заявлений, обращений, жалоб и предложений
                в&nbsp;письменном виде. Граждане обращаются в служебные точки
                министерства здравоохренения, которых более шестидесяти пяти
                по&nbsp;всей республике Таджикистана, но&nbsp;данный метод
                медленный и&nbsp;не&nbsp;эффективный
              </p>
            </div>

            <div class="my-5">
              <img src="/images/mcc-background-1.png" />
            </div>

            <div class="container my-5">
              <p>
                <b class="fs-22">Идея и задача</b>
              </p>
              <p>
                Основополагающая идея даного проекта является перенос действущей
                структуры по&nbsp;физической приёмке обращений и&nbsp;всего
                остального от&nbsp;граждан Республики Таджикистан,
                в&nbsp;интернет систему, благодаря которой работники минздрава
                смогут децентрализовать все обращения и&nbsp;вести все процессы
                прямо в этой&nbsp;же системе. Тем временем гражданам
                не&nbsp;обязательно будет ходить в&nbsp;служебные точки
                минздрава, а&nbsp;подать обращение через инетрнет-систему
                и&nbsp;там&nbsp;же получить ответ.
              </p>
            </div>

            <div class="my-5">
              <img src="/images/mcc-background-2.png" />
            </div>

            <div class="container my-5">
              <p>
                <b class="fs-22">Над проектом работают</b>
              </p>
              <div class="row">
                <div class="col-lg">
                  <div>Front-end разработчик</div>
                  <div class="mt-3">
                    <b>Камол Рахимов</b>
                  </div>
                </div>
                <div class="col-lg">
                  <div>Back-end разработчик</div>
                  <div class="mt-3"><b>Дмитрий Криничный</b></div>
                </div>
                <div class="col-lg">
                  <div>Проектный менеджер</div>
                  <div class="mt-3"><b>Тьет Зыонг</b></div>
                </div>
              </div>
            </div>

            <div class="my-5">
              <img src="/images/mcc-background-3.png" />
            </div>

            <Request class="my-5 py-5" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import WorksInsideData from "~/data/works-inside/worksInsideData.json";

export default {
  components: {},
  data() {
    return {
      items: WorksInsideData.worksInsideData,
    };
  },
  mounted: function () {
    document.body.classList.add("single");
    document.body.classList.add("single-portfolio");
    document.body.classList.add("bg-fixed");
    document.body.classList.add("bg-line");
  },
  beforeDestroy() {
    document.body.classList.remove("single");
    document.body.classList.remove("single-portfolio");
    document.body.classList.remove("bg-fixed");
    document.body.classList.remove("bg-line");
  },
  metaInfo: {
    title: "Works inside | Oxer - Minimal Portfolio Vue JS Template",
    titleTemplate: "%s",
  },
};
</script>
