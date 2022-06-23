import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const foods: QueryResolvers['foods'] = () => {
  return db.food.findMany()
}

export const food: QueryResolvers['food'] = ({ id }) => {
  return db.food.findUnique({
    where: { id },
  })
}

export const createFood: MutationResolvers['createFood'] = ({ input }) => {
  return db.food.create({
    data: input,
  })
}

export const updateFood: MutationResolvers['updateFood'] = ({ id, input }) => {
  return db.food.update({
    data: input,
    where: { id },
  })
}

export const deleteFood: MutationResolvers['deleteFood'] = ({ id }) => {
  return db.food.delete({
    where: { id },
  })
}
