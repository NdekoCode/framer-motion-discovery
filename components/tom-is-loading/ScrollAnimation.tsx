"use client";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll(); // scrollXProgress and scrollYProgress, Prennent une valeur entre 0 et 1
  const scaleX = useSpring(scrollYProgress);
  useEffect(()=>{
    console.log("Scroll ",scrollYProgress.get())
  },[scrollYProgress])
  const background = useTransform(scrollYProgress, [0, 0.5,1], ["#01e","#00f", "#0f0"]);
  return (
    <>
      <motion.div
        className="h-10 bg-blue-500 origin-left w-full sticky top-0"
        initial={{ scaleX: 0 }}
        style={{ scaleX, background }}
      />
      <div className="container max-w-[700px] text-gray-50 flex flex-col gap-y-5 m-auto">
        <p className="">
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            eveniet mollitia tempore possimus porro qui itaque exercitationem
            aspernatur asperiores sed harum, adipisci a suscipit hic vero
            dignissimos, temporibus est! Nemo.
          </span>
          <span>
            Doloremque delectus excepturi repudiandae corrupti quo, dolore
            laboriosam veniam voluptates sit enim, dicta harum similique
            voluptatem consectetur. Fugit dignissimos dolorum doloremque, a sed
            eveniet animi repudiandae molestiae natus! A, placeat!
          </span>
          <span>
            Enim sunt officiis provident minima at possimus culpa amet dolorum
            id ex corrupti dolor autem nihil eligendi vitae perspiciatis unde,
            voluptatem porro? Mollitia veniam corrupti rem, itaque tenetur dolor
            dignissimos?
          </span>
        </p>
        <p className="">
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            blanditiis eveniet vel aperiam inventore ullam voluptatibus eaque
            delectus sit itaque odit, unde laboriosam magnam porro veniam.
            Ratione modi ad nesciunt.
          </span>
          <span>
            Molestiae sunt, cupiditate rerum possimus quisquam voluptates
            deserunt dolor voluptatum id harum praesentium odit provident ab
            itaque voluptatem vero ipsa iusto repellat iure nesciunt? Aliquam
            fugiat totam error iure nesciunt.
          </span>
          <span>
            Eligendi veniam at harum placeat, quia error! Iure possimus, quas
            illum voluptatibus, pariatur nulla consequuntur atque inventore
            neque labore fugit veritatis officiis magnam dicta quaerat natus ab?
            Eos, consectetur distinctio.
          </span>
        </p>
        <p className="">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas natus
            error voluptatibus nisi facere esse praesentium quae doloremque ad.
            Dolorem, iste perferendis. Officia hic sit culpa eos nisi facilis
            explicabo?
          </span>
          <span>
            Consequatur, harum provident illum eos suscipit expedita culpa nihil
            debitis et ex veritatis quaerat, nam, exercitationem quae molestiae
            ab obcaecati! Tempore laudantium corporis dicta fugiat illum saepe
            corrupti, in tenetur!
          </span>
          <span>
            Dolor, necessitatibus nam neque at nobis odit modi voluptate.
            Quisquam optio obcaecati sit fugiat debitis aliquid tempora
            voluptatibus? Libero obcaecati possimus harum tenetur unde nisi
            explicabo dolor sapiente alias culpa!
          </span>
        </p>
        <p className="">
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            quasi possimus, earum sint deleniti expedita nesciunt laudantium hic
            officiis aperiam eaque modi velit provident odio eligendi ad
            architecto veniam accusantium!
          </span>
          <span>
            Commodi molestias veritatis dicta deserunt dolorem exercitationem
            maxime eveniet, cumque expedita sed porro id sunt totam rerum quae
            cupiditate itaque vel voluptates ea illum corrupti. Qui laudantium
            deleniti nesciunt tenetur.
          </span>
          <span>
            Doloribus alias excepturi animi! Possimus dolore fugiat minima.
            Modi, voluptates. Dignissimos voluptas voluptatum soluta expedita
            nisi dolore, repellat error libero. Quia sit sed aperiam deleniti
            dolores vero incidunt maiores ab.
          </span>
        </p>
        <p className="">
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
            laborum veritatis eos, natus, culpa perferendis dolores ipsam
            voluptatem asperiores animi repellat odio esse autem, aliquam ex
            ratione itaque molestiae ullam?
          </span>
          <span>
            Nisi, officia dicta porro ipsum mollitia maxime numquam. Nisi
            doloremque velit, at minima ratione incidunt cumque placeat ullam
            maxime! Saepe quae numquam quam laborum blanditiis! Facilis
            laboriosam labore placeat fuga.
          </span>
          <span>
            Voluptas cum magnam ad tenetur, velit ipsa omnis neque animi quod
            quia numquam repellendus amet odio eveniet provident necessitatibus
            et nostrum suscipit rem expedita? Architecto iusto accusamus facere
            eum tempore!
          </span>
        </p>
        <p className="">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            voluptate quae expedita odit praesentium reprehenderit nesciunt in,
            ipsum minus impedit quisquam sed vero aut sunt sint iste eligendi.
            Tempore, officiis!
          </span>
          <span>
            Repudiandae ipsum voluptatum cumque non quas ducimus similique odit
            dolore in possimus sit, maxime illum earum atque et impedit qui?
            Dolores facilis nostrum iusto culpa temporibus accusamus vitae ea
            nulla.
          </span>
          <span>
            Corrupti, similique ex esse magnam nemo aliquam odio maiores quod
            nobis recusandae dolores quis nihil, sunt animi quae! Voluptate
            alias inventore dicta aut iure ipsa magni quae dignissimos quidem
            dolore.
          </span>
        </p>
        <p className="">
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            eveniet quod doloremque vitae minima maxime quam magni cum
            repudiandae incidunt. Animi dolorum debitis sit rerum deleniti autem
            qui minus voluptas.
          </span>
          <span>
            Fugiat, quos ipsam consectetur ab doloremque nostrum sint dicta amet
            eaque tempora placeat nam! Autem quidem, labore accusamus quasi
            porro consequatur nihil delectus aperiam commodi ipsam provident
            similique distinctio fugiat.
          </span>
          <span>
            Dolorum adipisci, praesentium rem nemo facilis reprehenderit sequi
            tempore molestiae quidem quas doloremque in sint eum suscipit iste
            ex quibusdam voluptatem excepturi, vero laborum. Beatae obcaecati
            sed doloribus quas ut!
          </span>
        </p>
        <p className="">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            totam ex cupiditate! Impedit suscipit molestiae, numquam dolor minus
            amet alias, iste autem itaque sequi consectetur magnam modi
            laboriosam possimus a!
          </span>
          <span>
            Accusamus perspiciatis aliquam ullam debitis sunt itaque, voluptate
            quidem dolore impedit veritatis eveniet necessitatibus quibusdam
            consectetur pariatur saepe velit dolorem provident dolor omnis, rem
            modi animi accusantium. Non, est perspiciatis.
          </span>
          <span>
            Placeat, soluta? Eum dicta assumenda ratione fugiat eos aspernatur
            in minima aut sint, molestiae laborum repellat voluptates nam neque
            dolor nobis non exercitationem ut? Ab temporibus odit ratione earum
            delectus!
          </span>
        </p>
        <p className="">
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ab
            deserunt voluptatibus accusantium fugiat iusto consequuntur
            veritatis? Vitae, laborum? Repellendus soluta iste unde provident
            eius qui veniam quibusdam praesentium iure.
          </span>
          <span>
            Totam fugiat nam commodi qui et, vero id ipsa saepe distinctio eos
            vitae, itaque alias cupiditate ducimus? Delectus perspiciatis labore
            aliquam tempore nostrum nesciunt. Nobis, veritatis. Sunt consectetur
            provident laborum!
          </span>
          <span>
            Blanditiis officia doloribus sequi exercitationem dolorum
            necessitatibus, neque nisi consequuntur nam itaque quidem quo,
            quisquam minus voluptas aliquam velit ex quaerat delectus libero
            architecto porro suscipit. Eos, aperiam facilis? Rem!
          </span>
        </p>
        <p className="">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, magni aut. Repellendus dolorum labore dicta consequatur
            mollitia odit non ducimus fugiat corporis alias tenetur itaque
            pariatur in dolores, incidunt reprehenderit.
          </span>
          <span>
            Repudiandae ratione, exercitationem velit voluptatibus illum
            praesentium provident quas placeat vero ullam facilis eos eaque
            dolorem ipsam perferendis molestiae neque laborum explicabo quasi
            corrupti libero tenetur reiciendis et sit. Eaque.
          </span>
          <span>
            Commodi ipsum quas sint harum aspernatur, sit, nam non dolore ex
            facilis voluptatibus quo. Facilis labore sunt aperiam perspiciatis,
            maxime corrupti? Et libero corrupti laudantium rem autem! Unde, eius
            similique.
          </span>
        </p>
      </div>
    </>
  );
};

export default ScrollAnimation;
