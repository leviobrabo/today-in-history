import Link from "next/link"
import { IconTelegram } from "../Icon"

const Footer = () => {
  return (
    <footer className="w-full dark:text-CustomAntiqueWhite text-CustomCharcoal lg:text-lg flex items-center justify-center py-10">
        <Link href='https://t.me/today_in_historys' className="lg:no-underline hover:underline flex gap-2 items-center transition-transform duration-700 hover:scale-105">
          <IconTelegram/>
          today_in_historys
        </Link>
    </footer>
  )
}

export default Footer