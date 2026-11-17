import { useId } from 'react'
import type { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export function Textarea({ label, error, id, className = '', 'aria-describedby': describedBy, ...props }: TextareaProps) {
  const generatedId = useId()
  const fieldId = id ?? generatedId
  const errorId = `${fieldId}-error`
  const description = [describedBy, error ? errorId : undefined].filter(Boolean).join(' ') || undefined

  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={fieldId} className="text-sm font-medium">{label}</label>}
      <textarea
        {...props}
        id={fieldId}
        aria-invalid={Boolean(error)}
        aria-describedby={description}
        className={`rounded-lg border px-3 py-2 outline-none ${error ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 ${className}`}
      />
      {error && <p id={errorId} className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
