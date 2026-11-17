import { Badge } from '../Badge/Badge'
import { Button } from '../Button/Button'
import { Card } from '../Card/Card'

type SongCardProps = {
  title: string
  artist?: string
  selected?: boolean
  onVote?: () => void
}

export function SongCard({ title, artist, selected = false, onVote }: SongCardProps) {
  return (
    <Card className={`relative flex min-h-64 flex-col justify-between ${selected ? 'ring-2 ring-blue-600' : ''}`}>
      <div>
        <div className="flex size-12 items-center justify-center rounded-xl bg-blue-100 text-2xl" aria-hidden="true">
          🎵
        </div>
        <h2 className="mt-5 break-words text-xl font-semibold text-slate-900">{title}</h2>
        {artist && <p className="mt-1 break-words text-slate-600">{artist}</p>}
        {selected && <Badge variant="info" className="mt-3">Selecionada</Badge>}
      </div>
      <Button
        className="mt-6 w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        aria-label={`Votar em ${title}`}
        aria-pressed={selected}
        onClick={onVote}
      >
        Votar
      </Button>
    </Card>
  )
}
