import type { FindFoodById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Food from 'src/components/Food/Food'

export const QUERY = gql`
  query FindFoodById($id: Int!) {
    food: food(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Food not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ food }: CellSuccessProps<FindFoodById>) => {
  return <Food food={food} />
}
