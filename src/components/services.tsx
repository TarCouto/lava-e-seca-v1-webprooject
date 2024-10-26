'use client'

import { useState, MouseEvent as ReactMouseEvent } from 'react'
import { StyledButton } from './separator'

export function ServicesDoubts() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  const handleSmoothScroll = (
    e: ReactMouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault()
    console.log(`Attempting to scroll to ${targetId}`)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerOffset = document.querySelector('nav')?.clientHeight || 0
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      console.log(`Scrolling to position: ${offsetPosition}`)
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    } else {
      console.error(`Element with ID ${targetId} not found`)
    }
  }

  const questions = [
    {
      question: 'Código: tE, LE',
      answer:
        'Código tE: Este código indica algum problema na secagem.Código LE: Se o ciclo de lavagem for interrompido e código de erro LE for exibido no painel de sua lavadora, é uma indicação que ocorreu uma falha de comunicação entre a placa de controle e o motor ou sobrecarga.',
    },
    {
      question: 'Código: AE, dE',
      answer:
        'Código AE: Esse código indica um transbordamento interno de água. Entre em contato imediatamente para agendar uma visita técnica.Código dE: Quando o código DE é exibido no painel da lavadora, significa que há um problema relacionado à porta.Em alguns casos específicos, podem aparecer os seguintes códigos adicionais:dE1: Indica que a porta está danificada.dE2: Indica que a porta não foi fechada corretamente.',
    },
    {
      question: 'Código: 4E, 3E6',
      answer: 'Sugere-se obter assistência imediata de um técnico qualificado.',
    },
    {
      question: 'Código: 3E1, 3E',
      answer: 'Sugere-se obter assistência imediata de um técnico qualificado.',
    },
    {
      question: 'Código: PE, Cd',
      answer:
        'Código PE: Caso ocorra uma falha no sensor do nível da água, o painel da lavadora exibirá o código de erro PE.Código Cd: Durante o processo de secagem, o tambor atinge altas temperaturas.Para garantir a segurança e evitar acidentes ao retirar as roupas, a porta trava automaticamente e o visor exibe o código CD.',
    },
  ]

  return (
    <div className="flex flex-col md:flex-row items-start">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className="flex flex-col items-start">
          <StyledButton text="FAQ" />
          <h2 className="text-4xl font-bold mb-10 mt-3 text-black">
            Erros mais comuns em{' '}
            <span className="text-blue-500">Lava e Seca</span>
          </h2>
        </div>
        <p className="mb-6 text-black">
          Conheça os problemas mais frequentes nas máquinas de lavar e secar da
          LG e Samsung, e como nossa assistência técnica pode ajudar a
          resolvê-los.
        </p>
        <p className="mb-6 text-black">
          Nossa equipe está preparada para diagnosticar e reparar esses e outros
          problemas, garantindo que sua Lava e Seca volte a funcionar
          perfeitamente.
        </p>
        <button
          onClick={(e) => handleSmoothScroll(e, 'services-title')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md"
        >
          Serviços
        </button>
      </div>

      <div className="w-full md:w-1/2 bg-white p-10 rounded-lg shadow-lg">
        <ol className="list-decimal text-left">
          {questions.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-lg mb-2 bg-gray-100 p-4 rounded-lg text-black"
              onClick={() => toggleQuestion(index)}
            >
              <span
                className={`text-lg ${activeQuestion === index ? 'text-blue-500' : 'text-gray-800'}`}
              >
                {item.question}
              </span>
              {activeQuestion === index && (
                <div className="mt-2 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
