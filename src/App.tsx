import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "./app/hooks"
import {
  selectCharacters,
  getCharacters,
  selectCharactersPage,
  nextPage,
} from "./features"

import MoleculeFilterSearch from "./components/Molecule.FilterSearch"
import OrganismSectionHome from "./components/Organism.SectionHome"
import "./App.css"

export default function App() {
  const dispatch = useAppDispatch()
  const characters = useAppSelector(selectCharacters)
  const page = useAppSelector(selectCharactersPage)

  useEffect(() => {
    dispatch(getCharacters(page))
  }, [dispatch, page])

  return (
    <div className="p-10 xl:p-20 flex flex-col gap-10">
      <OrganismSectionHome />

      <MoleculeFilterSearch />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Quotes />
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://react-redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://reselect.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reselect
          </a>
        </span>
      </header> */}
    </div>
  )
}
