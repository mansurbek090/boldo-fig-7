<template>
  <footer>
    <div class="footer-start">
      <h2>An enterprise template to ramp up your company website</h2>
      <form>
        <input type="email" placeholder="Your email address" />
        <button>Start now</button>
      </form>
    </div>
    <div class="footer-end">
      <div>
        <img src="../assets/aboutImg/Logo.png" alt="logo" />
        <p>
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <h6>All rights reserved.</h6>
      </div>
      <div>
        <h3>Landings</h3>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/services">Services</router-link>
        </nav>
      </div>
      <div>
        <h3>Company</h3>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/careers">Careers</router-link>
          <router-link to="/services">Services</router-link>
        </nav>
      </div>
      <div>
        <h3>Resources</h3>
        <nav>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/services">Services</router-link>
        </nav>
      </div>
    </div>
  </footer>
</template>
<script>
import { RouterLink } from 'vue-router'
export default {}
</script>
<style scoped>
footer {
  padding: 124px 100px;
}
.footer-start {
  border-radius: 15px;
  padding: 72px 205px;
  background-image: url('../assets/aboutImg/img2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  background: #0a2640;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.footer-start > h2 {
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  letter-spacing: 0%;
  text-align: center;
  color: #ffffff;
}
.footer-start > form {
  padding-top: 48px;
  display: flex;
  align-items: center;
  column-gap: 24px;
}
.footer-start > form > input {
  width: 370px;
  height: auto;
  border-radius: 240px;
  padding: 16px 32px;
  outline: none;
  border: 2px solid #ffffff;
  font-weight: 400;
  font-size: 18px;
}

.footer-start > form > button {
  padding: 16px 56px;
  height: auto;
  border-radius: 56px;
  background: #65e4a3;
  border: 2px solid #65e4a3;
  font-weight: 700;
  font-size: 18px;
  color: #0a2640;
}
.footer-end {
  padding: 184px 0 0 0;
  display: flex;
  align-items: start;
  column-gap: 64px;
}
.footer-end > div > img {
  width: 156px;
  height: 41px;
}
.footer-end > div:nth-child(1) {
  padding-right: 200px;
}
.footer-end > div > p {
  padding: 40px 0 64px;
  width: 330px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #777777;
}
.footer-end > div > h6 {
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #777777;
}
.footer-end > div > h3 {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
}
.footer-end > div > nav {
  display: flex;
  align-items: start;
  flex-direction: column;
}
.footer-end > div > nav > a,
.footer-end > div > nav > routerLink {
  font-family: Open Sans, sans-serif;
  padding-top: 32px;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #777777;
  text-decoration: none;
}
</style>
