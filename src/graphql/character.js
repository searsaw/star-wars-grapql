export const Character = `
  # A character from in the Star Wars franchise
  type Character {
    # The character's name
    name: String!
    # The character's birth year
    birth_year: String!
    # The character's eye color
    eye_color: String!
    # The character's gender (we should not assume it though)
    gender: String!
    # The character's hair color
    hair_color: String!
  }
`;

export const resolvers = {};
