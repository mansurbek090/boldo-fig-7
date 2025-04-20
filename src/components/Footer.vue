<template>
  <div class="footer-contact">
    <div class="contact-title">
      <h3>Get in touch</h3>
      <h1>Contact</h1>
    </div>
    <div class="contact-card">
      <div class="cont-card1">
        <div class="cont-ham">
          <img src="../assets/headerImg/h-2.svg" alt="h-2img" />
          <h3>Emergency</h3>
          <h5>(237) 681-812-255</h5>
          <h5>(237) 666-331-894</h5>
        </div>
      </div>
      <div class="cont-card1">
        <div class="cont-ham">
          <img src="../assets/footerImg/footer3.png" alt="h-4img" />
          <h3>Location</h3>
          <h5>0123 Some place</h5>
          <h5>987 Some country</h5>
        </div>
      </div>
      <div class="cont-card1">
        <div class="cont-ham">
          <img src="../assets/footerImg/footer2.png" alt="h-2img" />
          <h3>Email</h3>
          <h5>fildineeesoe@gmil.com</h5>
          <h5>myebstudios@gmail.com</h5>
        </div>
      </div>
      <div class="cont-card1">
        <div class="cont-ham">
          <img src="../assets/footerImg/footer1.png" alt="h-2img" />
          <h3>Working Hours</h3>
          <h5>Mon-Sat 09:00-20:00</h5>
          <h5>Sunday Emergency only</h5>
        </div>
      </div>
    </div>
  </div>
  <footer class="footerr">
    <div class="fot-top">
      <div class="fot-top1">
        <h1>Meddical</h1>
        <h5>Leading the Way in Medical Execellence, Trusted Care.</h5>
      </div>
      <div class="fot-top2">
        <h4>Important Links</h4>
        <h5>Appointment</h5>
        <h5>Doctors</h5>
        <h5>Services</h5>
        <h5>About Us</h5>
      </div>
      <div class="fot-top3">
        <h4>Contact Us</h4>
        <h5>Call: (237) 681-812-255</h5>
        <h5>Email: fildineesoe@gmail.com</h5>
        <h5>Address: 0123 Some place</h5>
        <h5>Some country</h5>
      </div>
      <div class="fot-top4">
        <h4>Newsletter</h4>
        <div class="top-oxr">
          <p>Enter your email</p>
          <img src="../assets/footerImg/footer5.png" alt="footer1" />
        </div>
      </div>
    </div>
    <div class="fot-bot">
      <div class="fotp">
        <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
      </div>
      <div class="fotic">
        <div class="ic1">
          <img src="../assets/footerImg/footer6.png" alt="footer1" />
        </div>
        <div class="ic2">
          <img src="../assets/footerImg/footer7.png" alt="footer1" />
        </div>
        <div class="ic2">
          <img src="../assets/footerImg/footer8.png" alt="footer1" />
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
.fotic img {
  width: calc(26 / 19.2 * 1vw);
  height: calc(26 / 19.2 * 1vw);
}
.cont-card1 {
  transition: 0.4s ease;
}
.cont-card1:hover {
  background: whitesmoke;
  box-shadow: 8px 8px blue;
  border-radius: 6px;
  border: 1px solid blue;
}

.fotp p {
  font-family: Work Sans;
  font-weight: calc(400 / 19.2 * 1vw);
  font-size: calc(17 / 19.2 * 1vw);
  line-height: 100%;
  color: rgba(252, 254, 254, 1);
  letter-spacing: 0%;
}
.footerr {
  width: 100%;
  height: calc(450 / 19.2 * 1vw);
  background: rgba(31, 43, 108, 1);
  color: rgba(191, 210, 248, 1);
}
.fot-top h4 {
  font-family: Work Sans;
  font-weight: calc(600 / 19.2 * 1vw);
  font-size: calc(19 / 19.2 * 1vw);
  line-height: 100%;
  letter-spacing: 0%;
  padding-bottom: calc(42 / 19.2 * 1vw);
}
.fot-bot {
  display: flex;
  padding-top: calc(45 / 19.2 * 1vw);
  gap: calc(440 / 19.2 * 1vw);
  justify-content: center;
}
.fotic {
  display: flex;
  gap: calc(20 / 19.2 * 1vw);
}
.fot-top h5 {
  font-family: Work Sans;
  font-weight: calc(400 / 19.2 * 1vw);
  font-size: calc(17 / 19.2 * 1vw);
  line-height: 140%;
  letter-spacing: 0%;
  padding-bottom: calc(9 / 19.2 * 1vw);
}
.fot-top1 h1 {
  font-family: Yeseva One;
  font-weight: calc(400 / 19.2 * 1vw);
  font-size: calc(37 / 19.2 * 1vw);
  line-height: 100%;
  letter-spacing: 0%;
}
.fot-top1 h5 {
  width: calc(256 / 19.2 * 1vw);
  font-family: Work Sans;
  padding-top: calc(19 / 19.2 * 1vw);
  font-weight: calc(400 / 19.2 * 1vw);
  font-size: calc(19 / 19.2 * 1vw);
  line-height: 140%;
  letter-spacing: 0%;
}
.top-oxr {
  width: calc(290 / 19.2 * 1vw);
  display: flex;
  height: calc(50 / 19.2 * 1vw);
  background: rgba(191, 210, 248, 1);
  color: rgba(31, 43, 108, 1);
  transition: 0.5s ease;
}
.top-oxr:hover {
  background: red;
}
.top-oxr img {
  width: calc(25 / 19.2 * 1vw);
  height: calc(20 / 19.2 * 1vw);
  margin: calc(16 / 19.2 * 1vw);
}
.top-oxr p {
  padding-top: calc(15 / 19.2 * 1vw);
  padding-left: calc(29 / 19.2 * 1vw);

  padding-right: calc(27 / 19.2 * 1vw);
  font-family: Work Sans;
  font-weight: calc(400 / 19.2 * 1vw);
  font-size: calc(17 / 19.2 * 1vw);
  line-height: 140%;
  letter-spacing: 0%;
  color: rgba(31, 43, 108, 1);
}

.fot-top {
  display: flex;
  padding-bottom: calc(53 / 19.2 * 1vw);
  gap: calc(50 / 19.2 * 1vw);
  padding-top: calc(75 / 19.2 * 1vw);
  justify-content: center;
  border: 1px solid rgba(191, 210, 248, 1);
}

.footer-contact {
  width: 100%;
  height: calc(540 / 19.2 * 1vw);
  padding-top: calc(70 / 19.2 * 1vw);
  justify-items: center;
}
.contact-title {
  padding-bottom: calc(70 / 19.2 * 1vw);
  text-align: centere;
}
.cont-ham {
  padding-top: calc(55 / 19.2 * 1vw);
  padding-left: calc(28 / 19.2 * 1vw);
}
.contact-title h3 {
  font-family: Work Sans;
  font-weight: calc(800 / 19 * 1vw);
  font-size: calc(19 / 19 * 1vw);
  padding-bottom: calc(9 / 19.2 * 1vw);
  line-height: 100%;
  letter-spacing: 16%;
  color: rgba(21, 158, 236, 1);
}

.contact-title h1 {
  font-family: Yeseva One;
  font-weight: calc(400 / 19.2 * 1vw);
  font-size: calc(33 / 19.2 * 1vw);
  line-height: 100%;
  letter-spacing: 0%;
  color: rgba(31, 43, 108, 1);
  font-family: Yeseva One;
}
.contact-card {
  display: flex;
  gap: calc(25 / 19.2 * 1vw);
}

.cont-card1 {
  width: calc(260 / 19.2 * 1vw);
  height: calc(250 / 19.2 * 1vw);
  background: rgb(204, 206, 213);
}
.cont-card1:nth-child(2) {
  background: rgba(31, 43, 108, 1);
}
.cont-card1:nth-child(2) h3 {
  color: rgba(191, 210, 248, 1);
  font-family: Work Sans;
}
.cont-card1:nth-child(2) h5 {
  color: rgba(191, 210, 248, 1);
}

.cont-card1 img {
  width: calc(42 / 19.2 * 1vw);
  width: calc(40 / 19.2 * 1vw);
}
.cont-card1 h3 {
  font-weight: calc(700 / 19.2 * 1vw);
  font-family: Work Sans;

  font-size: calc(19 / 19.2 * 1vw);
  line-height: 100%;
  letter-spacing: 0%;
  padding-top: calc(13 / 19.2 * 1vw);
  color: rgba(31, 43, 108, 1);
  padding-bottom: calc(9 / 19.2 * 1vw);
}
.cont-card1 h5 {
  font-weight: calc(400 / 19.2 * 1vw);
  font-size: calc(17 / 19.2 * 1vw);
  line-height: 140%;
  letter-spacing: 0%;
  color: rgba(31, 43, 108, 1);
  padding-bottom: calc(6 / 19.2 * 1vw);
}
</style>
