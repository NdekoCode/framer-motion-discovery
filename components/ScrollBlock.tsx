import { motion, useScroll, useTransform } from 'motion/react';
import { FC, RefObject } from 'react';

const ScrollBlock: FC<{ containerRef: RefObject<HTMLDivElement> }> = ({
  containerRef,
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef, // L'element parent par rapport auquel ou a partir duquel on va commencer a considerer le scroll de l'utilisateur
    offset: ["start end", "end end"], // `start end` veut dire que nous allons commencer a traquer le scroll quand le commencement du target(`containerRef`) rencontre la fin de la vus de l'utilisateur, c-a-d nous allons commencer a traquer le scroll quand l'element parent(`containerRef`) commence a etre visible dans la vue de l'utilisateur, et `end end` veut dire que nous allons arreter de traquer le scroll quand quand l'element parent rencontre la fin `viewport` c-a-d quand l'element parent arrive a la fin du `viewport`
  });

  // `useTransform` permet de convertir un `motionValue` en une autre `motionValue`, paragraphOne, paragraphTwo vont etre des valeurs en pourcentage
  const paragraphOne = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]); //  Ici on dit que le premiere paragraphe va varier entre 0 1 et que il va commencer a `x:100% pour arriver a x:0% une
  const paragraphTwo = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]); //  Ici on dit que le deuxieme paragraphe va varier entre 0 1 et que il va commencer a `x:-100% pour arriver a x:0% une
  const paragraphThree = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);
  return (
    <div className="flex flex-col gap-10" ref={containerRef}>
      <motion.p
        className="text-lg text-gray-300 font-normal"
        style={{ x: paragraphOne }}
      >
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea veniam
          odio atque hic, labore quos consequatur architecto suscipit, sint
          corporis alias est? Nisi, totam dolorum. Nostrum qui adipisci
          praesentium deserunt!
        </span>
        <span>
          Pariatur sint adipisci architecto odio possimus voluptatibus, quasi
          quibusdam laborum sapiente ad aut maxime. Accusamus sequi ullam id
          harum architecto dicta laudantium ipsum vitae delectus aliquid
          similique, dolores rerum magnam?
        </span>
        <span>
          Excepturi mollitia voluptas, cumque, quis odit facilis asperiores quos
          repudiandae placeat praesentium, sit deleniti sunt? Ex maiores
          molestiae saepe modi architecto cumque? Illum numquam aliquam expedita
          neque, qui amet pariatur.
        </span>
        <span>
          Temporibus expedita autem quia exercitationem delectus iusto eos ex
          accusantium dolor. Incidunt et earum pariatur dolorum delectus nobis
          amet, ipsa reprehenderit error debitis in suscipit possimus, numquam
          asperiores quam quisquam.
        </span>
        <span>
          Suscipit neque aliquam error distinctio ad minus deleniti quas
          doloribus architecto optio? Quidem, sed praesentium alias omnis id
          nisi, vitae molestiae ipsa natus repellat minus dolore corrupti nemo,
          aliquam cupiditate?
        </span>
      </motion.p>
      <motion.p
        className="text-lg text-gray-300 font-normal"
        style={{ x: paragraphTwo }}
      >
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum
          nemo eveniet. Id consequuntur ea itaque rerum quaerat. Laudantium
          provident repellendus hic accusantium qui labore facere corrupti
          tenetur aperiam nulla.
        </span>
        <span>
          A ipsa illo, ad voluptate deserunt facere ratione dicta iste similique
          voluptatibus quisquam quae itaque voluptatum sunt. Modi quas saepe,
          sit impedit cum fugiat, iure non laudantium quibusdam quia eaque?
        </span>
        <span>
          Quisquam deleniti error sequi quae labore, rem possimus? Reiciendis
          cum commodi, fugit cupiditate explicabo deserunt exercitationem magnam
          rerum, sapiente doloremque ducimus sit alias illum? Vero at inventore
          explicabo ea sunt!
        </span>
        <span>
          Facere voluptate a obcaecati ut vero qui fugit officiis quaerat quasi,
          aperiam rem quae dolorem nam dignissimos? Beatae ad libero unde.
          Eligendi nisi a, sit ipsam facere sunt magni sint.
        </span>
        <span>
          Nostrum, obcaecati fugit maiores corrupti molestiae quam,
          exercitationem provident, ipsum eos iure possimus neque deleniti
          reprehenderit nulla id adipisci illo molestias totam aspernatur alias
          voluptatibus itaque perferendis repudiandae unde. Voluptates.
        </span>
      </motion.p>
      <motion.p
        className="text-lg text-gray-300 font-normal"
        style={{ opacity: paragraphThree }}
      >
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          dolores quis repellendus nisi delectus blanditiis, esse tempora
          doloremque itaque, enim corporis similique fugiat cupiditate hic iure
          laborum in temporibus optio?
        </span>
        <span>
          Accusamus, magni nostrum, neque quo dignissimos consectetur commodi
          laudantium minus, reprehenderit iure maiores pariatur? Praesentium
          deserunt quam illo, hic, quia non animi odio optio, autem enim
          consequuntur quasi molestiae consectetur.
        </span>
        <span>
          Eum earum labore, soluta iste numquam, optio corrupti deleniti
          accusamus possimus quaerat minus delectus a, dolorum voluptatibus
          dolor suscipit itaque eos. Optio aperiam ab ipsam laudantium rerum
          accusantium cupiditate exercitationem.
        </span>
        <span>
          Non veritatis ipsa cupiditate, odit aspernatur vero possimus cumque
          repellat maiores laboriosam doloribus a ea, cum eaque deleniti,
          consequuntur culpa odio quos. Iure dolor nihil atque veniam esse
          ducimus ex.
        </span>
        <span>
          Alias id culpa officia facilis? Quo, obcaecati ut, ratione sit aliquam
          deserunt eius architecto atque quaerat porro fugiat perspiciatis sed
          maiores vel sint vitae eum, repellat odio autem nam eos?
        </span>
      </motion.p>
    </div>
  );
};

export default ScrollBlock;
