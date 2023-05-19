import React from "react";
import koshary from "../../../images/articles/Locals' Articles/Amira Hadi/StreetFoodAdventures/koshary.jpg";
import basbousa from "../../../images/articles/Locals' Articles/Amira Hadi/StreetFoodAdventures/basbousa.webp";
import hawawshi from "../../../images/articles/Locals' Articles/Amira Hadi/StreetFoodAdventures/hawawshi.webp";
import ful from "../../../images/articles/Locals' Articles/Amira Hadi/StreetFoodAdventures/ful-medames.jpg";
import articleMainImage from "../../../images/articles/Locals' Articles/Amira Hadi/StreetFoodAdventures/main-image.jpg";

const StreetFoodAdventures = () => {
  return (
    <div className="max-w-[800px] m-auto flex flex-col gap-5 mb-5 px-4">
      <img src={articleMainImage} alt="abou-shakra" />
      <h2 className="uppercase">Food</h2>
      <h1 className="font-bold text-lg">
        Street Food Adventures: Exploring Cairo's Culinary Delights with a Local
        Foodie
      </h1>
      <article className="flex flex-col gap-8 max-w-[1000px]">
        <section>
          <p className="text-xs">
            Get ready to embark on a gastronomic adventure through the bustling
            streets of Cairo! As a passionate foodie and local resident, I'm
            thrilled to guide you through the vibrant world of Cairo's street
            food scene. From savory snacks to mouthwatering sweets, Cairo's
            culinary delights offer a fusion of flavors that will tantalize your
            taste buds and leave you craving for more. Join me, Amira Fathi, as
            we navigate the bustling streets and uncover the hidden gems of
            Cairo's street food culture.
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              Koshary: A Taste of Egypt's National Dish
            </h3>
            <p className="text-xs">
              Start your street food journey with a classic Egyptian staple –
              Koshary. This hearty and flavorsome dish is a delightful blend of
              rice, lentils, pasta, and chickpeas, topped with crispy fried
              onions and drizzled with tangy tomato sauce. Follow the locals to
              small Koshary eateries, where you can customize your bowl with a
              range of condiments and spices. Indulge in this satisfying comfort
              food that perfectly captures the essence of Egyptian cuisine.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={koshary}
            alt="koshary"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              Ful Medames: A Breakfast Tradition
            </h3>
            <p className="text-xs">
              No visit to Cairo would be complete without savoring a traditional
              Egyptian breakfast of Ful Medames. Join the locals at bustling
              street-side breakfast stalls and savor this nutritious dish made
              from slow-cooked fava beans, served with fresh vegetables,
              aromatic herbs, and a drizzle of olive oil. Pair it with freshly
              baked baladi bread, and you have a flavorsome start to your day
              that will keep you energized.
            </p>
          </section>
          <img className="max-w-[500px] self-center" src={ful} alt="ful" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              Hawawshi: A Savory Delight
            </h3>
            <p className="text-xs">
              For meat lovers, Hawawshi is a must-try street food delicacy.
              Imagine a flavorful mix of minced meat, onions, peppers, and a
              blend of aromatic spices stuffed inside a thin bread dough and
              baked to perfection. The result is a golden, crispy exterior with
              a juicy and flavorful interior. Bite into a warm Hawawshi and
              experience the explosion of flavors that make it a popular choice
              among locals and visitors alike.
            </p>
          </section>

          <img
            className="max-w-[500px] self-center"
            src={hawawshi}
            alt="hawawshi"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              Basbousa and Mahalabiya: Sweet Treats
            </h3>
            <p className="text-xs">
              End your street food adventure on a sweet note with two Egyptian
              dessert delights: Basbousa and Mahalabiya. Basbousa is a moist
              semolina cake soaked in a sweet syrup, often flavored with
              rosewater or orange blossom water, and topped with almonds or
              coconut flakes. Mahalabiya, on the other hand, is a smooth and
              creamy milk-based pudding infused with delicate flavors like rose
              or pistachio. Head to local pastry shops or street stalls to
              indulge in these delectable sweets that will satisfy your sweet
              tooth.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={basbousa}
            alt="basbousa"
          />
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-xs">
            Cairo's street food scene is a vibrant and flavorsome reflection of
            the city's culinary heritage. From the satisfying Koshary to the
            flavorful Ful Medames, the savory Hawawshi, and the sweet delights
            of Basbousa and Mahalabiya, your taste buds are in for a treat. By
            venturing into the lively streets of Cairo, you'll not only
            experience the authentic flavors of Egyptian cuisine but also
            immerse yourself in the local culture and vibrant atmosphere. So,
            grab your appetite, follow the enticing aromas, and let Cairo's
            street food delights be your guide to an unforgettable culinary
            journey.
          </p>
        </section>
      </article>
    </div>
  );
};

export default StreetFoodAdventures;
