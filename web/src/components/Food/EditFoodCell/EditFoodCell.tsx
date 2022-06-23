import type { EditFoodById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FoodForm from 'src/components/Food/FoodForm'

export const QUERY = gql`
  query EditFoodById($id: Int!) {
    food: food(id: $id) {
      id
      name
    }
  }
`
const UPDATE_FOOD_MUTATION = gql`
  mutation UpdateFoodMutation($id: Int!, $input: UpdateFoodInput!) {
    updateFood(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ food }: CellSuccessProps<EditFoodById>) => {
  const [updateFood, { loading, error }] = useMutation(UPDATE_FOOD_MUTATION, {
    onCompleted: () => {
      toast.success('Food updated')
      navigate(routes.foods())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateFood({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Food {food.id}</h2>
      </header>
      <div className="rw-segment-main">
        <FoodForm food={food} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
