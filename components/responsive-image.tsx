import Image from "next/image"
import { cn } from "@/lib/utils"

interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export default function ResponsiveImage({ src, alt, className, priority = false }: ResponsiveImageProps) {
  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  )
}
