import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import "swiper/css/pagination";
import "./discount.scss";

import cat_img_1 from "../../assets/images/icons/disc_card1.png";
import cat_img_2 from "../../assets/images/icons/disc_card2.png";
import cat_img_3 from "../../assets/images/icons/disc_card1.png";
import cat_img_4 from "../../assets/images/icons/disc_card2.png";

const DISCOUNTS = [
  {
    image: cat_img_1,
    name: "3 средние пиццы от 999 рублей",
    backgroundColor: "#FF7010",
  },
  {
    image: cat_img_2,
    name: "Кэшбек 10% на самовывоз (доставка)",
    backgroundColor: "#E23535",
  },
  {
    image: cat_img_3,
    name: "3 средние пиццы от 999 рублей",
    backgroundColor: "#FF7010",
  },
  {
    image: cat_img_4,
    name: "Кэшбек 10% на самовывоз (доставка)",
    backgroundColor: "#E23535",
  },
];

export class Discounts extends Component {
  render() {
    return (
      <section id="discounts">
        <Container>
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              456: {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 3.5,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {DISCOUNTS.map((el, i) => (
              <SwiperSlide key={i}>
                <div
                  className="discount-card"
                  style={{ backgroundColor: el.backgroundColor }}
                >
                  <img src={el.image} alt={el.name} />
                  <p>{el.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    );
  }
}

export default Discounts;
