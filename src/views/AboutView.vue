<template>
  <main>
    <!-- 1-about-banner -->
    <section class="about-banner__wrapper">
      <p>About</p>
      <h1>We love to make great things, things that matter.</h1>
      <h5>
        Funding handshake buyer business-to-business metrics iPad partnership.
        First mover advantage innovator success deployment non-disclosure.
      </h5>
    </section>

    <!-- 2-about-pictures -->
    <section class="about-pictures__wrapper">
      <div class="about-image__box">
        <img src="../assets/aboutImg/p-1.png" alt="p-1" />
        <img src="../assets/aboutImg/p-2.png" alt="p-2" />
      </div>
      <img src="../assets/aboutImg/p-3.png" alt="p-3" />
      <div class="about-image__box">
        <img src="../assets/aboutImg/p-4.png" alt="p-4" />
        <img src="../assets/aboutImg/p-5.png" alt="p-5" />
      </div>
    </section>

    <!-- 3-about-market -->
    <section class="about-market__wrapper">
      <div class="about-market__text">
        <p>Our story</p>
        <h2>Handshake infographic mass market crowdfunding iteration.</h2>
        <h4>
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus. Sales
          user experience branding growth hacking holy grail monetization
          conversion prototype stock network effects. Learning curve network
          effects return on investment bootstrapping business-to-consumer.
        </h4>
      </div>
    </section>

    <!-- 4-about-members -->
    <section class="about-members__wrapper">
      <p>Our members</p>
      <h2>Handshake infographic mass market crowdfunding iteration.</h2>
      <div class="about-members__statistics">
        <div class="about-members__statistic">
          <b>120m</b>
          <p>Cool feature title</p>
        </div>
        <div class="about-members__statistic">
          <b>10.000</b>
          <p>Cool feature title</p>
        </div>
        <div class="about-members__statistic">
          <b>240</b>
          <p>Cool feature title</p>
        </div>
      </div>
    </section>

    <!-- 5-about-leadership -->
    <section class="about-leadership__wrapper">
      <div class="about-market__text pd-0">
        <p>Our team</p>
        <h2>The leadership team</h2>
        <h4>
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </h4>
      </div>
      <div class="leadership-cards">
        <div class="leadership-card">
          <img src="../assets/aboutImg/p-6.png" alt="p-6" />
          <h4>Michael Scott</h4>
          <h5>General Manager</h5>
        </div>
        <div class="leadership-card">
          <img src="../assets/aboutImg/p-7.png" alt="p-7" />
          <h4>Dwight Schrute</h4>
          <h5>General Manager</h5>
        </div>
        <div class="leadership-card">
          <img src="../assets/aboutImg/p-8.png" alt="p-8" />
          <h4>Pam Beetsley</h4>
          <h5>General Manager</h5>
        </div>
      </div>
    </section>

    <!-- 6-about-values__wrapper -->
    <section class="about-values__wrapper">
      <div class="about-market__text pd-0">
        <p id="c-wh">Our team</p>
        <h2 id="c-wh">The leadership team</h2>
        <h4 id="c-wh">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </h4>
      </div>  

      <div class="values-cards">
        <div class="values-card">
          <img src="../assets/aboutImg/p-9.png" alt="p-9">
          <div class="values-text">
            <h4>We are commited.</h4>
            <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
          </div>
        </div>
        <div class="values-card">
          <img src="../assets/aboutImg/p-10.png" alt="p-10">
          <div class="values-text">
            <h4>We are responsible.</h4>
            <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
          </div>
        </div>
        <div class="values-card">
          <img src="../assets/aboutImg/p-11.png" alt="p-11">
          <div class="values-text">
            <h4>We aim for progress.</h4>
            <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
          </div>
        </div>
      </div>
    </section>

    
  </main>
</template>
<script>
export default {}
</script>
<style scoped>
/* 1-about-banner */
.about-banner__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 615px;
  background-color: rgba(10, 38, 64, 1);
  padding: 170px 256px;
  text-align: center;
}
.about-banner__wrapper p {
  font-weight: normal;
  font-size: calc(20 / 19.2 * 1vw);
  line-height: 32px;
  color: rgba(241, 241, 241, 1);
  margin-bottom: 12px;
}
.about-banner__wrapper h1 {
  font-weight: 400;
  font-size: calc(64 / 19.2 * 1vw);
  line-height: 84px;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 17.5px;
  width: 750px;
}
.about-banner__wrapper h5 {
  font-weight: 400;
  font-size: calc(16 / 19.2 * 1vw);
  line-height: 28px;
  color: rgba(241, 241, 241, 1);
  width: 750px;
}
/* 2-about-picture */
.about-pictures__wrapper {
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 300px;
  top: 519px;
}
.about-image__box {
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* 3-about-market */
.about-market__wrapper {
  width: 100%;
}
.about-market__text {
  padding: 0 450px;
  padding-top: 656px;
  padding-bottom: 96px;
}
.about-market__text p {
  font-size: calc(20 / 19.2 * 1vw);
  color: rgba(119, 119, 119, 1);
  margin-bottom: 12px;
}
.about-market__text h2 {
  font-weight: 400;
  font-size: calc(48 / 19.2 * 1vw);
  line-height: 72px;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 32px;
  width: 800px;
}
.about-market__text h4 {
  width: 799px;
  font-weight: 400;
  font-size: calc(20 / 19.2 * 1vw);
  line-height: 32px;
  color: rgba(119, 119, 119, 1);
}
/* 4-about-members */
.about-members__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 584px;
  background-color: rgba(10, 38, 64, 1);
  padding: 96px 0;
  text-align: center;
}
.about-members__wrapper p:first-child {
  font-size: calc(20 / 19.2 * 1vw);
  line-height: 32px;
  color: rgba(119, 119, 119, 1);
  margin-bottom: 12px;
}
.about-members__wrapper h2 {
  font-weight: 400;
  width: 842px;
  font-size: calc(48 / 19.2 * 1vw);
  line-height: 72px;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 82px;
}
.about-members__statistics {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 140px;
}
.about-members__statistic {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 22px;
}
.about-members__statistic b {
  font-weight: 400;
  font-size: calc(96 / 19.2 * 1vw);
  line-height: 56px;
  color: rgba(79, 233, 164, 1);
}
.about-members__statistic p {
  font-size: calc(24 / 19.2 * 1vw);
  line-height: 36px;
  color: rgba(241, 241, 241, 1);
}
/* 5-leadership-wrapper */
.pd-0 {
  padding-top: 96px;
}
.leadership-cards {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 51px;
}
.leadership-card {
  transition: all 500ms ease;
  width: 300px;
  /* height: 470px; */
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 15px;
  border-radius: 8px;
}
.leadership-card:hover {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.leadership-card h4 {
  font-weight: 400;
  font-size: calc(28 / 19.2 * 1vw);
  line-height: 48px;
  color: rgba(0, 0, 0, 1);
  padding-left: 15px;
}
.leadership-card h5 {
  font-weight: 400;
  font-size: calc(20 / 19.2 * 1vw);
  line-height: 32px;
  color: rgba(119, 119, 119, 1);
  padding-left: 15px;
}

/* 6-about-values__wrapper */
.about-values__wrapper {
  width: 100%;
  height: 1166px;
  background-color: rgba(10, 38, 64, 1);
  margin-bottom: 124px;
}
#c-wh {
  color: #fff;
}
.values-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 72px;  
}
.values-card {
  display: flex;
  gap: 50px;
  align-items: flex-start;
  justify-content: center;
}
.values-card h4 {
  font-weight: 400;
  font-size: calc(28/19.2 *1vw);
  line-height: 48px;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 16px;
}
.values-card p {
  width: 580px;
  font-weight: 400;
  font-size: calc(20/19.2 *1vw);
  line-height: 32px;
  color: rgba(241, 241, 241, 1);
  margin-bottom: 16px;
}
</style>
