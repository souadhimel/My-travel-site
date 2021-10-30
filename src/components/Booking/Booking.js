import React from "react";
import "./Booking.css";
const Booking = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <section class="book" id="book">
        <h1 class="heading">
          <span>b</span>
          <span>o</span>
          <span>o</span>
          <span>k</span>
          <span class="space"></span>
          <span>n</span>
          <span>o</span>
          <span>w</span>
        </h1>

        <div class="row">
          <div class="image">
            <img src="images/book-img.svg" alt="" />
          </div>

          <form action="">
            <div class="inputBox">
              <h3>where to</h3>
              <input type="text" placeholder="place name" />
            </div>
            <div class="inputBox">
              <h3>how many</h3>
              <input type="number" placeholder="number of guests" />
            </div>
            <div class="inputBox">
              <h3>arrivals</h3>
              <input type="date" />
            </div>
            <div class="inputBox">
              <h3>leaving</h3>
              <input type="date" />
            </div>
            <input type="submit" class="btn" value="book now" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Booking;
