import Image from 'next/image'

export function Hero() {
  return (
    <div className=" items-center justify-start w-full -mt-14">
      <div className="bg-white min-w-full px-4">
        <div className="mx-auto bg-gray-200 max-w-9xl sm:mt-3 sm:px-6 sm:py-32 lg:px-5 mb-0">
          <div className="relative isolate min-h-[600px] overflow-hidden bg-gray-900 px-8 pt-5 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-8 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#1c19e3" />
                  <stop offset={1} stopColor="#4fb4ee" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Assistência Técnica de Máquinas de Lavar e Secar Samsung e LG
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                Serviço rápido, confiável e de qualidade.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contate-nos
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Veja mais <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <Image
                src="/maquina.webp"
                alt="Banner"
                width={1824}
                height={1080}
                objectPosition="center"
                className="z-0 absolute left-0 top-1 right-1 w-[70rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
