import FoodCell from 'src/components/Food/FoodCell'

type FoodPageProps = {
  id: number
}

const FoodPage = ({ id }: FoodPageProps) => {
  return <FoodCell id={id} />
}

export default FoodPage
