"use client";
import { motion, useScroll, Variants } from 'motion/react';

const showHiddenVariant: Variants = {
  hidden: {
    opacity: 0,
    y: -25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      // Ici je dis quand l'element va etre visible je veux ajouter un retard d'animation de 0.25s sur chaque element enfant de l'element parent
      staggerChildren: 0.25,
    },
  },
};
const svgVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252,211,77,0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252,211,77,1)",
  },
};
const gridItemVariant = {
  hidden: {
    opacity: 0,
    y: -25,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
const page = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="dark">
      <div className="container">
        <h1 className="text-3xl text-gray-700 dark:text-gray-100">
          Learn Framer Motion with Rithmic
        </h1>
        <div className="flex flex-col overflow-x-hidden gap-10">
          <motion.div
            variants={showHiddenVariant}
            initial="hidden"
            animate="show"
            className="grid grid-cols-3 p-10 gap-10"
          >
            {/* On ne met pas les propriétés `initial` et `animate` sur les enfant car ceux qui sont appliquer sur le parent vont automatiquement être appliquer sur les enfant, donc les enfants vont heriter de ces proprieter grace aux parents */}
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 aspect-square flex items-center justify-center rounded-lg gap-10"
            >
              {/* FADE UP AND FADE IN ANIMATION WITH FRAMER MOTION */}

              {/* FADE UP ANIMATION WITH FRAMER MOTION */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.25,
                }}
                className="size-20 rounded-lg bg-slate-100"
              ></motion.div>

              {/* FADE IN ANIMATION WITH FRAMER MOTION */}
              <motion.div
                className="size-20 rounded-full bg-slate-100"
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              ></motion.div>
            </motion.div>
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 aspect-square flex items-center justify-center rounded-lg gap-10"
            >
              <motion.div
                className="size-1/3 bg-rose-400"
                animate={{
                  scale: [1, 2, 2, 1],
                  rotate: [0, 90, 90, 0],
                  borderRadius: ["10%", "10%", "50%", "10%"],
                }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 0.35,
                  delay: 0.4,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 aspect-square flex items-center justify-center rounded-lg gap-10"
            >
              <motion.button
                className="py-3 bg-emerald-500 w-1/2 text-white rounded-lg will-change-transform tracking-wide"
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  bounceDamping: 10,
                  bounceStiffness: 200,
                  duration: 0.35,
                }}
              >
                Send me
              </motion.button>
            </motion.div>
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 text-xl text-gray-100 aspect-square overflow-hidden flex items-center justify-center rounded-lg gap-10 "
            >
              <motion.div
                className="size-1/3 bg-orange-500 rounded-lg cursor-grab"
                drag
                dragConstraints={{
                  top: -125,
                  left: -125,
                  right: 125,
                  bottom: 125,
                }}
                dragTransition={{
                  bounceDamping: 10,
                  bounceStiffness: 600,
                }}
              />
            </motion.div>
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 aspect-square flex items-center justify-center rounded-lg gap-10"
            >
              <motion.div className="w-40 aspect-square bg-gray-50/20 overflow-hidden rounded-xl">
                <motion.div
                  className="size-full origin-bottom bg-gray-400 rounded-xl"
                  style={{
                    scaleY: scrollYProgress,
                  }}
                />
              </motion.div>
            </motion.div>
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 aspect-square flex items-center justify-center rounded-lg gap-10"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                variants={svgVariant}
                initial="hidden"
                animate="visible"
                viewBox="0 0 24 24"
                className="w-1/2 stroke-amber-500 stroke-[0.5]"
              >
                <motion.path
                  variants={svgVariant}
                  transition={{
                    default: {
                      duration: 1.5,
                      delay: 0.25,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                    fill: {
                      duration: 2,
                      delay: 2,
                      ease: "easeIn",
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </motion.svg>
            </motion.div>
          </motion.div>
          <p>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              veniam odio atque hic, labore quos consequatur architecto
              suscipit, sint corporis alias est? Nisi, totam dolorum. Nostrum
              qui adipisci praesentium deserunt!
            </span>
            <span>
              Pariatur sint adipisci architecto odio possimus voluptatibus,
              quasi quibusdam laborum sapiente ad aut maxime. Accusamus sequi
              ullam id harum architecto dicta laudantium ipsum vitae delectus
              aliquid similique, dolores rerum magnam?
            </span>
            <span>
              Excepturi mollitia voluptas, cumque, quis odit facilis asperiores
              quos repudiandae placeat praesentium, sit deleniti sunt? Ex
              maiores molestiae saepe modi architecto cumque? Illum numquam
              aliquam expedita neque, qui amet pariatur.
            </span>
            <span>
              Temporibus expedita autem quia exercitationem delectus iusto eos
              ex accusantium dolor. Incidunt et earum pariatur dolorum delectus
              nobis amet, ipsa reprehenderit error debitis in suscipit possimus,
              numquam asperiores quam quisquam.
            </span>
            <span>
              Suscipit neque aliquam error distinctio ad minus deleniti quas
              doloribus architecto optio? Quidem, sed praesentium alias omnis id
              nisi, vitae molestiae ipsa natus repellat minus dolore corrupti
              nemo, aliquam cupiditate?
            </span>
          </p>
          <p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              harum nemo eveniet. Id consequuntur ea itaque rerum quaerat.
              Laudantium provident repellendus hic accusantium qui labore facere
              corrupti tenetur aperiam nulla.
            </span>
            <span>
              A ipsa illo, ad voluptate deserunt facere ratione dicta iste
              similique voluptatibus quisquam quae itaque voluptatum sunt. Modi
              quas saepe, sit impedit cum fugiat, iure non laudantium quibusdam
              quia eaque?
            </span>
            <span>
              Quisquam deleniti error sequi quae labore, rem possimus?
              Reiciendis cum commodi, fugit cupiditate explicabo deserunt
              exercitationem magnam rerum, sapiente doloremque ducimus sit alias
              illum? Vero at inventore explicabo ea sunt!
            </span>
            <span>
              Facere voluptate a obcaecati ut vero qui fugit officiis quaerat
              quasi, aperiam rem quae dolorem nam dignissimos? Beatae ad libero
              unde. Eligendi nisi a, sit ipsam facere sunt magni sint.
            </span>
            <span>
              Nostrum, obcaecati fugit maiores corrupti molestiae quam,
              exercitationem provident, ipsum eos iure possimus neque deleniti
              reprehenderit nulla id adipisci illo molestias totam aspernatur
              alias voluptatibus itaque perferendis repudiandae unde.
              Voluptates.
            </span>
          </p>
          <p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              dolores quis repellendus nisi delectus blanditiis, esse tempora
              doloremque itaque, enim corporis similique fugiat cupiditate hic
              iure laborum in temporibus optio?
            </span>
            <span>
              Accusamus, magni nostrum, neque quo dignissimos consectetur
              commodi laudantium minus, reprehenderit iure maiores pariatur?
              Praesentium deserunt quam illo, hic, quia non animi odio optio,
              autem enim consequuntur quasi molestiae consectetur.
            </span>
            <span>
              Eum earum labore, soluta iste numquam, optio corrupti deleniti
              accusamus possimus quaerat minus delectus a, dolorum voluptatibus
              dolor suscipit itaque eos. Optio aperiam ab ipsam laudantium rerum
              accusantium cupiditate exercitationem.
            </span>
            <span>
              Non veritatis ipsa cupiditate, odit aspernatur vero possimus
              cumque repellat maiores laboriosam doloribus a ea, cum eaque
              deleniti, consequuntur culpa odio quos. Iure dolor nihil atque
              veniam esse ducimus ex.
            </span>
            <span>
              Alias id culpa officia facilis? Quo, obcaecati ut, ratione sit
              aliquam deserunt eius architecto atque quaerat porro fugiat
              perspiciatis sed maiores vel sint vitae eum, repellat odio autem
              nam eos?
            </span>
          </p>
          <p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, eum dignissimos. Assumenda mollitia tenetur adipisci
              id expedita culpa repellendus? Maiores animi corporis natus
              voluptatum pariatur atque explicabo at praesentium totam.
            </span>
            <span>
              Delectus architecto fugit quaerat repellendus eaque provident non
              culpa id ducimus sapiente obcaecati at natus, voluptatum quod
              eligendi unde voluptate in ipsam. Iste, dolorum. Ipsam,
              perferendis. Soluta eum quia eligendi.
            </span>
            <span>
              Nulla culpa veritatis corporis, perferendis assumenda excepturi ab
              id quaerat facilis error impedit nisi numquam blanditiis dolor
              ipsa voluptates sequi ullam aliquid temporibus dolore. Animi illo
              est nostrum quos quasi.
            </span>
            <span>
              Voluptas, commodi! Officiis sapiente odit eaque eveniet, cum alias
              officia fuga. Voluptate, necessitatibus neque praesentium beatae
              et molestias, eum consequatur minima doloremque aperiam ullam quis
              tempore? Officia minima vero fugit.
            </span>
            <span>
              Itaque assumenda quibusdam ipsum nihil, placeat laudantium earum
              iste? Ratione, soluta ipsam quibusdam eius sunt natus doloribus
              beatae, veritatis ea nobis ipsa deserunt adipisci cupiditate
              possimus voluptatibus nulla et expedita.
            </span>
          </p>
          <p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              alias qui quis sapiente sed eos, est corrupti voluptatem sunt
              minus dignissimos, a quisquam odit rem provident doloribus ipsa
              suscipit temporibus.
            </span>
            <span>
              Sapiente, ad esse pariatur harum ab maxime non deleniti, quos
              natus aspernatur nesciunt eaque consectetur mollitia in qui omnis
              iste cum molestias aliquam! Est quibusdam esse facilis nemo
              inventore sapiente!
            </span>
            <span>
              Eum aliquid ducimus, dolores maiores aperiam ab earum et eaque.
              Perspiciatis sunt temporibus quia sequi ipsam fuga sed recusandae
              deleniti repellat eveniet, iusto deserunt rerum vero reiciendis
              magni. Error, assumenda.
            </span>
            <span>
              Quae soluta atque sequi nihil maxime, ducimus quos sint quia
              facere, vitae inventore illo vero alias facilis modi debitis
              ratione laudantium saepe enim deserunt, mollitia quo nisi beatae
              veniam. Blanditiis.
            </span>
            <span>
              Eveniet vitae repudiandae consectetur itaque distinctio
              perferendis explicabo dolore deleniti tempora doloribus at modi
              nemo provident fuga aliquam ducimus sequi illo qui, enim ipsam
              deserunt aperiam quia. Eos, quas impedit.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
