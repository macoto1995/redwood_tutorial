export const schema = gql`
  type Food {
    id: Int!
    name: String!
  }

  type Query {
    foods: [Food!]! @requireAuth
    food(id: Int!): Food @requireAuth
  }

  input CreateFoodInput {
    name: String!
  }

  input UpdateFoodInput {
    name: String
  }

  type Mutation {
    createFood(input: CreateFoodInput!): Food! @requireAuth
    updateFood(id: Int!, input: UpdateFoodInput!): Food! @requireAuth
    deleteFood(id: Int!): Food! @requireAuth
  }
`
