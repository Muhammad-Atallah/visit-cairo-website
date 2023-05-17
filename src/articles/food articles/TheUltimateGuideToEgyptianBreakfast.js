import React from "react";
import articleMainImage from "../../images/articles/Food Articles/The Ultimate Guide to Egyptian Breakfast/main-image.jpg";
import ful from "../../images/articles/Food Articles/The Ultimate Guide to Egyptian Breakfast/ful.jpg";
import feteer from "../../images/articles/Food Articles/The Ultimate Guide to Egyptian Breakfast/feteer.jpg";
import falafel from "../../images/articles/Food Articles/The Ultimate Guide to Egyptian Breakfast/falafel.jpeg";
import shakshuka from "../../images/articles/Food Articles/The Ultimate Guide to Egyptian Breakfast/shakshuka.jpg";
import baladi from "../../images/articles/Food Articles/The Ultimate Guide to Egyptian Breakfast/baladi.jpg";

const TheUltimateGuideToEgyptianBreakfast = () => {
  return (
    <div className="max-w-[800px] m-auto flex flex-col gap-5 mb-5 px-4">
      <img src={articleMainImage} alt="abou-shakra" />
      <h2 className="uppercase">restaurants</h2>
      <h1 className="font-bold text-lg">
        The Ultimate Guide to Egyptian Breakfast: Where to Find the Best Foul,
        Taameya, and More
      </h1>
      <article className="flex flex-col gap-8 max-w-[1000px]">
        <section>
          <p className="text-xs">
            Egypt is known for its rich and diverse culinary scene, and
            breakfast is no exception. Here are six must-try Egyptian breakfast
            dishes that you shouldn't miss on your next visit to Cairo:
          </p>
        </section>
        <section className="flex gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Ful</h3>
            <p className="text-xs">
              Ful (pronounced "fool") is a traditional Egyptian breakfast dish
              made with cooked fava beans, which are typically mashed and
              flavored with olive oil, lemon juice, garlic, and spices. It is
              typically served with pita bread and topped with a variety of
              ingredients, such as chopped tomatoes, onions, and herbs. One of
              the best places to try foul in Cairo is at Foul El Gamel, a small
              restaurant located in the neighborhood of Al-Hussein.
            </p>
          </section>
          <img className="max-w-[500px] self-center" src={ful} alt="ful" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Taameya</h3>
            <p className="text-xs">
              Taameya, also known as falafel, is a popular Egyptian breakfast
              food made with ground fava beans, herbs, and spices. It is
              typically served with pita bread, tahini sauce, and a variety of
              vegetables. While taameya can be found throughout Cairo's street
              food scene, one of the best places to try it is at GAD, a small
              restaurant located in the neighborhood of Zamalek.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={falafel}
            alt="falafel"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Shakshuka</h3>
            <p className="text-xs">
              Shakshuka is a North African breakfast dish that has become
              increasingly popular in Egypt in recent years. It consists of eggs
              that are poached in a spicy tomato sauce, along with onions,
              garlic, and a variety of herbs and spices. Shakshuka can be found
              at many restaurants throughout Cairo, but one of the best places
              to try it is at Bab El Nil, a trendy cafe located in the
              neighborhood of Maadi.
            </p>
          </section>

          <img
            className="max-w-[500px] self-center"
            src={shakshuka}
            alt="shakshuka"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Baladi Bread</h3>
            <p className="text-xs">
              Baladi bread is a staple in Egyptian cuisine and is typically
              eaten with breakfast. It is a type of flatbread made with whole
              wheat flour and has a slightly sour taste. Baladi bread can be
              found at many bakeries throughout Cairo, but one of the best
              places to try it is at El Abd Bakery, a historic bakery located in
              the neighborhood of Downtown.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={baladi}
            alt="baladi"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Feteer</h3>
            <p className="text-xs">
              Feteer is a type of Egyptian pastry that is similar to puff
              pastry. It is made with layers of dough that are brushed with ghee
              or oil, then folded and rolled out again several times to create a
              flaky texture. Feteer can be filled with a variety of ingredients,
              including cheese, meat, vegetables, or sweet fillings like honey
              and nuts. One of the best places to try feteer in Cairo is at
              Feteer Meshaltet El Rezk, a popular bakery located in the
              neighborhood of Mohandessin.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={feteer}
            alt="feteer"
          />
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-xs">
            Egypt's breakfast scene is a must-try for anyone visiting the
            country. From the traditional foul and taameya to the newer
            shakshuka and the unique kushari, there is something for everyone to
            enjoy. Baladi bread and feteer are also not to be missed, as they
            are essential parts of the Egyptian breakfast experience. By trying
            these dishes at some of Cairo's best restaurants and bakeries,
            you'll get a taste of the country's rich culinary heritage and local
            flavors.
          </p>
        </section>
      </article>
    </div>
  );
};

export default TheUltimateGuideToEgyptianBreakfast;
