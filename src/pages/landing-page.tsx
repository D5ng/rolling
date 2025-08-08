import { Link } from "react-router"

import { FirstPointImage, logo, SecondPointImage } from "@/shared/assets/images"
import Button from "@/shared/design-system/button/button"

export default function LandingPage() {
  return (
    <>
      <header className="sticky top-0 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3 desktop:w-[1200px] desktop:mx-auto">
          <h1 className="h-[30px]">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </h1>
          <Button asChild variant="outlined" className="w-auto py-2.5 px-4">
            <Link to="/create-paper">롤링 페이퍼 만들기</Link>
          </Button>
        </div>
      </header>
      <main>
        <section className="px-5 pt-10 desktop:w-[1200px] desktop:mx-auto">
          <div className="p-6 bg-surface rounded-3xl tablet:p-10 desktop:flex desktop:justify-between desktop:p-16">
            <div>
              <span className="w-fit px-3 py-1 font-bold text-sm bg-purple-600 text-white rounded-full desktop:py-1.5">
                Point. 01
              </span>
              <h2 className="text-lg font-bold mt-4 tablet:text-2xl">
                누구나 손쉽게, 온라인
                <br className="hidden desktop:block" /> 롤링 페이퍼를 만들 수 있어요
              </h2>
              <p className="text-sm text-gray-500 mt-1 tablet:text-lg tablet:mt-2">로그인 없이 자유롭게 만들어요.</p>
            </div>
            <div className="mt-4 tablet:mt-8 desktop:w-[720px] desktop:mt-0">
              <img src={FirstPointImage} alt="롤링 페이퍼 만들기" className="w-full" />
            </div>
          </div>
        </section>
        <section className="px-5 pt-6 desktop:w-[1200px] desktop:mx-auto">
          <div className="p-6 bg-surface rounded-3xl tablet:p-10 desktop:flex desktop:justify-end desktop:flex-row-reverse">
            <div>
              <span className="w-fit px-3 py-1 font-bold text-sm bg-purple-600 text-white rounded-full desktop:py-1.5">
                Point. 02
              </span>
              <h2 className="text-lg font-bold mt-4 tablet:text-2xl">
                서로에게 이모지로 감정을 <br className="block tablet:hidden desktop:block" />
                표현해보세요
              </h2>
              <p className="text-sm text-gray-500 mt-1 tablet:text-lg tablet:mt-2">로그인 없이 자유롭게 만들어요.</p>
            </div>
            <div className="mt-4 tablet:mt-8 desktop:w-[720px] desktop:mt-0">
              <img src={SecondPointImage} alt="롤링 페이퍼 만들기" className="w-full" />
            </div>
          </div>
        </section>
        <div className="w-full px-5 mt-10 desktop:flex desktop:justify-center">
          <Button className="w-full h-14 rounded-xl desktop:w-[280px]">
            <Link to="/papers">구경해보기</Link>
          </Button>
        </div>
      </main>
    </>
  )
}
