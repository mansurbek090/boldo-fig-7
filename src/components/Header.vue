<template>
  <header>
    <div class="header-start">
      <div class="header-icon">
        <img src="../assets/headerImg/header1.png" alt="header1" />
      </div>
      <nav class="header-navabar">
        <ul class="header-router">
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
          <RouterLink :to="{ name: 'services' }">Services</RouterLink>
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
          <RouterLink :to="{ name: 'product' }">Blog</RouterLink>
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
.header-start a:hover {
  border-bottom: 2px solid red;
}
.header-start {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 36px 100px;
  position: fi;
  background-color: rgba(10, 38, 64, 1);
  align-items: center;
  z-index: 1000;
}

.header-router {
  list-style: none;
  display: flex;
  gap: 40px;
}
.header-router a {
  color: rgba(255, 255, 255, 1);
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
  background-color: rgba(255, 255, 255, 1);
}

.tbn {
  position: relative;
  bottom: 8px;
}
.header-router button:hover {
  background: rgba(10, 38, 64, 1);
  border: 2px solid rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, 1);
}
</style>
