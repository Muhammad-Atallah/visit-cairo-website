import React from "react";
import articleMainImage from "../../../images/articles/Locals' Articles/Amira Hadi/UnearthingCairoHiddenGems/main-image.jpg";
import hangingChurch from "../../../images/articles/Locals' Articles/Amira Hadi/UnearthingCairoHiddenGems/hanging-church.jpg";
import muizzStreet from "../../../images/articles/Locals' Articles/Amira Hadi/UnearthingCairoHiddenGems/muezz-street.jpg";
import suhaymi from "../../../images/articles/Locals' Articles/Amira Hadi/UnearthingCairoHiddenGems/bayt-suhemi.jpg";
import azharPark from "../../../images/articles/Locals' Articles/Amira Hadi/UnearthingCairoHiddenGems/Azhar_Park.jpg";

const UnearthingCairoHiddenGems = () => {
  return (
    <div className="max-w-[800px] m-auto flex flex-col gap-5 mb-5 px-4">
      <img src={articleMainImage} alt="abou-shakra" />
      <h2 className="uppercase">Attractions</h2>
      <h1 className="font-bold text-lg">
        A Local's Guide to Off-the-Beaten-Path Historical Sites
      </h1>
      <article className="flex flex-col gap-8 max-w-[1000px]">
        <section>
          <p className="text-xs">
            Welcome to Cairo, a city pulsating with history and culture! While
            iconic landmarks like the Pyramids of Giza and the Egyptian Museum
            rightfully draw tourists from around the world, there are numerous
            hidden gems scattered throughout Cairo that offer a unique and
            enriching experience. Join me, Amira Fathi, a passionate local and
            anthropology student, as we embark on a journey to unearth Cairo's
            lesser-known historical sites that lie off the beaten path.
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">The Hanging Church</h3>
            <p className="text-xs">
              Tucked away in the Coptic Christian quarter of Old Cairo, the
              Hanging Church, also known as the Saint Virgin Mary's Coptic
              Orthodox Church, stands as a testament to Egypt's religious
              diversity. Dating back to the 4th century, this architectural
              marvel takes its name from its suspended position above the ruins
              of a Roman fortress. Admire the intricate woodwork, exquisite
              icons, and serene atmosphere within its walls, and don't forget to
              peek into the crypt that houses ancient artifacts.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={hangingChurch}
            alt="ful"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Al-Muizz Street</h3>
            <p className="text-xs">
              Step into history as you stroll along Al-Muizz Street, one of
              Cairo's oldest thoroughfares. This vibrant street is lined with
              majestic mosques, beautifully adorned palaces, and ancient gates
              that showcase the city's Islamic heritage. Immerse yourself in the
              sights, sounds, and scents of local life as you explore the
              bustling marketplace of Khan el-Khalili, where artisans have been
              honing their crafts for centuries. Take a moment to marvel at the
              intricate details of the medieval architecture that surrounds you.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={muizzStreet}
            alt="falafel"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Al-Azhar Park</h3>
            <p className="text-xs">
              Escape the city's hustle and bustle at Al-Azhar Park, a tranquil
              oasis nestled in the heart of Cairo. This meticulously landscaped
              green space provides a serene retreat and panoramic views of the
              city's skyline. Built on the grounds of the historic Fatimid-era
              city, Al-Azhar Park offers a glimpse into Cairo's past while
              serving as a gathering place for locals and visitors alike. Don't
              forget to visit the park's Cultural Center, which hosts art
              exhibitions, concerts, and workshops.
            </p>
          </section>

          <img
            className="max-w-[500px] self-center"
            src={azharPark}
            alt="shakshuka"
          />
        </section>
        <section className="flex flex-col md:flex-row gap-3">
          <section className="flex flex-col gap-3 justify-center">
            <h3 className="font-semibold text-sm">Beit El-Suhaymi</h3>
            <p className="text-xs">
              Step into the 17th-century Ottoman-era mansion known as Beit
              El-Suhaymi and be transported back in time. This architectural gem
              showcases traditional Arab-Islamic design elements, including a
              central courtyard, intricate wooden screens, and elaborately
              painted ceilings. Explore the various rooms and witness the rich
              history and lifestyle of the affluent families who once inhabited
              this remarkable residence.
            </p>
          </section>
          <img
            className="max-w-[500px] self-center"
            src={suhaymi}
            alt="feteer"
          />
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-xs">
            As we conclude our journey through Cairo's hidden historical sites,
            I hope you've discovered a side of the city that goes beyond the
            famous landmarks. From the serene beauty of the Hanging Church to
            the vibrant Al-Muizz Street, and the peaceful oasis of Al-Azhar Park
            to the captivating Beit El-Suhaymi, Cairo's hidden gems offer a
            glimpse into its rich tapestry of history and culture. By venturing
            off the beaten path, you'll not only gain a deeper understanding of
            this remarkable city but also create lasting memories of your
            journey. So, go ahead, embrace the adventure, and let Cairo's hidden
            treasures captivate your soul.
          </p>
        </section>
      </article>
    </div>
  );
};

export default UnearthingCairoHiddenGems;
