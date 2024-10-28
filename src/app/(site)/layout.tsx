import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-[1600px] z-10 flex flex-col items-center justify-center sm:gap-[1rem] mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
