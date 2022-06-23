import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FoodForm from 'src/components/Food/FoodForm'

const CREATE_FOOD_MUTATION = gql`
  mutation CreateFoodMutation($input: CreateFoodInput!) {
    createFood(input: $input) {
      id
    }
  }
`

const NewFood = () => {
  const [createFood, { loading, error }] = useMutation(CREATE_FOOD_MUTATION, {
    onCompleted: () => {
      toast.success('Food created')
      navigate(routes.foods())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createFood({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Food</h2>
      </header>
      <div className="rw-segment-main">
        <FoodForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFood
