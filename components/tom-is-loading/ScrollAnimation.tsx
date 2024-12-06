import { motion, useScroll, useSpring, useTransform } from 'motion/react';

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const springScrollXValue = useSpring(scrollYProgress, {
    stiffness: 50,
    bounce: 1,
    damping: 10,
  });
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86,1,245)", "rgb(1,245,13)"]
  );
  return (
    <>
      <motion.div
        className="sticky top-0 left-0 origin-left h-10 bg-blue-500 w-full"
        style={{ scaleX: scrollYProgress, backgroundColor: background }}
      ></motion.div>
      <div>
        <div className="flex flex-col gap-10">
          <p className="flex flex-col gap-y-3">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              ipsa mollitia, necessitatibus explicabo aliquam eius itaque
              repellendus quam vel quos nihil cum blanditiis, illo reiciendis
              recusandae, suscipit minus. Natus, perferendis!
            </span>
            <span>
              Explicabo quia debitis nemo, deserunt iusto earum ratione ipsam id
              quae corporis nihil voluptatibus vel maxime odit ipsum sint
              provident quas repudiandae, cum rerum recusandae, dolorum dolor.
              Nobis, reprehenderit illum!
            </span>
            <span>
              Facere omnis, illum dolore, eaque voluptatum maiores, vero
              mollitia reiciendis sit magni temporibus blanditiis inventore.
              Unde modi neque, voluptates architecto iusto quod non nam nesciunt
              delectus, vitae ea, rem culpa?
            </span>
            <span>
              Quibusdam, ab. Recusandae, amet eaque. Minus soluta molestias quam
              nemo ea quidem repudiandae voluptatum eos culpa. Corrupti
              possimus, ullam ipsa molestiae fuga consequatur nisi vel
              consectetur, molestias in, nobis exercitationem!
            </span>
            <span>
              Laudantium temporibus quaerat ipsum, qui deleniti corporis
              accusantium voluptates, numquam magnam quos nemo quas a eius sunt,
              omnis et? Blanditiis quis qui dolor quibusdam eius totam sunt
              ullam! Beatae, aliquid.
            </span>
            <span>
              Esse repellendus fugiat facere sequi nesciunt, maxime nam vero
              nobis adipisci perferendis rerum necessitatibus ea obcaecati, odio
              voluptatibus animi earum nemo repellat laboriosam vel. Sapiente
              distinctio laborum nulla voluptates ipsum?
            </span>
            <span>
              Doloremque quas deleniti error aperiam odio voluptatem suscipit
              quos, alias vel nesciunt beatae deserunt magni quod, nemo animi
              reprehenderit fugit cum autem minima similique! Placeat provident
              velit nobis quis consequuntur?
            </span>
            <span>
              Praesentium adipisci fugiat dicta numquam delectus corrupti.
              Delectus provident, ducimus est ex fugit asperiores nostrum magni
              perferendis quibusdam quasi quos esse! Illum facere consequatur
              rem dolor laboriosam aspernatur sed soluta?
            </span>
            <span>
              Quas velit id pariatur, rerum dolorum, fugiat mollitia qui vel
              quisquam maxime autem amet? Laboriosam hic repudiandae veniam
              atque saepe consequuntur, quidem eius? Quam neque nobis
              consectetur omnis veritatis. Maiores.
            </span>
            <span>
              Commodi aliquam laboriosam eum porro. Minus et, vero quis,
              incidunt officia dolores optio ipsam, quas sequi iure minima quia?
              Deserunt facilis soluta temporibus non quisquam sunt animi beatae
              corrupti exercitationem.
            </span>
            <span>
              Id consequatur magni suscipit fuga in, corporis dignissimos
              voluptas eius cumque nam! Illum nam veritatis inventore velit
              dolore iure repellat error, exercitationem ad soluta aperiam
              totam, ipsum fuga vitae saepe.
            </span>
            <span>
              Sed molestias totam exercitationem eaque earum. Tempore fugit
              beatae, ullam debitis cumque veritatis placeat nesciunt labore
              excepturi quis deserunt unde atque, illo exercitationem
              repudiandae aliquid magni recusandae dolor sequi! Optio?
            </span>
            <span>
              Alias in quis reiciendis saepe iste enim officia, praesentium
              distinctio quisquam incidunt veritatis dicta cumque ut atque
              commodi perspiciatis possimus deleniti voluptatibus nostrum itaque
              nemo nesciunt repellat placeat. Veniam, corporis?
            </span>
            <span>
              Pariatur at iure ex deserunt provident ducimus laudantium qui,
              magnam rerum aliquam excepturi ab aperiam quis dolorem blanditiis
              facere atque perferendis veniam sequi officia. Odit alias mollitia
              temporibus recusandae animi.
            </span>
            <span>
              Ad dolor reprehenderit eligendi quibusdam. Veniam et deleniti
              similique nisi pariatur, modi dolores maxime repudiandae vero quas
              earum saepe voluptates molestiae distinctio eaque sunt laboriosam?
              Pariatur perspiciatis esse accusamus voluptatibus.
            </span>
          </p>
          <p className="flex flex-col gap-y-3">
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              perspiciatis facere quis beatae natus illo quo nulla, delectus
              facilis nisi. Culpa fugiat aliquid rem. Blanditiis nobis nemo
              dolores error sit?
            </span>
            <span>
              Alias commodi tempora exercitationem facere cum consequuntur nisi
              velit nihil, similique fugit animi quos dolorum vitae numquam
              labore temporibus rem laudantium recusandae sequi enim quisquam
              magni iusto. Consectetur, aliquid sed.
            </span>
            <span>
              Molestias itaque aut possimus dolore commodi ratione eius, quaerat
              cupiditate consectetur provident! Harum, quasi amet. Consectetur,
              dolores. Dolor quae, nulla ea optio corrupti impedit nihil
              molestiae ut, autem delectus rerum.
            </span>
            <span>
              Ipsum animi incidunt assumenda possimus natus ipsa consequuntur,
              necessitatibus omnis rerum consectetur dolores, illo aliquid
              architecto nihil obcaecati vero quae praesentium officiis vitae.
              Ipsam maiores at quos cum inventore dignissimos.
            </span>
            <span>
              Ullam reprehenderit aliquam iste in accusamus laborum ex, placeat
              voluptatem fuga quae optio ab quam blanditiis quasi nisi dolores
              nemo vel facilis maiores molestias nam perspiciatis fugiat! Eius,
              laboriosam provident.
            </span>
            <span>
              Rerum, fuga aspernatur hic magnam aperiam harum enim quo, quaerat
              maxime nemo velit nobis aut, molestiae ipsum suscipit temporibus
              possimus necessitatibus officiis voluptatem nam repellendus.
              Maiores animi corporis necessitatibus numquam.
            </span>
            <span>
              Sequi cumque eveniet neque quo tempore placeat nulla, optio quidem
              dolore, recusandae alias ipsum enim odit ut non impedit debitis
              quam animi delectus nostrum officiis, molestiae autem! Expedita,
              accusamus aliquam!
            </span>
            <span>
              Ex porro aliquid tempora, maiores ea voluptatem rerum voluptas,
              magnam tempore distinctio quidem voluptate? Magni quam accusamus
              corporis adipisci ad error voluptate consectetur! Dicta natus quam
              alias iure expedita exercitationem!
            </span>
            <span>
              Dolore dignissimos numquam adipisci nesciunt voluptatibus id
              magni, quod, quis tenetur voluptate molestiae beatae dicta
              excepturi? Obcaecati, suscipit? Nostrum necessitatibus vitae
              labore alias quibusdam asperiores, eveniet sunt obcaecati mollitia
              officia!
            </span>
            <span>
              Aliquid deserunt quidem odio perferendis omnis itaque est in non
              quas assumenda ratione architecto, atque quibusdam nostrum natus
              debitis quaerat laborum a veniam exercitationem officia molestias
              quam, ex tempora! A?
            </span>
            <span>
              Nemo minima laboriosam accusantium atque ut excepturi cum
              accusamus, mollitia blanditiis veniam culpa quos similique eaque
              quas assumenda molestias voluptatibus consectetur, hic inventore
              maxime autem. Possimus, tempore velit. Dicta, assumenda?
            </span>
            <span>
              Odit magnam odio sint! Impedit culpa, molestiae necessitatibus
              aperiam atque a saepe aut, eligendi consectetur repellat
              voluptatibus alias quaerat repellendus dicta eos deleniti in eum
              eaque. Maxime laboriosam quam repellendus.
            </span>
            <span>
              Eum quidem doloribus debitis hic ut cumque autem sapiente natus
              quod. Maiores provident non, quibusdam ad, minus, blanditiis
              obcaecati tempora amet quaerat libero ratione magni maxime.
              Doloribus explicabo reiciendis nostrum?
            </span>
            <span>
              Ab fugit nostrum hic harum, exercitationem unde tempora
              praesentium placeat, molestiae maxime at assumenda dolores quas
              voluptates saepe, esse tempore nesciunt vero cupiditate officia.
              Assumenda placeat perspiciatis vel explicabo. Minima!
            </span>
            <span>
              Nemo rerum ut dolor eum aspernatur aperiam reprehenderit saepe
              accusantium repellat facere? Perferendis inventore magni iure quas
              quis fuga est nisi, placeat, consectetur sunt, esse tempore ad
              possimus vel ex.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ScrollAnimation;
