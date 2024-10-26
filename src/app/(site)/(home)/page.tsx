import BookingForm from '@/components/form'
import { Hero } from '@/components/hero'
import { StyledButton } from '@/components/separator'
import { ServicesDoubts } from '@/components/services'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="min-w-full  ">
      <Hero />
      <div className="bg-white min-h-[300px] px-4 mx-auto">
        <div className="bg-gray-200 h-full mx-auto items-center justify-center">
          <div className="mx-auto -mt-0">
            <BookingForm />
          </div>
          <div className="bg-gray-200 max-h-[300px] mx-auto items-center justify-center mb-10 px-3 sm:mb-6">
            <StyledButton text={'NOSSOS SERVICOS'} />
            <h2 className="text-4xl font-bold mb-10 mt-3 text-center text-black">
              Conheça a nossa empresa e entenda por que somos a melhor escolha
              para você
            </h2>
            <p className="mb-2 text-center text-black">
              Somos uma assistência técnica que iniciou suas atividades em 1998,
              focada no conserto de toda a Linha Branca da LG e outras marcas
              nacionais. Em meados de 2001, passamos a nos especializar
              exclusivamente em Lava e Seca, Lavadoras e Secadoras das marcas LG
              e Samsung, devido à dificuldade que os consumidores enfrentavam
              para encontrar uma assistência técnica capaz de resolver os
              problemas com qualidade, agilidade e preço justo. Trabalhamos dia
              e noite para proporcionar um serviço de excelente qualidade,
              mantendo nossa Taxa Zero de reclamações no Reclame Aqui.
            </p>
          </div>
          <div className=" px-6">
            <div className="bg-white p-7 rounded-lg shadow-lg flex items-center mb-16">
              <div className="w-2/2 text-left">
                <div className="flex items-center bg-white p-2 rounded space-x-2">
                  <Image
                    src="/logosamsung.png"
                    alt="Logo da Empresa Samsung"
                    width={80}
                    height={30}
                  />
                  <Image
                    src="/lg_logo.png"
                    alt="Logo da Empresa LG"
                    width={80}
                    height={30}
                  />
                </div>

                <h3 className="text-3xl font-semibold mb-10 text-black">
                  Por que escolher nosso serviço?
                </h3>
                <div className="mb-6">
                  <p className="text-black">
                    <strong>Expertise e Qualificação:</strong> Técnicos
                    qualificados e treinados nas tecnologias LG e Samsung.
                    Diagnóstico rápido e preciso.
                  </p>
                  <p className="text-black">
                    <strong>Qualidade e Agilidade:</strong> Garantimos
                    funcionamento perfeito da sua Lava e Seca no menor tempo
                    possível.
                  </p>
                  <p className="text-black">
                    <strong>Preço Justo:</strong> Serviços de alta qualidade a
                    preços competitivos, sem surpresas.
                  </p>
                  <p className="text-black">
                    <strong>Taxa Zero de Reclamações:</strong> Compromisso com a
                    satisfação total dos nossos clientes e excelência no
                    atendimento.
                  </p>
                  <p className="text-black">
                    <strong>Nossos Serviços:</strong>
                    Manutenção Preventiva, Reparos, Instalação, Suporte Técnico.
                  </p>
                  <p className="text-black">
                    Escolha nossa assistência técnica e tenha tranquilidade.
                    Entre em contato conosco hoje mesmo!
                  </p>
                </div>

                <Link href="#booking-form">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md">
                    Contate-nos
                  </button>
                </Link>
              </div>
              <div className="w-1/2">
                <Image
                  src="/maquina.webp"
                  alt="Tire"
                  className=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <ServicesDoubts />
          </div>
        </div>
      </div>
    </div>
  )
}
