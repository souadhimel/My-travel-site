import React from "react";
import "./Review.css";
const Review = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <section class="review" id="review">
        <h1 class="heading">
          <span>r</span>
          <span>e</span>
          <span>v</span>
          <span>i</span>
          <span>e</span>
          <span>w</span>
        </h1>

        <div class="swiper-container review-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="box">
                <img src="images/pic1.png" alt="" />
                <h3>john deo</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  adipisci quisquam sunt nesciunt fugiat odit minus illum
                  asperiores dolorum enim sint quod ipsam distinctio molestias
                  consectetur ducimus beatae, reprehenderit exercitationem!
                </p>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="box">
                <img src="images/pic2.png" alt="" />
                <h3>john deo</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  adipisci quisquam sunt nesciunt fugiat odit minus illum
                  asperiores dolorum enim sint quod ipsam distinctio molestias
                  consectetur ducimus beatae, reprehenderit exercitationem!
                </p>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="box">
                <img src="images/pic3.png" alt="" />
                <h3>john deo</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  adipisci quisquam sunt nesciunt fugiat odit minus illum
                  asperiores dolorum enim sint quod ipsam distinctio molestias
                  consectetur ducimus beatae, reprehenderit exercitationem!
                </p>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="box">
                <img src="images/pic4.png" alt="" />
                <h3>john deo</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  adipisci quisquam sunt nesciunt fugiat odit minus illum
                  asperiores dolorum enim sint quod ipsam distinctio molestias
                  consectetur ducimus beatae, reprehenderit exercitationem!
                </p>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
