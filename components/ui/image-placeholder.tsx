import { Image } from 'lucide-react'

interface ImagePlaceholderProps {
  caption: string
  width?: string
  height?: string
}

export function ImagePlaceholder({ caption, width = 'w-full', height = 'h-96' }: ImagePlaceholderProps) {
  return (
    <div className="flex flex-col gap-3" role="img" aria-label={caption}>
      <div className={`${width} ${height} flex items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100`}>
        <div className="text-center">
          <Image className="mx-auto mb-2 h-12 w-12 text-slate-400" />
          <p className="text-sm text-slate-500">Screenshot placeholder</p>
        </div>
      </div>
      <p className="text-sm font-medium text-slate-700">{caption}</p>
    </div>
  )
}
