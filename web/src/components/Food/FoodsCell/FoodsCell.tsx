import type { FindFoods } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Foods from 'src/components/Food/Foods'

export const QUERY = gql`
  query FindFoods {
    foods {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No foods yet. '}
      <Link
        to={routes.newFood()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ foods }: CellSuccessProps<FindFoods>) => {
  return <Foods foods={foods} />
}
