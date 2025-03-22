"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

interface Props {
    start: number,
    end:number
}

export function ProgressBar({start,end}:Props) {
  const [progress, setProgress] = React.useState(start)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(end), 500)
    return () => clearTimeout(timer)
  }, [end])

  return <Progress value={progress} />
}
