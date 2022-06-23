import EditFoodCell from 'src/components/Food/EditFoodCell'

type FoodPageProps = {
  id: number
}

const EditFoodPage = ({ id }: FoodPageProps) => {
  return <EditFoodCell id={id} />
}

export default EditFoodPage
