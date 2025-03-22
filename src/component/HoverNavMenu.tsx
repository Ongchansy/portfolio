import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image"
import Link from "next/link"

interface Props {
  iconUrl: string
  href:string
  message: string
}

export function MenuTooltip({
  iconUrl,
  href,
  message
}:Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href} >
          <div className="w-[40px] h-[40px] items-center justify-center flex rounded-full bg-gray-50 hover:bg-yellow-100 transition-all">
            <Image src={iconUrl} alt="" height={18} width={18}/>
          </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{message}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
