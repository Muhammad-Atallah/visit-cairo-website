import React from "react";
import articleMainImage from "../../images/articles/Food Articles/Uncovering the Hidden Gems/main-image.jpg";
import abouShakra from "../../images/articles/Food Articles/Uncovering the Hidden Gems/abou-shakra.jpg";
import elAbd from "../../images/articles/Food Articles/Uncovering the Hidden Gems/el-abd.jpg";
import fishMarket from "../../images/articles/Food Articles/Uncovering the Hidden Gems/fish-market.jpg";
import sabaya from "../../images/articles/Food Articles/Uncovering the Hidden Gems/sabaya.jpg";
import felfela from "../../images/articles/Food Articles/Uncovering the Hidden Gems/felfela.jpg";
import somaya from "../../images/articles/Food Articles/Uncovering the Hidden Gems/somaya.jpg";
import shabrawy from "../../images/articles/Food Articles/Uncovering the Hidden Gems/shabrawy.jpg";

const UncoveringTheHiddenGems = () => {
  return (
    <div className="max-w-[800px] m-auto flex flex-col gap-5 mb-5 px-4">
      <img src={articleMainImage} alt="abou-shakra" />
      <h2 className="uppercase">restaurants</h2>
      <h1 className="font-bold text-lg">
        Uncovering the Hidden Gems: Cairo's Most Underrated Restaurants
      </h1>
      <article className="flex flex-col gap-8 max-w-[1000px]">
        <section>
          <p className="text-xs">
            Cairo is a city full of culinary delights, with its streets lined
            with stalls selling delicious street food, and its restaurants
            offering some of the best Egyptian and Middle Eastern cuisine.
            However, some of the best dining experiences can be found in the
            city's underrated and lesser-known restaurants. These hidden gems
            offer visitors a chance to explore the local cuisine in a more
            authentic and less touristy setting. In this article, we'll take a
            closer look at some of Cairo's most underrated restaurants that
            deserve more attention.
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Abou Shakra</h3>
            <p className="text-xs">
              Located in the bustling neighborhood of Dokki, Abou Shakra has
              been serving some of the best Egyptian cuisine in Cairo for over
              70 years. Despite its long history and delicious food, the
              restaurant remains relatively unknown to tourists. The menu
              features classic Egyptian dishes like molokhia, koshari, and foul,
              all made with fresh ingredients and authentic flavors. The
              restaurant's signature dish is its roasted chicken, which is
              succulent and perfectly seasoned.
            </p>
          </section>
          <img className="max-w-[500px]" src={abouShakra} alt="" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">El Abd Bakery</h3>
            <p className="text-xs">
              El Abd Bakery is another hidden gem located in the neighborhood of
              Heliopolis. The bakery has been around since the early 1900s and
              is known for its delicious bread and pastries. The bakery's
              specialty is its "feteer," a flaky Egyptian pastry that can be
              filled with sweet or savory ingredients. The bakery also serves
              freshly baked bread, cakes, and cookies, all made with
              high-quality ingredients.
            </p>
          </section>
          <img className="max-w-[500px]" src={elAbd} alt="" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">El Tahrir Fish Market</h3>
            <p className="text-xs">
              Located in the bustling neighborhood of Sayeda Zeinab, El Tahrir
              Fish Market is a hidden gem that serves some of the freshest
              seafood in the city. The market has been around for over 70 years
              and is a popular spot among locals. Visitors can choose from a
              variety of fresh fish and seafood, which can be cooked on the spot
              and served with rice, salad, and tahini sauce. The market also has
              a small seating area where visitors can enjoy their meals.
            </p>
          </section>

          <img className="max-w-[500px]" src={fishMarket} alt="" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Alfa Market</h3>
            <p className="text-xs">
              Alfa Market is a hidden gem located in the neighborhood of Agouza.
              The market is known for its delicious and authentic Egyptian food,
              including grilled meats, shawarma, and falafel. The market also
              has a small grocery store that sells a variety of Middle Eastern
              spices, oils, and other ingredients. The market's casual and
              laid-back atmosphere makes it a great spot for a quick and
              delicious meal.
            </p>
          </section>
          <img className="max-w-[500px]" src={abouShakra} alt="" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Sabaya</h3>
            <p className="text-xs">
              Located in the upscale neighborhood of Zamalek, Sabaya is a hidden
              gem that serves some of the best Lebanese cuisine in Cairo. The
              restaurant's menu features a variety of traditional Lebanese
              dishes like hummus, tabbouleh, and shawarma, as well as more
              unique dishes like grilled halloumi and stuffed grape leaves. The
              restaurant's outdoor seating area offers beautiful views of the
              Nile River and is a great spot for a romantic dinner.
            </p>
          </section>
          <img className="max-w-[500px]" src={sabaya} alt="" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Felfela</h3>
            <p className="text-xs">
              Felfela is a hidden gem located in the heart of downtown Cairo.
              The restaurant has been around since the 1950s and is known for
              its delicious Egyptian and Middle Eastern cuisine. The menu
              features classic dishes like foul, falafel, and koshari, as well
              as more unique dishes like stuffed pigeon and hawawshi (a
              meat-filled pastry). The restaurant's décor is also worth
              mentioning, with its colorful tiles and beautiful murals. Fasahet
              Somaya
            </p>
          </section>

          <img className="max-w-[500px]" src={felfela} alt="" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Fasahet Somaya</h3>
            <p className="text-xs">
              Fasahet Somaya is a hidden gem located in the neighborhood of Nasr
              City. The restaurant is known for its delicious Egyptian food,
              including stuffed vegetables, molokhia, and grilled meats. The
              restaurant's menu changes daily, depending on what ingredients are
              in season, ensuring that the food is always fresh and flavorful.
              The restaurant also has a small seating area, making it a great
              spot for a quick and delicious meal.
            </p>
          </section>
          <img className="max-w-[500px]" src={somaya} alt="" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">El Shabrawy</h3>
            <p className="text-xs">
              El Shabrawy is a hidden gem located in the neighborhood of
              Mohandessin. The restaurant is known for its delicious Egyptian
              fast food, including sandwiches, shawarma, and falafel. The
              restaurant's menu features a variety of classic Egyptian dishes,
              as well as more unique items like koshari sandwiches and falafel
              wraps. The restaurant's casual and laid-back atmosphere makes it a
              great spot for a quick and delicious meal.
            </p>
          </section>
          <img className="max-w-[500px]" src={shabrawy} alt="" />
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-xs">
            In conclusion, Cairo's culinary scene is full of hidden gems that
            offer visitors a chance to explore the local cuisine in a more
            authentic and less touristy setting. From traditional Egyptian
            dishes to Middle Eastern specialties, these underrated restaurants
            offer a diverse range of flavors and experiences. So next time
            you're in Cairo, be sure to venture off the beaten path and explore
            some of these hidden gems. You won't be disappointed!
          </p>
        </section>
      </article>
    </div>
  );
};

export default UncoveringTheHiddenGems;
