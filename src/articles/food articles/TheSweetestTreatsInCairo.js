import React from "react";
import articleMainImage from "../../images/articles/Food Articles/The Sweetest Treats in Cairo/main-image.jpg";
import basbousa from "../../images/articles/Food Articles/The Sweetest Treats in Cairo/basbousa.jpg";
import qatayef from "../../images/articles/Food Articles/The Sweetest Treats in Cairo/qatayef.jpg";
import omALi from "../../images/articles/Food Articles/The Sweetest Treats in Cairo/Umm-Ali.jpg";
import konafa from "../../images/articles/Food Articles/The Sweetest Treats in Cairo/kunafa.jpg";
import mahalabiya from "../../images/articles/Food Articles/The Sweetest Treats in Cairo/mahalabiya.jpg";
import baklava from "../../images/articles/Food Articles/The Sweetest Treats in Cairo/baklava.jpg";
import rozBeLaban from "../../images/articles/Food Articles/The Sweetest Treats in Cairo/roz-bel-laban.jpg";

const TheSweetestTreatsInCairo = () => {
  return (
    <div className="max-w-[800px] m-auto flex flex-col gap-5 my-5">
      <img src={articleMainImage} alt="abou-shakra" />
      <h2 className="uppercase">restaurants</h2>
      <h1 className="font-bold text-lg">
        The Sweetest Treats in Cairo: A Dessert Lover's Guide
      </h1>
      <article className="flex flex-col gap-8 max-w-[1000px]">
        <section>
          <p className="text-xs">
            Cairo has a vibrant food scene, and its desserts are no exception.
            From traditional Egyptian sweets to modern twists on classic
            desserts, Cairo is a haven for dessert lovers. Here are some of the
            sweetest treats to try in Cairo:
          </p>
        </section>
        <section className="flex gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Basbousa</h3>
            <p className="text-xs">
              Basbousa is a traditional Egyptian cake made from semolina,
              coconut, and soaked in a sweet syrup. It is typically served with
              a dollop of whipped cream or a sprinkle of pistachios. One of the
              best places to try basbousa in Cairo is at El Abd Patisserie, a
              historic bakery located in the neighborhood of Downtown.
            </p>
          </section>
          <img className="max-w-[500px]" src={basbousa} alt="ful" />
        </section>
        <section className="flex gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Qatayef</h3>
            <p className="text-xs">
              Qatayef is a popular dessert in Egypt during Ramadan, but it can
              be found year-round in many Cairo bakeries. It is a small,
              pancake-like pastry filled with a sweet mixture of cheese, nuts,
              or cream. Qatayef is typically fried and then soaked in a sweet
              syrup, making it a perfect indulgence for anyone with a sweet
              tooth.
            </p>
          </section>
          <img className="max-w-[500px]" src={qatayef} alt="falafel" />
        </section>
        <section className="flex gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Om Ali</h3>
            <p className="text-xs">
              Om Ali is a traditional Egyptian dessert that is similar to bread
              pudding. It is made with layers of phyllo pastry, milk, nuts, and
              raisins, and then baked until golden brown. Once it is done
              baking, it is typically served hot and topped with a generous
              drizzle of sweet syrup. One of the best places to try Om Ali in
              Cairo is at Zooba, a trendy restaurant located in the neighborhood
              of Zamalek.
            </p>
          </section>

          <img className="max-w-[500px]" src={omALi} alt="shakshuka" />
        </section>
        <section className="flex gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Konafa</h3>
            <p className="text-xs">
              Konafa is a popular Middle Eastern dessert made with shredded
              phyllo pastry that is layered with sweet cheese or cream and then
              soaked in a sweet syrup. It is typically served hot and can be
              found in many Cairo bakeries and sweet shops. One of the best
              places to try konafa in Cairo is at Abu Auf, a famous dessert shop
              located in the neighborhood of Heliopolis.
            </p>
          </section>
          <img className="max-w-[500px]" src={konafa} alt="baladi" />
        </section>
        <section className="flex gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Mahalabiya</h3>
            <p className="text-xs">
              Mahalabiya is a creamy, pudding-like dessert that is typically
              made with milk, sugar, and cornstarch. It is flavored with rose
              water, cardamom, or other spices and can be topped with a variety
              of ingredients such as pistachios, almonds, or dried fruit.
              Mahalabiya is typically served cold and can be found in many
              traditional Egyptian restaurants, as well as modern cafes.
            </p>
          </section>
          <img className="max-w-[500px]" src={mahalabiya} alt="feteer" />
        </section>
        <section className="flex gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Baklava</h3>
            <p className="text-xs">
              Baklava is a sweet pastry made with layers of phyllo dough,
              butter, and a nut filling, usually pistachios or walnuts. It's
              crispy and flaky on the outside, and soft and nutty on the inside.
              Try it at Al Sultan in Maadi, a family-owned restaurant that
              serves some of the best baklava in town.
            </p>
          </section>
          <img className="max-w-[500px]" src={baklava} alt="feteer" />
        </section>
        <section className="flex gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Roz Bel Laban</h3>
            <p className="text-xs">
              Roz Bel Laban is a creamy rice pudding that's flavored with
              rosewater and topped with pistachios and/or almonds. It's a
              comforting and sweet dessert that's perfect for cooler weather.
              Try it at Moghaty, a beloved pastry shop in the vibrant
              neighborhood of Zamalek.
            </p>
          </section>
          <img className="max-w-[500px]" src={rozBeLaban} alt="feteer" />
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-xs">
            Cairo's dessert scene offers a range of sweet treats that will
            satisfy any sweet tooth. From traditional Egyptian sweets like
            basbousa and konafa to modern twists like Azza Fahmy's hibiscus ice
            cream, there is something for everyone to enjoy. By trying these
            desserts at some of Cairo's best sweet shops and bakeries, you'll
            get a taste of the city's rich culinary heritage and local flavors.
          </p>
        </section>
      </article>
    </div>
  );
};

export default TheSweetestTreatsInCairo;
