import { useState } from "react";
import Modal from "./components/Modal";
import PlayerCards from "./components/PlayerCards";

function App() {
  const [playerDatas, setPlayerDatas] = useState([]);
  const [isClose, setIsClose] = useState(false);

  return (
    <div className="App">
      <>
        <div className="w-full flex justify-center bg-gradient-to-right">
          <div className="p-5 flex justify-center w-full max-w-[720px] bg-white ">
            <div className="form-control gap-20 w-full ">
              <div className="input-group justify-center">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered w-full max-w-[720px]"
                />
                <select className="select select-bordered">
                  <option value={""} disabled>
                    Search by category
                  </option>
                  <option value="username">username</option>
                  <option value="email">email</option>
                  <option value="experience">experience</option>
                  <option value="lvl">lvl</option>
                </select>
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex justify-center">
                <label
                  htmlFor="my-modal-6"
                  className="btn"
                  onClick={() => setIsClose(true)}
                >
                  create new player
                </label>
                {isClose && (
                  <Modal
                    setPlayerDatas={setPlayerDatas}
                    playerDatas={playerDatas}
                    setIsClose={setIsClose}
                  />
                )}
              </div>
              <PlayerCards playerDatas={playerDatas} />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
