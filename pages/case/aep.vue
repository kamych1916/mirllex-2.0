<template>
  <div id="works-inside-index">
    <main id="main" class="site-main bg-half-ring-right bg-half-ring-top pt-5">
      <section id="page-content">
        <div class="wrapper">
          <div id="single">
            <div class="row mb-5">
              <div class="col-lg">
                <p class="date ml-1">
                  с <span class="large">01</span>ноября 2020 по
                  <span class="large">02</span>декабря 2020
                  <!-- {{ new Date().getFullYear() }} -->
                </p>
                <h1 class="small">
                  Агентство Единный<br />
                  Подрядчик
                </h1>
                <p style="color: #d07679">
                  Система недоступна для общего пользования.
                </p>
              </div>
              <div
                class="
                  col-lg
                  my-5
                  d-flex
                  justify-content-lg-end justify-content-start
                "
              >
                <img src="/images/aep-logo.png" />
              </div>
            </div>
            <div class="container my-5">
              <p>
                <b class="fs-22">Клиент и задача</b>
              </p>
              <p class="mb-5">
                &laquo;Агентство Единый Подрядчик&raquo; осуществляет комплекс
                работ по&nbsp;строительтсву, ремонту, эксплуатации недвижимости
                и&nbsp;работ по&nbsp;клинингу в&nbsp;Санкт-Петербурге
                и&nbsp;Москве.
              </p>
              <p>
                Наша задача — создание веб-системы, которая упрощает работу с
                заявками и объектами внутри компании.
              </p>
            </div>

            <div class="my-5">
              <img src="/images/aep-background-1.jpg" />
            </div>

            <div class="container my-5">
              <p>
                <b class="fs-22">Идея</b>
              </p>
              <p>
                &laquo;Единый Подрядчик&raquo; осуществляет любые комплексные
                работы в&nbsp;сфере строительства и&nbsp;обслуживания зданий
                и&nbsp;сооружений, включая жилищный фонд.
              </p>

              <p>
                Мы&nbsp;разработали веб-систему, в которой клиенты могут
                оставлять завяки на свои объекты, к примеру - у клиента на
                объекте произошло какое либо событие (протечка воды, проблемы с
                электроникой и т.д.) и далее он может оставить заявку в системе,
                чтобы компания отреагировала максимально быстро.
              </p>
            </div>

            <div class="my-5">
              <img src="/images/aep-background-2.jpg" />
            </div>

            <div class="container my-5">
              <p>
                <b class="fs-22">Над проектом работали</b>
              </p>
              <div class="row">
                <div class="col-lg">
                  <div>Веб-дизайнер</div>
                  <div class="mt-3">
                    <b>Валерия Григорьева</b>
                  </div>
                </div>
                <div class="col-lg">
                  <div>Веб-мастер</div>
                  <div class="mt-3"><b>Камол Рахимов</b></div>
                </div>
                <div class="col-lg">
                  <div>Проектный менеджер</div>
                  <div class="mt-3"><b>Сергей Тимохин</b></div>
                </div>
              </div>
            </div>

            <div class="my-5">
              <img src="/images/aep-background-3.jpg" />
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
