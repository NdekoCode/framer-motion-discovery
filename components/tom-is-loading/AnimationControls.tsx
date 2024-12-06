import { motion, useAnimationControls, Variants } from 'motion/react';

const flipVariants:Variants = {
    initial:{
        rotate: 0,
    },
    flip:{
        rotate:180,

    }
}
const AnimationControls = () => {
    const animationControls = useAnimationControls();
    const handleClick = ()=>{
        animationControls.start('flip');
    }
  return (
    <motion.div layoutId='animationControls'  className="flex flex-col gap-10 w-fit">
    
    <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laboriosam deleniti incidunt minima possimus earum cum delectus, voluptates similique ea nesciunt dignissimos sequi rem voluptatem mollitia, odit at, culpa voluptatibus?
            Facilis odio quae voluptatibus voluptatem deserunt impedit temporibus incidunt mollitia iusto vel consequatur, sapiente molestiae esse fugiat fuga enim. Ea, illum! Autem nesciunt animi nisi ducimus nemo similique quaerat optio?
            Impedit tenetur odio fugiat perferendis, ipsum, magni explicabo vero itaque tempore eius velit? Distinctio impedit qui ratione earum ab voluptas. Quaerat maxime illo dolorem reiciendis eveniet nisi dolorum expedita corrupti.
            Autem soluta eum delectus dolores odit, quaerat excepturi sapiente cupiditate odio corporis beatae rem voluptatem necessitatibus corrupti velit pariatur laboriosam provident et, dicta placeat tempore quibusdam accusamus maiores. Officia, perspiciatis.
            Debitis ipsam tempore officia sint unde qui! Minima, earum! Quaerat aliquid explicabo natus amet ipsum temporibus dolore. Voluptate sit maiores deserunt iure dolorem laudantium ea inventore fugit. Quisquam, reiciendis perspiciatis.
            Distinctio nemo magnam nisi ipsam dignissimos recusandae hic modi molestias quasi optio sunt quia quis, corporis fugit asperiores nulla officiis? Delectus consequuntur iusto ex optio quo facere. Veritatis, fuga facere?
            Nisi harum voluptas accusamus consequuntur, ea numquam quas itaque odio distinctio dolorum beatae nostrum repellat eos debitis, autem hic voluptate adipisci qui. Iusto repudiandae voluptates atque eius tenetur odit sequi!
            Libero ducimus quaerat delectus nam natus doloribus similique necessitatibus quibusdam perspiciatis! Provident doloribus recusandae nostrum, aliquid quia reprehenderit quaerat, dolorem voluptate facere odit minima dolores commodi in tenetur blanditiis ipsa.
            Velit enim, quaerat nobis quasi vero veritatis culpa eligendi deleniti nihil! Culpa modi illo dolor, sapiente impedit, nisi ab obcaecati nostrum accusantium ea aperiam. Consequuntur velit molestias corporis esse optio?
            Quisquam laborum blanditiis odit dolorem aliquid totam laudantium officia adipisci quis molestiae! Pariatur libero deserunt numquam nam? Consequuntur laboriosam magni ducimus similique, sit quae provident amet labore dicta asperiores accusamus.
            Aliquid consectetur odio ipsum amet alias. Error voluptatum saepe rerum aut quaerat ut enim delectus consectetur aspernatur obcaecati id debitis culpa sed harum sunt, vel neque cupiditate quam earum atque.
            Natus omnis incidunt atque. Asperiores quisquam, odit consequuntur sequi tempore ratione adipisci corrupti nobis ducimus sunt et a maxime rem rerum excepturi blanditiis distinctio veritatis ipsam sapiente laudantium porro consectetur.
            Animi eius ut voluptate dicta facere totam repudiandae, ex culpa, incidunt rem accusantium. Expedita sapiente quasi odio error nihil. Voluptates, hic maxime reprehenderit fugit ab in quod rerum? Sunt, molestiae!
            Qui velit tenetur minus assumenda, ipsa laborum error suscipit est facilis ea, aspernatur adipisci dolorum excepturi corporis amet repellendus reiciendis expedita exercitationem magnam maxime autem provident tempora molestiae! Similique, amet?
            Unde delectus cum dignissimos vitae ullam ut quod? Maxime laborum, eos at voluptates odit quibusdam, ut, corrupti commodi quia vitae ex atque reprehenderit corporis vel deserunt inventore? Error, nobis eveniet!
            Ea adipisci recusandae, voluptas eius, quod totam cupiditate earum cum, consectetur ipsam unde a vero dolores! Quia in eaque exercitationem! Consectetur, tenetur dolorem blanditiis molestias dignissimos laborum molestiae debitis animi?
            Sunt iusto quasi nemo numquam animi quos amet minima harum molestias, assumenda tenetur perspiciatis fuga deleniti neque ducimus quibusdam, libero officia laboriosam rem doloremque quia magni sed ratione praesentium. Incidunt?
            Sunt amet a id dignissimos. Itaque officia consequuntur, deleniti, reprehenderit pariatur temporibus architecto incidunt, blanditiis at modi obcaecati numquam eos? Nihil iusto minus temporibus id qui repellendus modi unde incidunt?
            Corporis voluptates quod veniam amet numquam architecto aspernatur quidem assumenda iusto? A, earum minima. Aut, nam exercitationem nobis fugit quis illum esse quibusdam distinctio dolore neque! Doloribus a accusamus eveniet.
            Porro ea explicabo sapiente obcaecati, non itaque minus corporis cum magnam necessitatibus iure libero dolorem inventore accusamus adipisci dolores pariatur, consectetur recusandae et vitae blanditiis dicta cumque unde autem! Sit?
            Dolore tempora aperiam facilis itaque maiores fugit. At dolorem laborum voluptatum dolore neque eos. Quae facere sequi quos quam dicta explicabo corporis distinctio incidunt, voluptates omnis, vitae vel odit facilis.
            Enim hic officia eum veritatis, vero inventore dicta dolorum dolor. Ipsa sint dolorem animi cum, consequatur dolores tempora, voluptatum facilis facere laborum odio velit et, voluptates cupiditate voluptate eum libero!
            Alias, quaerat? Repellendus itaque corrupti enim eius ipsa numquam assumenda beatae, iusto placeat debitis labore ex natus eligendi sit nesciunt expedita incidunt nemo iste distinctio aliquid ipsum non sed soluta.
            Fugiat delectus unde nulla ratione sint beatae, quo eum ullam libero at facilis sit officia cum nam hic aspernatur suscipit, expedita soluta temporibus illo vel inventore! Necessitatibus quis nisi ipsam?
            Quae illo nisi officia excepturi dolor voluptatum deleniti eos perspiciatis. Ducimus sint ea consequatur, quisquam culpa eaque dolor nisi illo ratione delectus quam unde itaque natus nobis? Libero, dolorem explicabo!
            Nihil sequi quod beatae, dolorem quasi recusandae quo facere impedit sint nam fugit laborum magnam repellendus porro unde id maxime aliquam. Molestiae, magnam error fugiat consequatur at sequi voluptas aut?
            Non laborum, fugit neque sapiente numquam obcaecati, magnam, in illo cum iste commodi quibusdam. Nobis itaque quos asperiores ut vel eius! Architecto suscipit ratione fuga illum quasi provident exercitationem dolore!
            Aperiam reprehenderit blanditiis omnis consectetur doloremque esse dignissimos tenetur nam explicabo repellendus voluptatum at temporibus natus pariatur deserunt expedita numquam dolorum ratione dolorem doloribus, voluptate libero, adipisci modi. Quae, excepturi.
            Natus, totam impedit aperiam sequi labore autem distinctio incidunt, dolore maxime laboriosam dolor itaque, repudiandae recusandae deserunt at consequatur officiis. Blanditiis asperiores nemo harum, iure esse dignissimos maiores ullam autem!
            Beatae distinctio nobis ex voluptates unde at veritatis modi, nam odit recusandae suscipit, accusamus quo quibusdam repellendus fugit vero aliquid perspiciatis? Officia aspernatur odio beatae maxime nobis sunt ea! Reiciendis.</p>
          </div>

    <motion.button
        whileHover={{
          backgroundColor: "var(--blue-800)",
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
          rotate: "2.5deg",
        }}
        transition={{
          ease: "easeInOut",
        }}
        onClick={handleClick}
        className="flex w-fit items-center rounded-md justify-center bg-blue-600 text-white px-5 py-2.5"
      >
        Click Me !
      </motion.button>
    <motion.div animate={animationControls} variants={flipVariants} initial="initial" className="size-20 bg-black">
      
    </motion.div>
    </motion.div>
  )
}

export default AnimationControls
