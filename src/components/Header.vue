<template>
  <header>
    <div class="header-start">
      <div class="header-icon">
        <img src="../assets/headerImg/header1.png" alt="header1" />
        <h1>Boldo</h1>
      </div>
      <nav class="header-navabar">
        <ul class="header-router">
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
          <RouterLink :to="{ name: 'product' }">Product</RouterLink>
          <RouterLink :to="{ name: 'services' }">Services</RouterLink>
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
          <div class="tbn">
            <button>Log in</button>
          </div>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
export default {};
</script>

<style scoped>
.header-start {
  width: 100%;
  display: flex;
  height: calc(45 / 19.2 * 1vw);
  justify-content: space-around;
  padding-bottom: calc(150 / 19.2 * 1vw);
  padding-top: calc(60 / 19.2 * 1vw);
  gap: 500px;
}

.header-icon {
  display: flex;
}
.header-icon img {
  width: 26px;
  height: 34px;
}
.header-icon h1 {
  font-family: Manrope;
  font-weight: 700;
  font-size: 43.25px;
  line-height: 33.64px;
  letter-spacing: 0%;
  color: rgba(10, 38, 64, 1);
  padding-left: 12px;
}

.header-router {
  list-style: none;
  display: flex;
  gap: 40px;
}

.header-router button {
  width: 130px;
  height: 40px;
  border: 2px solid rgba(10, 38, 64, 1);
  border-radius: 25px;
  font-family: Open Sans;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0%;
  color: rgba(10, 38, 64, 1);
  background: none;
  transition: 0.6s ease;
}

.tbn {
  position: relative;
  bottom: 8px;
}
.header-router button:hover {
  background: rgba(10, 38, 64, 1);
  border: 2px solid rgb(172, 209, 245);
  color: rgb(172, 209, 245);
}
</style>
