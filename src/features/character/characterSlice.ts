import { createAppSlice } from "../../app/createAppSlice"

interface ILocation {
  name: string
  url: string
}

interface ICharacter {
  id: string
  name: string
  species: string
  type: string
  gender: string
  image: string
  url: string
  episode: string[]
  location: ILocation
}

interface ICharacters extends Array<ICharacter> {}

interface IState {
  characters: ICharacters
  page: number
}

const initialState = {
  characters: [],
  page: 1,
} as IState

export const characterSlice = createAppSlice({
  name: "character",
  initialState,
  reducers: create => ({
    nextPage: create.reducer(state => {
      state.page = state.page + 1
    }),
    prevPage: create.reducer(state => {
      state.page = state.page - 1
    }),
    getCharacters: create.asyncThunk(
      async (page: number) => {
        console.log("page", page)
        return (
          await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        ).json()
      },
      {
        fulfilled: (state, action) => {
          state.characters = action.payload.results
        },
      },
    ),
  }),
  selectors: {
    selectCharacters: state => state.characters,
    selectCharactersPage: state => state.page,
  },
})

export const { getCharacters, nextPage, prevPage } = characterSlice.actions
export const { selectCharacters, selectCharactersPage } =
  characterSlice.selectors
