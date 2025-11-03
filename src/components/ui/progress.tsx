import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'
import { useQuiz } from '../store'

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  const { isDark } = useQuiz()

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        `bg-primary/20 relative h-2 w-full overflow-hidden rounded-full ${isDark && 'bg-(--color-blue850)'}`,
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full w-full flex-1 bg-(--color-purple600) transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
