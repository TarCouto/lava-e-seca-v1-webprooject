import BookingForm from '@/components/form'
import { Hero } from '@/components/hero'
import { StyledButton } from '@/components/separator'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="min-w-full">
      <Hero />
      <div className="bg-white min-h-[300px] px-4 mx-auto">
        <div className="bg-gray-200 h-full  flex flex-col items-center justify-center pb-6">
          <div className="mx-auto">
            <BookingForm />
          </div>
          <div className="bg-gray-200 mx-auto items-center justify-center mb-10 px-4 sm:mb-6 text-center">
            <StyledButton text="NOSSOS SERVICOS" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 mt-3 text-black max-w-[1200px] mx-auto ">
              Conheça a nossa empresa e entenda por que somos a melhor escolha
              para você
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-2 text-black max-w-[1280px] mx-auto text-center">
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
          <div className="px-6 min-w-full">
            <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 w-full text-left mb-6 md:mb-0 flex flex-col justify-normal mx-auto px-8 py-8 max-w-full container">
                <div className="items-center bg-white rounded space-x-2 justify-center md:justify-start flex">
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
            <section className="bg-white dark:text-gray-800 rounded-md shadow-lg min-w-full">
              <div className="container flex flex-col justify-center   px-4 py-8  md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">
                  Erros mais comuns em{' '}
                  <span className="text-blue-500">Lava e Seca</span>
                </h2>
                <p className="mt-4 mb-8 dark:text-gray-600 text-lg">
                  Conheça os problemas mais frequentes nas máquinas de lavar e
                  secar da LG e Samsung, e como nossa assistência técnica pode
                  ajudar a resolvê-los. Nossa equipe está preparada para
                  diagnosticar e reparar esses e outros problemas, garantindo
                  que sua Lava e Seca volte a funcionar perfeitamente.
                </p>
                <div className="space-y-4">
                  <details className="w-full border rounded-lg group">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 group-open:text-blue-500">
                      Código: tE, LE
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                      Código tE: Este código indica algum problema na secagem.
                      <br />
                      Código LE: Se o ciclo de lavagem for interrompido e código
                      de erro LE for exibido no painel de sua lavadora, é uma
                      indicação que ocorreu uma falha de comunicação entre a
                      placa de controle e o motor ou sobrecarga.
                    </p>
                  </details>

                  <details className="w-full border rounded-lg group">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 group-open:text-blue-500">
                      Código: AE, dE
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                      Código AE: Esse código indica um transbordamento interno
                      de água. Entre em contato imediatamente para agendar uma
                      visita técnica.
                      <br />
                      Código dE: Quando o código DE é exibido no painel da
                      lavadora, significa que há um problema relacionado à
                      porta.
                      <br />
                      Em alguns casos específicos, podem aparecer os seguintes
                      códigos adicionais:
                      <br />
                      dE1: Indica que a porta está danificada.
                      <br />
                      dE2: Indica que a porta não foi fechada corretamente.
                    </p>
                  </details>

                  <details className="w-full border rounded-lg group">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 group-open:text-blue-500">
                      Código: 4E, 3E6
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                      Sugere-se obter assistência imediata de um técnico
                      qualificado.
                    </p>
                  </details>

                  <details className="w-full border rounded-lg group">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 group-open:text-blue-500">
                      Código: 3E1, 3E
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                      Sugere-se obter assistência imediata de um técnico
                      qualificado.
                    </p>
                  </details>

                  <details className="w-full border rounded-lg group">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 group-open:text-blue-500">
                      Código: PE, Cd
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                      Código PE: Caso ocorra uma falha no sensor do nível da
                      água, o painel da lavadora exibirá o código de erro PE.
                      <br />
                      Código Cd: Durante o processo de secagem, o tambor atinge
                      altas temperaturas. Para garantir a segurança e evitar
                      acidentes ao retirar as roupas, a porta trava
                      automaticamente e o visor exibe o código CD.
                    </p>
                  </details>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
