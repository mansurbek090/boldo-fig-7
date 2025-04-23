<template>
  <section class="hero">
    <h6>blog</h6>
    <h1>Thoughts and words</h1>
    <div class="hero-card">
      <img src="../assets/blogImg/Rectangle 1270.png" alt="rectanle" />
      <div class="hero-card-text">
        <h6>Category <span>November 22, 2021</span></h6>
        <h2>Pitch termsheet backing validation focus release.</h2>
        <div>
          <img src="../assets/blogImg/img1.svg" alt="" />
          <p>Chandler Bing</p>
        </div>
      </div>
    </div>
  </section>
  <hr />
  <section class="latest-news">
    <h2>Latest news</h2>
    <div class="latest-news-cards">
      <div>
        <img src="../assets/blogImg/img1.png" alt="img1" />
        <h6>Category <span>November 22, 2021</span></h6>
        <p>Pitch termsheet backing validation focus release.</p>
        <div>
          <img src="../assets/blogImg/img1.svg" alt="img1" />
          <p>Chandler Bing</p>
        </div>
      </div>
      <div>
        <img src="../assets/blogImg/img2.png" alt="img1" />
        <h6>Category <span>November 22, 2021</span></h6>
        <p>
          Seed round direct mailing non-disclosure agreement graphical user
          interface rockstar.
        </p>
        <div>
          <img src="../assets/blogImg/img2.svg" alt="img1" />
          <p>Rachel Green</p>
        </div>
      </div>
      <div>
        <img src="../assets/blogImg/img3.png" alt="img1" />
        <h6>Category <span>November 22, 2021</span></h6>
        <p>
          Beta prototype sales iPad gen-z marketing network effects value
          proposition
        </p>
        <div>
          <img src="../assets/blogImg/img3.svg" alt="img1" />
          <p>Monica Geller</p>
        </div>
      </div>
      <div>
        <img src="../assets/blogImg/img4.png" alt="img1" />
        <h6>Category <span>November 22, 2021</span></h6>
        <p>Pitch termsheet backing validation focus release.</p>
        <div>
          <img src="../assets/blogImg/img1.svg" alt="img1" />
          <p>Chandler Bing</p>
        </div>
      </div>
      <div>
        <img src="../assets/blogImg/img5.png" alt="img1" />
        <h6>Category <span>November 22, 2021</span></h6>
        <p>
          Seed round direct mailing non-disclosure agreement graphical user
          interface rockstar.
        </p>
        <div>
          <img src="../assets/blogImg/img2.svg" alt="img1" />
          <p>Rachel Green</p>
        </div>
      </div>
      <div>
        <img src="../assets/blogImg/img6.png" alt="img1" />
        <h6>Category <span>November 22, 2021</span></h6>
        <p>
          Beta prototype sales iPad gen-z marketing network effects value
          proposition
        </p>
        <div>
          <img src="../assets/blogImg/img3.svg" alt="img1" />
          <p>Monica Geller</p>
        </div>
      </div>
    </div>
    <button>Load more</button>
  </section>
</template>
<script>
export default {}
</script>
<style scoped>
.hero {
  padding: 72px 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.hero > h6 {
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  text-transform: capitalize;
}
.hero > h1 {
  padding-top: 12px;
  font-weight: 400;
  font-size: 64px;
  line-height: 84px;
}
.hero-card {
  padding-top: 60px;
  display: flex;
  align-items: center;
  column-gap: 100px;
}
.hero-card > img {
  width: 500px;
  height: 386px;
  border-radius: 24px;
}
.hero-card-text > h6 {
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: #0a2640;
}
.hero-card-text > h6 > span {
  color: #777777;
}
.hero-card-text > h2 {
  padding-top: 12px;
  font-weight: 400;
  font-size: 46px;
  line-height: 62px;
}
.hero-card-text > div {
  padding-top: 20px;
  display: flex;
  align-items: center;
  column-gap: 12px;
}
.hero-card-text > div > img {
  width: 32px;
  height: 32px;
}
.hero-card-text > div > p {
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
}
hr {
  width: 85%;
  margin-left: 100px;
}
.latest-news {
  padding: 96px 170px;
}
.latest-news > h2 {
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
}
.latest-news-cards {
  padding-top: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 80px 50px;
}
.latest-news-cards > div {
  width: 300px;
  height: auto;
}
.latest-news-cards > div > img {
  width: 300px;
  height: 209px;
  border-radius: 12px;
}
.latest-news-cards > div > h6 {
  padding: 24px 0 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: #0a2640;
}
.latest-news-cards > div > h6 > span {
  color: #777777;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
}
.latest-news-cards > div > p {
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  height: 120px;
}
.latest-news-cards > div > div {
  padding-top: 20px;
  display: flex;
  align-items: center;
  column-gap: 12px;
}
.latest-news-cards > div > div > img {
  width: 32px;
  height: 32px;
}
.latest-news-cards > div > div > p {
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
}
.latest-news > button {
  margin: 96px 391px 0;
  padding: 16px 56px;
  border-radius: 56px;
  border: 1px solid #0a2640;
  background-color: white;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #0a2640;
}
</style>
