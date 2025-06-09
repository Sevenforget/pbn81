import Link from "next/link"

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 border-b border-indigo-500 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          마음의 여백
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                홈
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                소개
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                연락처
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
