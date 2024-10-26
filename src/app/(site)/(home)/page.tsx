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
    <div className="min-w-full mb-4">
      <Hero />
      <div className="bg-white min-h-[300px] px-4 mx-auto">
        <div className="bg-gray-200 h-full mx-auto flex flex-col items-center justify-center">
          <div className="mx-auto">
            <BookingForm />
          </div>
          <div className="bg-gray-200 mx-auto items-center justify-center mb-10 px-3 sm:mb-6 text-center">
            <StyledButton text="NOSSOS SERVICOS" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 mt-3 text-black">
              Conheça a nossa empresa e entenda por que somos a melhor escolha
              para você
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-2 text-black">
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
          <div className="px-6">
            <div className="bg-white p-7 rounded-lg shadow-lg flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 w-full text-left mb-6 md:mb-0">
                <div className="flex items-center bg-white p-2 rounded space-x-2 justify-center md:justify-start">
                  <Image
                    src="/logosamsung.png"
                    alt="Logo da Empresa Samsung"
                    width={80}
                    height={30}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                  <Image
                    src="/lg_logo.png"
                    alt="Logo da Empresa LG"
                    width={80}
                    height={30}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-black">
                  Por que escolher nosso serviço?
                </h3>
                <div className="mb-6 space-y-4 max-w-[600px]">
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
                    <strong>Nossos Serviços:</strong> Manutenção Preventiva,
                    Reparos, Instalação, Suporte Técnico.
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
              <div className="md:w-1/2 w-full flex justify-center">
                <Image
                  src="/maquina.webp"
                  alt="Imagem de Máquina"
                  width={500}
                  height={500}
                  className="w-full h-auto max-w-xs md:max-w-md"
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
