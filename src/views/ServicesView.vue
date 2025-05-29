<template>

  <section class="service_section">
    <div>
      <a href="about">About</a>
      <h2>We love to make great
        things, things that matter.</h2>
    </div>
    <div>
      <p>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator
        success deployment non-disclosure.</p>
    </div>
  </section>
  <section class="ourNumbers_section">
    <p>Our numbers</p>
    <h1>Handshake infographic mass market <br> crowdfunding iteration.</h1>
    <div class="nubers_cards">
      <div class="nubers_card">
        <h2>120m</h2>
        <p>Cool feature title</p>
      </div>
      <div class="nubers_card">
        <h2>10.000</h2>
        <p>Cool feature title</p>
      </div>
      <div class="nubers_card">
        <h2>240</h2>
        <p>Cool feature title</p>
      </div>
    </div>
  </section>
  <section class="ourStory_section">
    <div class="ourStory">
      <span>Our story</span>
      <h1>Handshake infographic mass market crowdfunding iteration.</h1>
      <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market
        crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales
        user experience branding growth hacking holy grail monetization conversion prototype stock network
        effects. Learning curve network effects return on investment bootstrapping business-to-consumer.</p>
    </div>
  </section>

  <section class="ourTeam_section">
    <div class="ourTeam">
      <span>Our team</span>
      <h1>The people behind the work</h1>
      <p>
        Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market
        crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus.
      </p>
    </div>

    <div class="ourTeamCards">
      <div class="ourTeamCard">
        <img src="../assets/serviceImages/i1.png" alt="Michael Scott">
        <h2>Michael Scott</h2>
        <span>General Manager</span>
      </div>
      <div class="ourTeamCard">
        <img src="../assets/serviceImages/i1.png" alt="Michael Scott">
        <h2>Michael Scott</h2>
        <span>General Manager</span>
      </div>
      <div class="ourTeamCard">
        <img src="../assets/serviceImages/i1.png" alt="Michael Scott">
        <h2>Michael Scott</h2>
        <span>General Manager</span>
      </div>
    </div>

    <div class="ourTeamCards2">
      <div class="ourTeamCard2">
        <img src="../assets/serviceImages/i2.png" alt="Dwight Schrute">
        <div>
          <h2>Dwight Schrute</h2>
          <span>General Manager</span>
        </div>
      </div>
      <div class="ourTeamCard2">
        <img src="../assets/serviceImages/i3.png" alt="Pam Beesley">
        <div>
          <h2>Pam Beesley</h2>
          <span>General Manager</span>
        </div>
      </div>
      <div class="ourTeamCard2">
        <img src="../assets/serviceImages/i3.png" alt="Pam Beesley">
        <div>
          <h2>Pam Beesley</h2>
          <span>General Manager</span>
        </div>
      </div>
      <div class="ourTeamCard2">
        <img src="../assets/serviceImages/i2.png" alt="Dwight Schrute">
        <div>
          <h2>Dwight Schrute</h2>
          <span>General Manager</span>
        </div>
      </div>
    </div>
  </section>
  <section class="ourBlogSection">
    <div class="ourBlogHeader">
      <span>Our Blog</span>
      <h2>Value proposition accelerator product<br>management venture</h2>
    </div>
    <hr />
    <div class="ourBlogContent">
      <div class="blogRow">
        <h3>We are <span class="green">commited.</span></h3>
        <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding
          iteration.</p>
      </div>
      <div class="blogRow">
        <h3>We are <span class="green">responsible.</span></h3>
        <p>Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business
          plan handshake. Return on investment seed round MVP backing supply chain.</p>
      </div>
      <div class="blogRow">
        <h3>We aim for <span class="green">progress.</span></h3>
        <p>Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta
          facebook metrics gamification growth hacking customer focus.</p>
      </div>
    </div>
  </section>

</template>
<script>
export default {

}
</script>
<style>
.service_section {
  padding-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
}

.service_section h2 {
  color: #000000;
  font-size: 48px;
  padding-top: 20px;
}

.service_section a {
  color: #777777;
  font-family: Open Sans;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0%;
  vertical-align: middle;
}

.service_section p {
  color: #0A2640;
  font-size: 16px;

}

.ourNumbers_section {
  padding-top: 190px;
  text-align: center;
}

.ourNumbers_section span {
  font-size: 20px;
  color: #0A2640;
}

.ourNumbers_section h1 {
  padding-top: 12px;
  font-size: 48px;
  color: #0A2640;
}

.nubers_cards {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 85px;
  gap: 140px;
  flex-wrap: wrap;
}

.nubers_cards .nubers_card {
  /* background: red; */
  width: 233px;
  height: 124px;
  gap: 32px;
  justify-content: center;
  align-items: center;
}

.nubers_cards .nubers_card h2 {
  font-family: Manrope;
  font-weight: 400;
  font-size: 96px;
  line-height: 56px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #0A2640;
}

.nubers_cards .nubers_card p {
  font-family: Open Sans;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0%;
  color: #0A2640;
  padding-top: 30px;
}

.ourStory_section {
  width: 100%;
  height: 624px;
  background: #0A2640;
  margin-top: 120px;

  display: flex;
  align-items: center;
  /* vertikal markaz */
  justify-content: center;
  /* gorizontal markaz */
}

.ourStory {
  max-width: 800px;
  width: 100%;
  color: #fff;
  padding: 0 20px;
  text-align: left;
  /* chapdan boshlanish */
}

.ourStory span {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #AAAAAA;
  display: block;
  margin-bottom: 16px;
}

.ourStory h1 {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 48px;
  line-height: 64px;
  color: #FFFFFF;
  margin-bottom: 24px;
}

.ourStory p {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #F1F1F1;
  padding-top: 32px;
}

.ourTeam_section {
  margin-top: 125px;
  max-width: 901px;
  margin-left: auto;
  margin-right: auto;
}

.ourTeam_section span {
  font-family: Open Sans;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #777777;
}

.ourTeam_section h1 {
  font-family: Manrope;
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #000000;
  padding-top: 12px;
}

.ourTeam_section p {
  font-family: Open Sans;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0%;
  color: #777777;
}

.ourTeamCards,
.ourTeamCards2 {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 48px;
}

.ourTeamCard,
.ourTeamCard2 {
  width: 250px;
  text-align: center;
}

.ourTeamCard img,
.ourTeamCard2 img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}

.ourTeamCard:hover,
.ourTeamCard2:hover {
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
}

.ourTeamCard h2,
.ourTeamCard2 h2 {
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 20px;
  margin-top: 16px;
  color: #000;
}

.ourTeamCard span,
.ourTeamCard2 span {
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #777;
}

.ourTeamCards2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 48px;
}

.ourTeamCard2 {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #fff;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
  max-height: 120px;
}

.ourTeamCard2 img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
}

.ourTeamCard2 h2 {
  font-family: Manrope, sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #000;
}

.ourTeamCard2 span {
  font-family: Open Sans, sans-serif;
  font-size: 14px;
  color: #777;
}

.ourTeamCard2 div {
  display: flex;
  flex-direction: column;
}

.ourBlogSection {
  width: 100%;
  height: 1093px;
  background-color: #0F2B46;
  color: white;
  padding: 80px 60px;
  font-family: 'Manrope', sans-serif;
  box-sizing: border-box;
}

.ourBlogHeader {
  text-align: center;
  margin-bottom: 60px;
}

.ourBlogHeader span {
  font-size: 16px;
  color: #cccccc;
}

.ourBlogHeader h2 {
  font-size: 36px;
  line-height: 1.4;
  font-weight: 400;
  margin-top: 16px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

hr {
  border: none;
  border-top: 1px solid #444;
  margin: 40px auto;
  width: 80%;
}

.ourBlogContent {
  display: flex;
  flex-direction: column;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.blogRow {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  align-items: flex-start;
}

.blogRow h3 {
  font-size: 40px;
  font-weight: 400;
  width: 360px;
  line-height: 1.2;
}

.blogRow .green {
  color: #3FB77D;
}

.blogRow p {
  font-size: 20px;
  color: #ccc;
  max-width: 700px;
  line-height: 1.6;
}
</style>