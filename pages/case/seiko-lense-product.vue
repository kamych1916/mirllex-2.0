<template>
  <main id="main" class="site-main bg-half-ring-right bg-half-ring-top pt-5">
    <section id="page-content">
      <div class="wrapper">
        <div id="single">
          <div class="row gutter-width-lg single-content">
            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
              <div class="img">
                <div class="object-fit-cover">
                  <img src="/images/seiko-background-1.jpg" />
                </div>
              </div>
              <div class="img">
                <div class="object-fit-cover">
                  <img src="/images/seiko-background-2.jpg" />
                </div>
              </div>
              <div class="img">
                <div class="object-fit-cover">
                  <img src="/images/seiko-background-3.jpg" />
                </div>
              </div>
              <div class="img">
                <div class="object-fit-cover">
                  <img src="/images/seiko-background-4.jpg" />
                </div>
              </div>
              <div class="img">
                <div class="object-fit-cover">
                  <img src="/images/seiko-background-5.jpg" />
                </div>
              </div>
            </div>

            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
              <div class="sticky">
                <p class="date">
                  с <span class="large">25</span>мая 2021 по
                  <span class="large">30</span>июня 2021
                </p>

                <h1 class="small mb-2">Seiko Lense Product.</h1>
                <a
                  href="https://t.me/seikolens_bot"
                  target="_blank"
                  style="color: #d07679"
                >
                  Использовать бота.
                </a>
                <div class="description mt-5">
                  <p>
                    &laquo;Siko Lense&raquo; основана в&nbsp;2003&nbsp;г.
                    Эксклюзивный представитель ведущих мировых оптических
                    брендов на&nbsp;территории Казахстана. Мы&nbsp;представляем
                    коллекции медицинских оправ, солнцезащитных очков
                    и&nbsp;оптических линз мировых брендов.
                  </p>

                  <h5>Идея и задача</h5>

                  <p>
                    В&nbsp;основе идеи лежала автоматизация процесса оформления
                    заказа. Партнеры компании Seiko получили возможность,
                    используя telegram бот, узнать наличие товара на&nbsp;складе
                    и&nbsp;при желании оформить заказ. До&nbsp;момента создания
                    бота, партнёром необходимо было связываться
                    с&nbsp;менеджером компании SEIKO, который принимал заказ
                    и&nbsp;вручную оформлял в&nbsp;1С. На&nbsp;данный момент
                    данный процесс был полностью автоматизирован, заказы
                    оформляются в&nbsp;1с, происходит регулярное обновление
                    склада, а&nbsp;менеджер получает уведомление
                    об&nbsp;оформлении заказал.
                  </p>

                  <h5>Над проектом работали</h5>
                  <div class="row">
                    <div class="col-lg">
                      <div>Веб-мастер</div>
                      <div class="mt-3">
                        <b>Дмитрий Криничный</b>
                      </div>
                    </div>
                    <div class="col-lg">
                      <div>1c-разработчик</div>
                      <div class="mt-3">
                        <b>Александр Сироткин</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Request class="my-5 py-5" />
  </main>
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
