import { Rocket, Users, Building2, PackageOpen, Globe, Award, type LucideIcon } from "lucide-react"
interface TimelineItem {
    id: number
    title: string
    date: string
    description: string
  }
export function LogoIcon({ item }: { item: TimelineItem }) {
    // Map timeline items to specific icons based on their id or title
    const getIcon = (): LucideIcon => {
      switch (item.id) {
        case 1:
          return Building2
        case 2:
          return Rocket
        case 3:
          return Users
        case 4:
          return PackageOpen
        case 5:
          return Globe
        case 6:
          return Award
        default:
          return Building2
      }
    }
  
    const Icon = getIcon()
  
    return <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
  }
  
  