import { foods, food, createFood, updateFood, deleteFood } from './foods'
import type { StandardScenario } from './foods.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('foods', () => {
  scenario('returns all foods', async (scenario: StandardScenario) => {
    const result = await foods()

    expect(result.length).toEqual(Object.keys(scenario.food).length)
  })

  scenario('returns a single food', async (scenario: StandardScenario) => {
    const result = await food({ id: scenario.food.one.id })

    expect(result).toEqual(scenario.food.one)
  })

  scenario('creates a food', async () => {
    const result = await createFood({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a food', async (scenario: StandardScenario) => {
    const original = await food({ id: scenario.food.one.id })
    const result = await updateFood({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a food', async (scenario: StandardScenario) => {
    const original = await deleteFood({ id: scenario.food.one.id })
    const result = await food({ id: original.id })

    expect(result).toEqual(null)
  })
})
