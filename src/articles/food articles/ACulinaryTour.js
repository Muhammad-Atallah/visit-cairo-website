import React from "react";
import articleMainImage from "../../images/articles/Food Articles/A Culinary Tour of Historic Cairo/main-image.jpg";
import abouShakra from "../../images/articles/Food Articles/A Culinary Tour of Historic Cairo/abou-shakra.jpg";
import andrea from "../../images/articles/Food Articles/A Culinary Tour of Historic Cairo/andrea.jpg";
import pyramidsLounge from "../../images/articles/Food Articles/A Culinary Tour of Historic Cairo/9-pyramids-lounge.jpg";
import felfela from "../../images/articles/Food Articles/A Culinary Tour of Historic Cairo/felfela.webp";
import elDar from "../../images/articles/Food Articles/A Culinary Tour of Historic Cairo/el-dar-darak.jpg";
import menaHouse from "../../images/articles/Food Articles/A Culinary Tour of Historic Cairo/mena-house.jpg";

const ACulinaryTour = () => {
  return (
    <div className="max-w-[800px] m-auto flex flex-col gap-5 my-5 px-4">
      <img src={articleMainImage} alt="abou-shakra" />
      <h2 className="uppercase">restaurants</h2>
      <h1 className="font-bold text-lg">
        A Culinary Tour of Historic Cairo: Where to Eat Near the Pyramids and
        Sphinx
      </h1>
      <article className="flex flex-col gap-8 max-w-[1000px]">
        <section>
          <p className="text-xs">
            When it comes to culinary experiences in Cairo, it's hard to beat
            dining in the shadow of the Pyramids and Sphinx. Located just a
            short distance from these historic wonders, there are several
            restaurants and eateries offering delicious meals and unforgettable
            views. Here's a guide to some of the best places to eat near the
            Pyramids and Sphinx:
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Abou Shakra</h3>
            <p className="text-xs">
              Abou Shakra is a classic Egyptian restaurant that's been serving
              up delicious meals since the 1940s. Located just a few minutes
              away from the Pyramids, the restaurant offers an extensive menu of
              traditional Egyptian dishes, including kofta, shawarma, and
              koshary. Make sure to try their famous roasted chicken, which is
              served with a side of crispy fries and tahini sauce.
            </p>
          </section>
          <img className="max-w-[500px]" src={abouShakra} alt="ful" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Andrea</h3>
            <p className="text-xs">
              Andrea is a popular Italian restaurant that offers stunning views
              of the Pyramids and Sphinx. The restaurant features an outdoor
              terrace where diners can enjoy their meals while taking in the
              breathtaking sights. Their menu includes classic Italian dishes
              like pizza and pasta, as well as some Egyptian specialties like
              kofta and grilled chicken.
            </p>
          </section>
          <img className="max-w-[500px]" src={andrea} alt="falafel" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Felfela</h3>
            <p className="text-xs">
              Felfela is a casual eatery that's been serving up traditional
              Egyptian dishes for over 50 years. Located in the heart of
              historic Cairo, just a short distance from the Pyramids, Felfela
              is a great place to try local favorites like fuul, taameya, and
              koshary. Make sure to try their famous Egyptian falafel, which is
              crispy on the outside and tender on the inside.
            </p>
          </section>

          <img className="max-w-[500px]" src={felfela} alt="shakshuka" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">El Dar Darak</h3>
            <p className="text-xs">
              El Dar Darak is a charming cafe located in the heart of the
              historic Al-Darb Al-Ahmar district, just a short distance from the
              Pyramids. The cafe offers a cozy and inviting atmosphere, with
              traditional decor and a menu of Egyptian specialties like koshary,
              stuffed grape leaves, and hawawshi. Make sure to try their freshly
              brewed Egyptian tea, which is infused with aromatic herbs and
              spices.
            </p>
          </section>
          <img className="max-w-[500px]" src={elDar} alt="feteer" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">The Mena House</h3>
            <p className="text-xs">
              The Mena House is a luxury hotel located just steps away from the
              Pyramids and Sphinx. The hotel features several restaurants,
              including the 139 Pavilion, which offers stunning views of the
              Pyramids and serves up a range of international cuisine. Make sure
              to try their signature dish, the Mena House mixed grill, which
              includes a selection of grilled meats and vegetables.
            </p>
          </section>
          <img className="max-w-[500px]" src={menaHouse} alt="feteer" />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">9 Pyramids Lounge</h3>
            <p className="text-xs">
              Located on the ninth floor of the 9 Pyramids View Inn, 9 Pyramids
              Lounge offers a breathtaking view of the pyramids while you dine.
              The menu features a mix of traditional Egyptian dishes and
              international cuisine, with options such as grilled meats, pasta
              dishes, and fresh salads. However, the highlight of the menu is
              the delicious mezze platter, which includes a selection of dips,
              cheeses, and grilled vegetables. Pair your meal with a refreshing
              drink or a shisha, and enjoy the stunning view of the pyramids in
              the distance.
            </p>
          </section>
          <img className="max-w-[500px]" src={pyramidsLounge} alt="feteer" />
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-xs">
            A visit to the Pyramids and Sphinx is an unforgettable experience,
            made even more special by the culinary delights that can be found in
            the area. From traditional Egyptian eateries to upscale
            international restaurants, there's something for every taste and
            budget. By exploring these culinary gems, you'll get a taste of the
            local flavors and traditions that make Cairo such a unique and
            vibrant city.
          </p>
        </section>
      </article>
    </div>
  );
};

export default ACulinaryTour;
