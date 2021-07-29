<template>
  <div id="works-inside-index">
    <main id="main" class="site-main bg-half-ring-right bg-half-ring-top pt-2">
      <section id="page-content">
        <div class="wrapper">
          <div id="single">
            <div class="row">
              <div class="col-lg my-5">
                <p class="date ml-1">
                  с <span class="large">01</span>сентября 2020 по
                  <span class="large">01</span>октября 2020
                  <!-- {{ new Date().getFullYear() }} -->
                </p>
                <h1 class="small">Дор Мост Сервис.</h1>
                <p style="color: #d07679">
                  Система недоступна для общего пользования.
                </p>
              </div>
              <div
                class="
                  col-lg
                  my-5
                  d-flex
                  justify-content-lg-end justify-content-center
                "
              >
                <img src="/images/dms-logo.jpeg" />
              </div>
            </div>
            <div class="container mb-5">
              <p>
                <b class="fs-22">Клиент и задача</b>
              </p>
              <p class="mb-5">
                &laquo;Дор Мост Сервис&raquo; строит по&nbsp;всей России
                высококачественные дороги и&nbsp;мосты. Компания является
                крупным игроком в&nbsp;данной отрасли.
              </p>
              <p>
                Наша задача&nbsp;&mdash; создание веб-системы, или также
                системы-мониторинга, благодаря, которой руководители будут вести
                учет и&nbsp;мониторинг внутренних процессов компании.
              </p>
            </div>

            <div class="my-5">
              <img src="/images/dms-background-1.jpg" />
            </div>

            <div class="container my-5">
              <p>
                <b class="fs-22">Идея</b>
              </p>
              <p>
                &laquo;Дор Мост Сервис&raquo; имеет множество кадров
                и&nbsp;объектов, тем самым появляется необходимость вести
                отчетности и&nbsp;проводить удаленный мониторинг.
              </p>

              <p>
                Мы&nbsp;разработали веб-систему, которой будут пользоваться
                только руководители проектов компании, для введения отчетности и
                мониторинга объектов. Например:
                <ul class="mt-3">
                  <li>
                    добавление нового сотрудника, распределения его в&nbsp;олпределнные объекты и&nbsp;выделение ему зарплаты
                  </li>
                  <li>
                    добавление нового объекта и&nbsp;мониторинг над ним
                  </li>
                </ul>
              </p>
            </div>

            <div class="my-5">
              <img src="/images/dms-background-2.jpg" />
            </div>

            <div class="container my-5">
              <p>
                <b class="fs-22">Над проектом работали</b>
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
                  <div class="mt-3"><b>Никита Яковлел</b></div>
                </div>
                <div class="col-lg">
                  <div>Веб-мастер</div>
                  <div class="mt-3"><b>Павел Кацков</b></div>
                </div>
                <div class="col-lg">
                  <div>Проектный менеджер</div>
                  <div class="mt-3"><b>Павел Легкодымов</b></div>
                </div>
              </div>
            </div>

            <div class="my-5">
              <img src="/images/dms-background-4.jpg" />
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
    title: "Кейс | Агентство Единный подрядчик",
    titleTemplate: "%s",
  },
};
</script>
