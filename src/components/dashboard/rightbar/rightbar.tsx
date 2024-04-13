import Image from "next/image";
import Link from "next/link";

const Rightbar = () => {
  return (
    <div className="fixed">
      <div className="relative mb-5 rounded-lg py-5 px-6 bg-gradient-to-t from-[#182237] to-[#253352]">
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2">
          <Image className="object-contain opacity-20" src="/astronaut.png" alt="" fill />
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-bold">🔥 Disponível agora</span>
          <h3>
            Como usar a nova versão do painel dashboard?
          </h3>
          <span className="text-[color:var(--textSoft)] font-medium text-xs">Leva 4 minutos para aprender</span>
          <p className="text-[color:var(--textSoft)] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <Link target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <button className="flex items-center gap-2.5 border-none pointer rounded-md text-white w-max p-2.5 bg-[#5D57C9]">
              {/* <MdPlayCircleFilled /> */}
              Assitir
            </button>
          </Link>
        </div>
      </div>
      <div className="relative mb-5 rounded-lg py-5 px-6 bg-gradient-to-t from-[#182237] to-[#253352]">
        <div className="flex flex-col gap-6">
          <span className="font-bold">🚀 Em breve</span>
          <h3>
            Novas ações de servidor estão disponíveis, a pré-renderização parcial está chegando!
          </h3>
          <span className="text-[color:var(--textSoft)] font-medium text-xs">Aumente sua produtividade</span>
          <p className="text-[color:var(--textSoft)] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <Link target="_blank" href="https://www.citusdata.com/blog/2023/07/18/citus-12-schema-based-sharding-for-postgres/">
            <button className="flex items-center gap-2.5 border-none pointer rounded-md text-white w-max p-2.5 bg-[#5D57C9]">
              {/* <MdReadMore /> */}
              Aprender
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;