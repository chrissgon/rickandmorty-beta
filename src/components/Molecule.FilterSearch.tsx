import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getCharacters, selectCharactersPage } from "../features"

export default function MoleculeFilterSearch() {
  const [type, setType] = useState("character")
  const [input, setInput] = useState("")
  const page = useAppSelector(selectCharactersPage)

  function searchByFilters(): void {
    if(input.trim() === ""){
      return
    }
    console.log(type);
    if (type === "character") {
      useAppDispatch(getCharacters(page))
      return
    }
    if (type === "episode") {
      return
    }
  }

  return (
    <header className="relative flex max-lg:flex-col-reverse gap-4 justify-between z-10">
      <label className="group group-row">
        <div className="!w-full  group-item input-group input">
          <i className="bi bi-search"></i>
          <input
            onChange={e => setInput(e.target.value)}
            type="text"
            className="input !w-full"
            placeholder="Pesquise"
          />
        </div>
        <button onClick={useAppDispatch(getCharacters(page))} className="btn btn-solid-primary group-item">Pesquisar</button>
      </label>

      <div className="flex flex-wrap items-center gap-2">
        <span className="whitespace-nowrap">Filtrar por:</span>
        <button
          onClick={() => setType("character")}
          className={`btn rounded-full ${type === "character" ? "btn-solid-primary" : "btn-white"}`}
        >
          <i className="bi bi-person text-lg leading-3"></i> Personagens
        </button>
        <button
          onClick={() => setType("episode")}
          className={`btn rounded-full ${type === "episode" ? "btn-solid-primary" : "btn-white"}`}
        >
          <i className="bi bi-play-btn align-middle text-lg leading-3"></i>{" "}
          Episódios
        </button>
        <button
          onClick={() => setType("location")}
          className={`btn rounded-full ${type === "location" ? "btn-solid-primary" : "btn-white"}`}
        >
          <i className="bi bi-globe-americas align-middle text-lg leading-3"></i>{" "}
          Planetas
        </button>
      </div>
    </header>
  )
}
