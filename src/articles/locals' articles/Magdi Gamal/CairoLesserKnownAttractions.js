import React from "react";
import azharMosque from "../../../images/articles/Locals' Articles/Magdi Gamal/CairoLesserKnownAttractions/azhar-mosque.jpg";
import copticCairo from "../../../images/articles/Locals' Articles/Magdi Gamal/CairoLesserKnownAttractions/coptic-cairo.jpeg";
import dahabIsland from "../../../images/articles/Locals' Articles/Magdi Gamal/CairoLesserKnownAttractions/dahab-island.jpg";
import manialPalace from "../../../images/articles/Locals' Articles/Magdi Gamal/CairoLesserKnownAttractions/manial-palace.jpeg";
import articleMainImage from "../../../images/articles/Locals' Articles/Magdi Gamal/CairoLesserKnownAttractions/main-image.jpg";

const CairoLesserKnownAttractions = () => {
  return (
    <div className="max-w-[800px] m-auto flex flex-col gap-5 mb-5 px-4">
      <img src={articleMainImage} alt="abou-shakra" />
      <h2 className="uppercase">attractions</h2>
      <h1 className="font-bold text-lg">
        Exploring Cairo's Lesser-Known Attractions
      </h1>
      <article className="flex flex-col gap-8 max-w-[1000px]">
        <section>
          <p className="text-xs">
            Cairo is a city that never ceases to amaze with its hidden gems and
            lesser-known attractions. As an adventurous explorer, I am thrilled
            to share with you some of Cairo's best-kept secrets. Join me, Magdi
            Gamal, as we uncover the lesser-known side of this vibrant city,
            delving into its rich history, cultural marvels, and
            off-the-beaten-path destinations.
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              Al-Azhar Mosque and Islamic Cairo: A Journey through Time
            </h3>
            <p className="text-xs">
              Step into the enchanting world of Islamic Cairo, a lesser-known
              treasure that boasts magnificent architectural wonders and
              historical sites. Begin your exploration at Al-Azhar Mosque, one
              of the oldest and most prestigious Islamic institutions in the
              world. Marvel at its intricate designs, serene courtyards, and
              ornate minarets. Take a stroll through the surrounding
              neighborhood, where you'll find hidden gems such as Khan
              El-Khalili, a bustling marketplace brimming with local crafts,
              spices, and souvenirs. Immerse yourself in the rich history and
              vibrant atmosphere of Islamic Cairo, an experience that will
              transport you to a bygone era.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={azharMosque}
            alt="azhar mosque"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              Manial Palace: A Royal Retreat
            </h3>
            <p className="text-xs">
              Escape the crowds and discover the serene beauty of Manial Palace,
              a hidden gem nestled on the banks of the Nile. Built by Prince
              Mohammed Ali Tewfik, this architectural marvel showcases a blend
              of Ottoman, Moorish, and Florentine styles. Explore the opulent
              interiors, adorned with intricate woodwork, colorful tiles, and
              exquisite artwork. Wander through the lush gardens, filled with
              vibrant flowers, tranquil fountains, and peaceful pathways. Manial
              Palace offers a peaceful retreat from the bustling city, allowing
              you to unwind while immersing yourself in the grandeur of a bygone
              era.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={manialPalace}
            alt="manial palace"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              Coptic Cairo: A Journey of Faith and History
            </h3>
            <p className="text-xs">
              Delve into Cairo's rich Christian heritage by visiting Coptic
              Cairo, a historic neighborhood that is home to several significant
              religious sites. Begin your exploration at the Hanging Church
              (Saint Virgin Mary's Coptic Orthodox Church), an architectural
              marvel that dates back to the 3rd century. Marvel at its stunning
              frescoes and ancient artifacts. Continue your journey to the
              Coptic Museum, which houses a vast collection of Coptic art and
              artifacts, providing a fascinating insight into Egypt's Christian
              history. Don't miss the opportunity to explore the underground
              passages of the Babylon Fortress and visit the hauntingly
              beautiful Saints Sergius and Bacchus Church. Coptic Cairo offers a
              glimpse into a centuries-old faith and a rich tapestry of history
              that is often overlooked.
            </p>
          </section>

          <img
            className="max-w-[500px] self-center"
            src={copticCairo}
            alt="coptic cairo"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">
              Dahab Island: A Riverside Retreat
            </h3>
            <p className="text-xs">
              Escape the city's hustle and bustle and venture to Dahab Island, a
              tranquil paradise situated in the heart of the Nile River.
              Accessible by boat, this picturesque island offers a serene
              retreat from the urban chaos. Bask in the peaceful ambiance as you
              stroll along the riverbank, taking in the scenic views and lush
              greenery. Engage in activities such as fishing or simply relax on
              the riverbank and enjoy a family picnic. Dahab Island provides a
              secluded sanctuary where you can connect with nature and create
              lasting memories with your loved ones.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={dahabIsland}
            alt="dahab island"
          />
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-xs">
            Cairo is a city of hidden treasures, where lesser-known attractions
            offer a glimpse into the rich history, cultural heritage, and
            architectural wonders that lie beyond the well-trodden path. From
            the captivating charm of Islamic Cairo to the serenity of Manial
            Palace, the religious significance of Coptic Cairo, and the tranquil
            beauty of Azhar Park, these lesser-known attractions offer a unique
            perspective on Cairo's diverse tapestry. So, step off the beaten
            path
          </p>
        </section>
      </article>
    </div>
  );
};

export default CairoLesserKnownAttractions;
