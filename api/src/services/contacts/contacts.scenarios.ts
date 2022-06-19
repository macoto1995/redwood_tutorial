import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: {
      data: { name: 'String', email: 'test1@example.com', message: 'String' },
    },
    two: {
      data: { name: 'String', email: 'test2@example.com', message: 'String' },
    },
  },
})

export type StandardScenario = typeof standard
