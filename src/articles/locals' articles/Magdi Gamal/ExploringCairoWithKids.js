import React from "react";
import zoo from "../../../images/articles/Locals' Articles/Magdi Gamal/ExploringCairoWithKids/giza-zoo.jpg";
import egyptianMuseum from "../../../images/articles/Locals' Articles/Magdi Gamal/ExploringCairoWithKids/egyptianmuseum.jpg";
import articleMainImage from "../../../images/articles/Locals' Articles/Magdi Gamal/ExploringCairoWithKids/main-image.jpeg";
import cairoFestival from "../../../images/articles/Locals' Articles/Magdi Gamal/ExploringCairoWithKids/cairo-festival.jpg";
import azharPark from "../../../images/articles/Locals' Articles/Magdi Gamal/ExploringCairoWithKids/azhar-park.jpg";

const ExploringCairoWithKids = () => {
  return (
    <div className="max-w-[800px] m-auto flex flex-col gap-5 mb-5 px-4">
      <img src={articleMainImage} alt="abou-shakra" />
      <h2 className="uppercase">activities</h2>
      <h1 className="font-bold text-lg">
        Exploring Cairo with Kids: My Favorite Family-Friendly Spots
      </h1>
      <article className="flex flex-col gap-8 max-w-[1000px]">
        <section>
          <p className="text-xs">
            Cairo, a bustling and vibrant city that offers endless opportunities
            for family adventures! As a devoted family man, I am delighted to
            share with you some of my favorite family-friendly spots in Cairo.
            From educational attractions to exciting outdoor spaces, Cairo has
            something for everyone, ensuring unforgettable experiences for both
            kids and parents alike. Join me, Magdi Gamal, as we embark on an
            exploration of Cairo with kids, creating cherished memories along
            the way.
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              The Egyptian Museum: A Journey into Ancient Egypt
            </h3>
            <p className="text-xs">
              Start your family adventure by immersing yourselves in the
              fascinating world of ancient Egypt at the renowned Egyptian
              Museum. This treasure trove of artifacts houses mummies, statues,
              and countless artifacts that will captivate the imaginations of
              your little ones. Wander through the museum's halls, marvel at the
              awe-inspiring exhibits, and let your children's curiosity soar as
              they learn about the rich history and culture of Egypt. Don't miss
              the opportunity to see the iconic treasures of Tutankhamun,
              including his golden mask and elaborate burial artifacts.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={egyptianMuseum}
            alt="egyptian museum"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              Al-Azhar Park: A Serene Oasis in the Heart of the City
            </h3>
            <p className="text-xs">
              Escape the city's hustle and bustle and venture into the
              tranquility of Al-Azhar Park. This beautifully landscaped green
              space offers a serene respite from the urban chaos. Let your
              children run freely in the lush gardens, take a leisurely stroll
              around the park's picturesque lake, and enjoy a picnic with
              stunning views of Cairo's skyline. Al-Azhar Park also hosts
              family-friendly events and workshops, providing opportunities for
              your kids to engage in creative and educational activities while
              enjoying the fresh air.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={azharPark}
            alt="azhar park"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              Cairo Festival City Mall: Entertainment and Retail Extravaganza
            </h3>
            <p className="text-xs">
              For a day of shopping, dining, and entertainment, head to Cairo
              Festival City Mall. This expansive mall offers a wide range of
              family-friendly activities and attractions. Let your little ones
              explore KidZania, an interactive city designed for children, where
              they can role-play different professions and learn valuable
              skills. Enjoy a family movie at the mall's cinema, or engage in
              exciting indoor activities like bowling or laser tag. With a
              plethora of restaurants and shops, Cairo Festival City Mall
              guarantees a fun-filled day for the whole family.
            </p>
          </section>

          <img
            className="max-w-[500px] self-center"
            src={cairoFestival}
            alt="cairoFestival"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              Giza Zoo: Wildlife Encounters and Outdoor Fun
            </h3>
            <p className="text-xs">
              Take a walk on the wild side at Giza Zoo, one of the oldest zoos
              in Africa. This sprawling oasis is home to a diverse range of
              animal species, including lions, elephants, giraffes, and more.
              Watch your children's eyes light up as they come face-to-face with
              fascinating creatures from around the world. Enjoy a leisurely
              stroll through the zoo's lush gardens, or opt for a relaxing
              family picnic in the designated picnic areas. Giza Zoo provides a
              unique opportunity to introduce your kids to the wonders of the
              animal kingdom while enjoying quality time together.
            </p>
          </section>
          <img className="max-w-[500px] self-center" src={zoo} alt="zoo" />
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-xs">
            Cairo is not only a chaotic and vibrant city but also a place where
            family adventures await at every corner. From the awe-inspiring
            Egyptian Museum to the serene Al-Azhar Park, the entertaining Cairo
            Festival City Mall, and the fascinating Giza Zoo, these
            family-friendly spots in Cairo offer an abundance of opportunities
            for exploration, education, and quality time with your loved ones.
            So, pack your bags, grab your little ones' hands, and embark on an
            unforgettable journey through Cairo, creating beautiful memories
            that will last a lifetime.
          </p>
        </section>
      </article>
    </div>
  );
};

export default ExploringCairoWithKids;
