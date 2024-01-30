

import AtomFigmaLink from "./Atom.FigmaLink"
import AtomGithubLink from "./Atom.GithubLink"
import AtomDarkMode from "./Atom.DarkMode"

import logo from "/logo.svg"

export default function OrganismSectionHome() {
  

  return (
    <section className="flex flex-wrap gap-10">
      <header className="w-full flex justify-between items-center z-10">
        <img src={logo} alt="Logo" className="w-36" />

        <div className="flex items-center gap-5">
          <AtomDarkMode />
          <AtomGithubLink />
          <AtomFigmaLink />
        </div>
      </header>
      <article className="w-full lg:w-1/2 flex flex-col justify-center gap-8 my-12 lg:my-24">
        <h1 className="text-4xl font-bold">
          Tudo em um só lugar
          <span className="text-4xl text-theme"> porr#$%</span>
        </h1>

        <p className="text-base text-secondary">
          Detalhes sobre a porr#$% dos personagens, os episódios fod#$% e até
          planetas.
        </p>

        <div className="flex gap-5">
          {/* <button className="btn btn-solid-primary">Pesquisar</button> */}
          <button className="btn btn-solid-error">
            Meus Favoritos <i className="bi bi-heart-fill"></i>
          </button>
        </div>
      </article>
      <aside className="max-lg:hidden flex justify-center items-center flex-1">
        <img
          loading="lazy"
          src="/bg-home.png"
          alt=""
          className=" absolute w-[700px] -top-6"
        />
      </aside>
    </section>
  )
}
