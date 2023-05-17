import React from "react";
import articleMainImage from "../../images/articles/Food Articles/Exploring the Best Local Street Food in Cairo/main-image.jpg";
import falafel from "../../images/articles/Food Articles/Exploring the Best Local Street Food in Cairo/falafel.jpg";
import ful from "../../images/articles/Food Articles/Exploring the Best Local Street Food in Cairo/ful.jpg";
import koshari from "../../images/articles/Food Articles/Exploring the Best Local Street Food in Cairo/koshari.jpg";
import hawawshi from "../../images/articles/Food Articles/Exploring the Best Local Street Food in Cairo/hawawshi.png";
import feteer from "../../images/articles/Food Articles/Exploring the Best Local Street Food in Cairo/feteer.jpg";

const ExploringTheBestStreetFood = () => {
  return (
    <div className="max-w-[800px] m-auto flex flex-col gap-5 mb-5 px-4">
      <img src={articleMainImage} alt="abou-shakra" />
      <h2 className="uppercase">restaurants</h2>
      <h1 className="font-bold text-lg">
        Exploring the Best Local Street Food in Cairo: A Guide for Adventurous
        Eaters
      </h1>
      <article className="flex flex-col gap-8 max-w-[1000px]">
        <section>
          <p className="text-xs">
            Egypt is known for its rich history, stunning architecture, and
            delicious food. And when it comes to food, street food is where the
            real magic happens. In Cairo, you'll find a wide range of street
            food options that are not only delicious but also affordable. Here's
            a guide to help you explore some of the best local street food in
            Cairo.
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Ta'ameya (Falafel)</h3>
            <p className="text-xs">
              Ta'ameya, also known as falafel, is one of the most popular street
              foods in Cairo. Made with ground fava beans, herbs, and spices,
              these deep-fried balls are crispy on the outside and soft on the
              inside. They are typically served with pita bread, tahini sauce,
              and a variety of vegetables. You can find ta'ameya stands
              throughout the city, but some of the best ones are located in the
              neighborhood of Mohandessin.
            </p>
          </section>
          <img className="max-w-[500px] self-center" src={falafel} alt="" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Koshari</h3>
            <p className="text-xs">
              Koshari is an Egyptian dish that consists of rice, lentils,
              macaroni, and chickpeas, topped with tomato sauce and crispy fried
              onions. This hearty and filling dish is a staple in Cairo's street
              food scene and can be found at many food carts and small
              restaurants throughout the city. One of the most popular places to
              try koshari is at Abu Tarek, a restaurant that has been serving
              this dish since 1950.
            </p>
          </section>
          <img className="max-w-[500px] self-center" src={koshari} alt="" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Feteer Meshaltet</h3>
            <p className="text-xs">
              Feteer Meshaltet is a type of Egyptian pastry that is similar to
              puff pastry. It is made with layers of dough that are brushed with
              ghee or oil, then folded and rolled out again several times to
              create a flaky texture. Feteer Meshaltet can be filled with a
              variety of ingredients, including cheese, meat, vegetables, or
              sweet fillings like honey and nuts. You can find Feteer Meshaltet
              stands in many areas of Cairo, but some of the best ones are
              located in the neighborhood of Al-Hussein.
            </p>
          </section>

          <img className="max-w-[500px] self-center" src={feteer} alt="" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Hawawshi</h3>
            <p className="text-xs">
              Hawawshi is a popular Egyptian street food that is similar to a
              meat pie. It is made with a mixture of ground beef or lamb,
              onions, and herbs, which is then stuffed into a pocket of pita
              bread and baked until crispy. Hawawshi is typically served with
              tahini sauce, pickles, and sometimes hot sauce. One of the most
              popular places to try hawawshi is at the famous Mohammed Ahmed
              restaurant in the neighborhood of Dokki.
            </p>
          </section>
          <img className="max-w-[500px] self-center" src={hawawshi} alt="" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Ful Medames</h3>
            <p className="text-xs">
              Ful Medames is a classic Egyptian breakfast dish that is made with
              slow-cooked fava beans, olive oil, lemon juice, and a variety of
              spices. It is typically served with pita bread, chopped tomatoes,
              onions, and sometimes boiled eggs. Ful Medames can be found at
              many street food carts and small restaurants throughout Cairo, but
              one of the best places to try it is at the iconic El Abd Bakery in
              the neighborhood of Downtown.
            </p>
          </section>
          <img className="max-w-[500px] self-center" src={ful} alt="" />
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-xs">
            Cairo's street food scene is a must-try for adventurous eaters. From
            the popular ta'ameya and koshari to the lesser-known Feteer
            Meshaltet and Hawawshi, there is something for everyone to enjoy.
            These dishes are not only delicious but also affordable, making them
            a great way to experience the local culture and cuisine. So the next
            time you find yourself in Cairo, be sure to explore the city's
            vibrant street food scene and indulge in some of the best local
            cuisine.
          </p>
        </section>
      </article>
    </div>
  );
};

export default ExploringTheBestStreetFood;
