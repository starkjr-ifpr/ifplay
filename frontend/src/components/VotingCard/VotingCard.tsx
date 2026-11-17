import { Badge } from '../Badge/Badge'
import { Button } from '../Button/Button'
import { Card } from '../Card/Card'

type VotingCardProps = {
  title: string
  songsCount: number
  votesPerVoter: number
  status: 'ACTIVE' | 'SCHEDULED' | 'CLOSED'
  onParticipate?: () => void
}

const statusDetails = {
  ACTIVE: { label: 'Ativa', variant: 'success' },
  SCHEDULED: { label: 'Agendada', variant: 'warning' },
  CLOSED: { label: 'Encerrada', variant: 'neutral' },
} as const

export function VotingCard({ title, songsCount, votesPerVoter, status, onParticipate }: VotingCardProps) {
  const { label, variant } = statusDetails[status]

  return (
    <Card className="flex min-h-64 flex-col justify-between">
      <div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h2 className="min-w-0 break-words text-xl font-semibold text-slate-900">{title}</h2>
          <Badge variant={variant}>{label}</Badge>
        </div>
        <dl className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-slate-50 p-4">
            <dt className="text-sm text-slate-600">Músicas</dt>
            <dd className="mt-1 text-2xl font-bold text-slate-900">{songsCount}</dd>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <dt className="text-sm text-slate-600">Votos por aluno</dt>
            <dd className="mt-1 text-2xl font-bold text-slate-900">{votesPerVoter}</dd>
          </div>
        </dl>
      </div>
      {status === 'ACTIVE' && (
        <Button
          className="mt-6 w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          onClick={onParticipate}
        >
          Participar
        </Button>
      )}
    </Card>
  )
}
