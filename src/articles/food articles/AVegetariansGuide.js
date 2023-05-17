import React from "react";
import articleMainImage from "../../images/articles/Food Articles/A Vegetarian's Guide to Eating in Cairo/main-image.jpg";
import koshary from "../../images/articles/Food Articles/A Vegetarian's Guide to Eating in Cairo/koshari.webp";
import Mahshi from "../../images/articles/Food Articles/A Vegetarian's Guide to Eating in Cairo/mahshi.jpg";
import baba from "../../images/articles/Food Articles/A Vegetarian's Guide to Eating in Cairo/baba-ganoush.jpg";
import Molokhiya from "../../images/articles/Food Articles/A Vegetarian's Guide to Eating in Cairo/molokhiya.jpg";
import Moussaka from "../../images/articles/Food Articles/A Vegetarian's Guide to Eating in Cairo/mossakka.jpg";
import Eggah from "../../images/articles/Food Articles/A Vegetarian's Guide to Eating in Cairo/eggah.jpg";

const AVegetariansGuide = () => {
  return (
    <div className="max-w-[800px] m-auto flex flex-col gap-5 mb-5 px-4">
      <img src={articleMainImage} alt="abou-shakra" />
      <h2 className="uppercase">restaurants</h2>
      <h1 className="font-bold text-lg">
        A Vegetarian's Guide to Eating in Cairo: Delicious Meat-Free Options to
        Try
      </h1>
      <article className="flex flex-col gap-8 max-w-[1000px]">
        <section>
          <p className="text-xs">
            As a vegetarian traveler in Cairo, you may feel that you are limited
            in your dining options, given the prominence of meat in the local
            cuisine. However, fear not – Cairo offers plenty of delicious
            meat-free dishes that will satisfy your hunger and delight your
            taste buds. Here's a guide to some of the best vegetarian options in
            the city:
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Koshary</h3>
            <p className="text-xs">
              Koshary is one of the most famous Egyptian dishes, and it just
              happens to be vegetarian. This hearty and filling meal is made of
              rice, lentils, macaroni, and chickpeas, topped with a tangy tomato
              sauce and crispy fried onions. You can find Koshary in many local
              restaurants and street food stalls.
            </p>
          </section>
          <img className="max-w-[500px]" src={koshary} alt="ful" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Mahshi</h3>
            <p className="text-xs">
              Mahshi is a classic Egyptian dish made of vegetables, such as
              zucchini, eggplant, and peppers, stuffed with rice, herbs, and
              spices. It is usually served with tomato sauce and yogurt.
            </p>
          </section>
          <img className="max-w-[500px]" src={Mahshi} alt="falafel" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Baba Ghanoush</h3>
            <p className="text-xs">
              Baba Ghanoush is a classic Middle Eastern dip made of grilled
              eggplant, tahini, garlic, and lemon juice. It is often served as a
              starter or a side dish with fresh pita bread or vegetables.
            </p>
          </section>

          <img className="max-w-[500px]" src={baba} alt="shakshuka" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Molokhiya</h3>
            <p className="text-xs">
              Molokhiya is a traditional Egyptian dish made with jute leaves and
              often served with rice. It has a slightly slimy texture but is
              packed with nutrients and flavor. Vegetarian versions of molokhiya
              are typically made with vegetable broth, and sometimes tofu or
              mushrooms are added for extra protein.
            </p>
          </section>
          <img className="max-w-[500px]" src={Molokhiya} alt="baladi" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Egyptian Moussaka</h3>
            <p className="text-xs">
              Egyptian moussaka is a vegetarian version of the popular Greek
              dish. Instead of eggplant, it is made with potatoes, onions, and
              tomato sauce, and is often topped with a layer of bechamel sauce.
              It's a hearty and comforting dish that is perfect for vegetarians
              who want to try something new.
            </p>
          </section>
          <img className="max-w-[500px]" src={Moussaka} alt="feteer" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Eggah</h3>
            <p className="text-xs">
              Eggah is a traditional Egyptian omelette that is usually filled
              with vegetables like onions, tomatoes, and bell peppers, as well
              as herbs like parsley and cilantro. It is often served with pita
              bread and a side salad, making it a filling and nutritious meal.
              Vegetarians can also add cheese or mushrooms to the omelette for
              extra flavor and protein.
            </p>
          </section>
          <img className="max-w-[500px]" src={Eggah} alt="feteer" />
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-xs">
            Vegetarians traveling to Cairo need not worry about finding
            delicious meat-free options. From traditional dishes like Koshary
            and Foul to street food staples like Taameya and Hawawshi, there is
            no shortage of vegetarian options in this vibrant city. Don't be
            afraid to try new dishes and experiment with different flavors and
            spices – you might just discover your new favorite dish.
          </p>
        </section>
      </article>
    </div>
  );
};

export default AVegetariansGuide;
