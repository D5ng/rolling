import { Link } from "react-router"

import { LogoIcon } from "@/shared/assets/icons"
import Button from "@/shared/design-system/button/button"

export default function Header() {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3 desktop:w-[1200px] desktop:mx-auto">
        <h1 className="h-[30px]">
          <Link to="/">
            <LogoIcon />
            <span className="sr-only">롤링 페이퍼 바로가기</span>
          </Link>
        </h1>
        <Button asChild variant="outlined" className="w-auto py-2.5 px-4">
          <Link to="/create-paper">롤링 페이퍼 만들기</Link>
        </Button>
      </div>
    </header>
  )
}
