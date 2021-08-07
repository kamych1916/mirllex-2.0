<template>
  <div id="works-inside-index">
    <main id="main" class="site-main bg-half-ring-right bg-half-ring-top pt-2">
      <section id="page-content">
        <div class="wrapper">
          <div id="single">
            <div class="row">
              <div class="col-lg my-5">
                <p class="date ml-1">
                  с <span class="large">10</span>мая 2021 по
                  <span class="large">15</span>июня 2021
                </p>
                <h1 class="smallest">
                  Майдон&nbsp;&mdash; Недвижимость Таджикистана.
                </h1>
                <a
                  href="https://maidon.tj"
                  target="_blank"
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
                <img width="200" height="50" src="/images/maidon-logo.png" />
              </div>
            </div>
            <div class="container mb-5">
              <p>
                <b class="fs-22">Клиент и задача</b>
              </p>
              <p class="mb-5">
                Проект &laquo;Майдон&raquo; является нашим детищем, в который мы
                приложили не мало усилий.
              </p>
              <p>
                Мы реализовали высоконагруженную систему, в которой будет
                большой портал связанный с недвижимостью Таджикистана. Доска
                объявлений по недвижимости, по услугам и материалам в сфере
                недвижимости.
              </p>
            </div>

            <div class="my-5">
              <img src="/images/maidon-background-1.png" />
            </div>

            <div class="container my-5">
              <p>
                <b class="fs-22">Идея</b>
              </p>
              <p>
                В&nbsp;Таджикистане большое количество новых построек
                и&nbsp;усулуг в сфере недвижимости. Идея заключается в&nbsp;том,
                чтобы реализовать единный портал для всего сообщества
                по&nbsp;недвижимости.
              </p>
            </div>

            <div class="my-5">
              <img src="/images/maidon-background-2.png" />
            </div>

            <div class="container my-5">
              <p>
                <b class="fs-22">Над проектом работали</b>
              </p>
              <div class="row">
                <div class="col-lg my-4">
                  <div>Front-end разработчик</div>
                  <div class="mt-3">
                    <b>Камол Рахимов</b>
                  </div>
                </div>
                <div class="col-lg my-4">
                  <div>Back-end разработчик</div>
                  <div class="mt-3"><b>Дмитрий Криничный</b></div>
                </div>
                <div class="col-lg my-4">
                  <div>Проектный менеджер</div>
                  <div class="mt-3"><b>Тьет Зыонг</b></div>
                </div>
              </div>
            </div>

            <div class="my-5">
              <img src="/images/maidon-background-3.png" />
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
  head: {
    title: "Кейс | Агентство Единый подрядчик",
    titleTemplate: "%s",
  },
};
</script>
