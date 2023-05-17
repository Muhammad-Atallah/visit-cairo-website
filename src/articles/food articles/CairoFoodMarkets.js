import React from "react";
import articleMainImage from "../../images/articles/Food Articles/Inside Cairo's Food Markets/main-image.jpg";
import khan from "../../images/articles/Food Articles/Inside Cairo's Food Markets/khan.jpg";
import bab from "../../images/articles/Food Articles/Inside Cairo's Food Markets/bab-zwela.jpg";
import cityStars from "../../images/articles/Food Articles/Inside Cairo's Food Markets/citystars.jpg";
import gomaa from "../../images/articles/Food Articles/Inside Cairo's Food Markets/gomaa.webp";
import azhar from "../../images/articles/Food Articles/Inside Cairo's Food Markets/azhar.jpg";
import sayeda from "../../images/articles/Food Articles/Inside Cairo's Food Markets/sayeda.jpg";

const CairoFoodMarkets = () => {
  return (
    <div className="max-w-[800px] m-auto flex flex-col gap-5 my-5 px-4">
      <img src={articleMainImage} alt="abou-shakra" />
      <h2 className="uppercase">restaurants</h2>
      <h1 className="font-bold text-lg">
        Inside Cairo's Food Markets: A Journey Through the City's Vibrant
        Culinary Scene
      </h1>
      <article className="flex flex-col gap-8 max-w-[1000px]">
        <section>
          <p className="text-xs">
            Egypt's bustling capital, Cairo, is a city of contrasts - ancient
            and modern, chaotic and peaceful, traditional and innovative.
            Nowhere is this more evident than in its food markets, which are a
            sensory overload of sights, sounds, and smells.
          </p>
        </section>
        <section className="flex gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm"></h3>
            <p className="text-xs">
              One of the most famous markets is the Khan El-Khalili, located in
              the heart of Islamic Cairo. This historic market dates back to the
              14th century and is a maze of narrow alleys filled with vendors
              selling everything from spices and dried fruits to textiles and
              jewelry. Among the food vendors, you'll find traditional Egyptian
              dishes like koshari, a hearty mix of rice, lentils, and macaroni,
              and foul, a flavorful fava bean stew.
            </p>
          </section>
          <img className="max-w-[500px]" src={khan} alt="ful" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm"></h3>
            <p className="text-xs">
              Another must-visit market is the Bab Zuweila, located near the
              southern end of the old city walls. This market is known for its
              street food, particularly the taameya (Egyptian falafel), which is
              made with fava beans instead of chickpeas. You can also find
              freshly squeezed juices, grilled meat, and shawarma wraps.
            </p>
          </section>
          <img className="max-w-[500px]" src={bab} alt="falafel" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm"></h3>
            <p className="text-xs">
              For a more upscale food market experience, head to the Citystars
              Mall in the Heliopolis district. The food court here offers a wide
              variety of international cuisine, as well as local favorites like
              grilled meats and kebabs. The mall also has a gourmet food
              section, where you can find high-quality ingredients like truffles
              and aged cheeses.
            </p>
          </section>

          <img className="max-w-[500px]" src={cityStars} alt="shakshuka" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm"></h3>
            <p className="text-xs">
              One of the most unique markets in Cairo is the Friday Market, also
              known as Souq Al Gomaa. This market is only open on Fridays and is
              located in the suburb of Nasr City. Here you'll find a mishmash of
              items, from secondhand clothing to electronic gadgets, but the
              real draw for foodies is the fresh produce and meat section. You
              can find everything from fresh fish and poultry to exotic fruits
              like mangosteen and custard apple.
            </p>
          </section>
          <img className="max-w-[500px]" src={gomaa} alt="baladi" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm"></h3>
            <p className="text-xs">
              If you're looking for a more authentic local experience, head to
              the Al-Azhar district and check out the street food stalls around
              the famous Al-Azhar Mosque. This is a popular spot for locals to
              grab a quick bite, and you'll find a variety of dishes like
              grilled meat skewers, sausages, and roasted corn.
            </p>
          </section>
          <img className="max-w-[500px]" src={azhar} alt="feteer" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm"></h3>
            <p className="text-xs">
              Finally, no visit to Cairo's food markets would be complete
              without a trip to the Sayeda Zeinab Market. This market is located
              in the neighborhood of the same name, which is known for its
              traditional Islamic architecture. Here you'll find a mix of food
              vendors selling everything from fresh produce to spices and
              sweets. The market is particularly famous for its halawa (sweet
              sesame paste) and basbousa (semolina cake soaked in syrup).
            </p>
          </section>
          <img className="max-w-[500px]" src={sayeda} alt="feteer" />
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-xs">
            In conclusion, Cairo's food markets are a true reflection of the
            city's diverse and vibrant culinary scene. Whether you're looking
            for traditional street food or upscale gourmet ingredients, you're
            sure to find it in one of the many markets scattered throughout the
            city. So next time you're in Cairo, be sure to explore its markets
            and experience the city's unique flavors for yourself.
          </p>
        </section>
      </article>
    </div>
  );
};

export default CairoFoodMarkets;
