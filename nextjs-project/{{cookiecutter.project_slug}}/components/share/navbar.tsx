import Title from "../base/atoms/a.title"

const Navbar = () => {
  return (
    <div className="navbar dark:bg-black/5 px-12 border-b dark:border-white/10 border-dark/10 dark:backdrop-blur-sm backdrop-blur-sm fixed left-0 right-0 top-0 z-30">
      <div className="flex-1">
        <div className="text-lg"><Title className="dark:text-white text-black text-xl text-bold">Complementarity</Title></div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <p>Press <kbd className="kbd kbd-sm">F</kbd> to pay</p>
          </li>
          <li className="mt-0.5">
            <a className="hover:text-white">Contact us</a>
          </li>
          <li className="mt-0.5">
            <details>
              <summary>
                Connexion
              </summary>
              <ul className="p-2 transition-all z-50 dark:bg-black/5 px-4 border dark:border-white/10 border-dark/10 dark:backdrop-blur-sm backdrop-blur-sm ">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar