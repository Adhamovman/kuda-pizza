import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import "swiper/css/pagination";
import "./categories.scss";

import cat_img_1 from "../../assets/images/icons/fire.svg";
import cat_img_2 from "../../assets/images/icons/pizza.svg";
import cat_img_3 from "../../assets/images/icons/sushi.svg";
import cat_img_4 from "../../assets/images/icons/soda.svg";
import cat_img_5 from "../../assets/images/icons/snack.svg";
import cat_img_6 from "../../assets/images/icons/combe.svg";
import cat_img_7 from "../../assets/images/icons/dessert.svg";
import cat_img_8 from "../../assets/images/icons/sauce.svg";

const CATEGORIES = [
  {
    image: cat_img_1,
    name: "Акции",
  },
  {
    image: cat_img_2,
    name: "Пицца",
  },
  {
    image: cat_img_3,
    name: "Суши",
  },
  {
    image: cat_img_4,
    name: "Напитки",
  },
  {
    image: cat_img_5,
    name: "Закуски",
  },
  {
    image: cat_img_6,
    name: "Комбо",
  },
  {
    image: cat_img_7,
    name: "Десерты",
  },
  {
    image: cat_img_8,
    name: "Соусы",
  },
];

export class Categories extends Component {
  render() {
    return (
      <section id="categories">
        <Container>
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              456: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5.5,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {CATEGORIES.map((el, i) => (
              <SwiperSlide key={i}>
                <div className="category-card">
                  <img src={el.image} alt={el.name} />
                  <p className="huge-p">{el.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    );
  }
}

export default Categories;
