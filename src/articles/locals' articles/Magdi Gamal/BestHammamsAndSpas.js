import React from "react";
import kempinski from "../../../images/articles/Locals' Articles/Magdi Gamal/BestHammamsAndSpas/kempinski-spa.jpg";
import cleopatra from "../../../images/articles/Locals' Articles/Magdi Gamal/BestHammamsAndSpas/cleopatra-spa.jpg";
import fourSeasons from "../../../images/articles/Locals' Articles/Magdi Gamal/BestHammamsAndSpas/four-season-spa.jpg";
import royalSpa from "../../../images/articles/Locals' Articles/Magdi Gamal/BestHammamsAndSpas/royal-spa.jpg";
import articleMainImage from "../../../images/articles/Locals' Articles/Magdi Gamal/BestHammamsAndSpas/main-image.jpg";

const BestHammamsAndSpas = () => {
  return (
    <div className="max-w-[800px] m-auto flex flex-col gap-5 mb-5 px-4">
      <img src={articleMainImage} alt="abou-shakra" />
      <h2 className="uppercase">attractions</h2>
      <h1 className="font-bold text-lg">
        A Guide to the Best Hammams and Spas in Cairo
      </h1>
      <article className="flex flex-col gap-8 max-w-[1000px]">
        <section>
          <p className="text-xs">
            Welcome to Cairo, a city where relaxation and rejuvenation await at
            every corner. As a believer in the importance of self-care, I am
            excited to share with you a guide to the best hammams and spas in
            Cairo. Join me, Magdi Gamal, as we embark on a journey of indulgence
            and discover the tranquil havens that will pamper your body, mind,
            and soul.
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              The Royal Spa: Luxurious Retreat Fit for Royalty
            </h3>
            <p className="text-xs">
              Treat yourself to the ultimate pampering experience at The Royal
              Spa, a haven of serenity and luxury. Located within one of Cairo's
              finest hotels, this exquisite spa offers a range of rejuvenating
              treatments and therapies. From relaxing massages to invigorating
              facials, their expert therapists will cater to your every need.
              Indulge in a traditional hammam experience, where you can enjoy a
              steam bath, body scrub, and a soothing massage using aromatic
              oils. The Royal Spa provides an oasis of calm in the heart of the
              city, ensuring you leave feeling refreshed and revitalized.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={royalSpa}
            alt="royal spa"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              Four Seasons Spa: Serenity Amidst the City Bustle
            </h3>
            <p className="text-xs">
              Escape the hectic pace of Cairo and enter a realm of tranquility
              at the Four Seasons Spa. Nestled within a luxurious hotel, this
              spa offers a serene retreat from the bustling city. Immerse
              yourself in their extensive menu of spa treatments, ranging from
              massages to facials and body wraps. For an authentic hammam
              experience, indulge in their traditional steam bath followed by a
              gentle exfoliation using natural ingredients. The Four Seasons Spa
              is dedicated to providing a holistic approach to wellness,
              ensuring you leave feeling balanced, renewed, and deeply relaxed.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={fourSeasons}
            alt="four seasons"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              Cleopatra's Spa: Ancient Elegance and Beauty
            </h3>
            <p className="text-xs">
              Step into Cleopatra's Spa and be transported back in time to the
              days of ancient Egyptian royalty. Inspired by the beauty rituals
              of the legendary Queen Cleopatra, this spa offers a unique and
              enchanting experience. Be pampered like a pharaoh with their
              signature treatments that incorporate luxurious ingredients and
              techniques. Enjoy a revitalizing milk bath, a gold-infused facial,
              or a relaxing massage using precious oils. Cleopatra's Spa
              combines ancient wisdom with modern luxury, allowing you to
              indulge in a truly regal experience that will leave you feeling
              like royalty.
            </p>
          </section>

          <img
            className="max-w-[500px] self-center"
            src={cleopatra}
            alt="cleopatra"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              The Spa at Kempinski Nile Hotel: Tranquility on the Nile
            </h3>
            <p className="text-xs">
              Unwind and rejuvenate at The Spa, situated within the luxurious
              Kempinski Nile Hotel. This elegant spa overlooks the serene waters
              of the Nile River, providing a picturesque backdrop for
              relaxation. Immerse yourself in their extensive menu of
              treatments, including massages, facials, and body therapies.
              Experience the healing properties of their hammam rituals, which
              combine traditional techniques with modern touches. After your
              treatment, savor a moment of tranquility in their serene
              relaxation area or take a dip in the refreshing pool. The Spa at
              Kempinski Nile Hotel offers a haven of tranquility where you can
              escape the stresses of daily life.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={kempinski}
            alt="kempinski"
          />
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-xs">
            Cairo is a city that embraces the art of relaxation, and its hammams
            and spas offer a gateway to blissful tranquility. Whether you seek
            the opulence of The Royal Spa, the serenity of the Four Seasons Spa,
            the ancient elegance of Cleopatra's Spa, or the riverside
            tranquility of The Spa at Kempinski Nile Hotel, you are sure to find
            the perfect retreat to pamper your senses. Indulge in rejuvenating
            treatments, embrace the time-honored traditions of the hammam, and
            allow yourself to be immersed in luxury and serenity. Your journey
            to ultimate relaxation and well-being begins in the vibrant city of
            Cairo.
          </p>
        </section>
      </article>
    </div>
  );
};

export default BestHammamsAndSpas;
