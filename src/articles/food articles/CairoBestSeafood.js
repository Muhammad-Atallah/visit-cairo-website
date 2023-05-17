import React from "react";
import articleMainImage from "../../images/articles/Food Articles/Cairo's Best Seafood/main-image.jpg";
import fishMarket from "../../images/articles/Food Articles/Cairo's Best Seafood/fishMarket.jpg";
import horany from "../../images/articles/Food Articles/Cairo's Best Seafood/horany.jpg";
import samakmak from "../../images/articles/Food Articles/Cairo's Best Seafood/samakmak.jpg";
import akkad from "../../images/articles/Food Articles/Cairo's Best Seafood/akkad.jpg";
import aquaELuce from "../../images/articles/Food Articles/Cairo's Best Seafood/AquaELuce.jpg";
import fishAndCo from "../../images/articles/Food Articles/Cairo's Best Seafood/fishAndCo.jpg";

const CairoBestSeafood = () => {
  return (
    <div className="max-w-[800px] m-auto flex flex-col gap-5 my-5 px-4">
      <img src={articleMainImage} alt="abou-shakra" />
      <h2 className="uppercase">restaurants</h2>
      <h1 className="font-bold text-lg">
        Cairo's Best Seafood Restaurants: From Fried Fish to Grilled Shrimp
      </h1>
      <article className="flex flex-col gap-8 max-w-[1000px]">
        <section>
          <p className="text-xs">
            Cairo is known for its vibrant food scene, and seafood lovers won't
            be disappointed. From the bustling streets of Downtown to the shores
            of the Nile, there are plenty of seafood restaurants to choose from.
            Here are some of the best seafood restaurants in Cairo.
          </p>
        </section>
        <section className="flex gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Fish Market</h3>
            <p className="text-xs">
              Located in Zamalek, Fish Market is a popular seafood restaurant
              that offers a wide variety of fresh seafood dishes. From grilled
              fish to shrimp scampi, the menu is full of delicious options. The
              restaurant has a beautiful outdoor seating area with a stunning
              view of the Nile.
            </p>
          </section>
          <img className="max-w-[500px]" src={fishMarket} alt="ful" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Al Horany</h3>
            <p className="text-xs">
              Al Horany Restaurant is a hidden gem located in the Giza district
              of Cairo. The restaurant serves a variety of seafood dishes,
              including grilled fish, shrimp tagine, and seafood paella. The
              seafood is always fresh and cooked to perfection.
            </p>
          </section>
          <img className="max-w-[500px]" src={horany} alt="falafel" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Samakmak</h3>
            <p className="text-xs">
              Samakmak is a seafood restaurant located in the upscale
              neighborhood of New Cairo. The restaurant's menu includes
              everything from grilled fish to seafood paella. The outdoor
              seating area is perfect for a romantic dinner or a night out with
              friends.
            </p>
          </section>

          <img className="max-w-[500px]" src={samakmak} alt="shakshuka" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">El Akkad</h3>
            <p className="text-xs">
              El Akkad is a hidden gem in the bustling neighborhood of
              Mohandiseen. The restaurant has a cozy, rustic feel and serves
              some of the best seafood in the city. Try the grilled octopus or
              the shrimp with garlic sauce.
            </p>
          </section>
          <img className="max-w-[500px]" src={akkad} alt="baladi" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Aqua e Luce</h3>
            <p className="text-xs">
              Aqua e Luce is a seafood restaurant located in the Four Seasons
              Nile Plaza hotel. The restaurant's menu features fresh seafood
              dishes with an Italian twist. Try the grilled calamari or the
              lobster risotto.
            </p>
          </section>
          <img className="max-w-[500px]" src={aquaELuce} alt="feteer" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Fish & Co.</h3>
            <p className="text-xs">
              Fish & Co. is a casual seafood restaurant located in Citystars
              mall. The restaurant's menu includes a variety of seafood dishes,
              including fish and chips and seafood paella. The restaurant has a
              relaxed atmosphere and is a great place to grab a quick bite.
            </p>
          </section>
          <img className="max-w-[500px]" src={fishAndCo} alt="feteer" />
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-xs">
            Whether you're a seafood lover or just looking to try something new,
            these restaurants offer some of the best seafood dishes in Cairo.
            From fine dining to casual eateries, there's something for everyone.
            So, grab your fork and dive into the delicious world of Cairo's
            seafood scene.
          </p>
        </section>
      </article>
    </div>
  );
};

export default CairoBestSeafood;
