import { Children, useState } from "react";
import Modal from "./components/Modal";
import PlayerCards from "./components/PlayerCards";
import CardEdit from "./components/Edit";

function App() {
  const [playerDatas, setPlayerDatas] = useState([
    {
      id: 1,
      userName: "JohnDoe",
      email: "johndoe@example.com",
      experience: 5,
    },
    {
      id: 2,
      userName: "JaneDoe",
      email: "janedoe@example.com",
      experience: 8,
    },
    {
      id: 3,
      userName: "BobSmith",
      email: "bobsmith@example.com",
      experience: 10,
    },
  ]);
  const [edit, setEdit] = useState({});
  const [isClose, setIsClose] = useState(false);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [filteredDatas, setFilteredDatas] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  const searchResult = (e) => {
    e.preventDefault();
    try {
      if (!search) {
        throw new Error("search cannot be emnpty");
      }
      if (!value) {
        throw new Error("fill the value ppls");
      }
      const result = playerDatas.filter(
        (data) => data[value].toLowerCase() === search.toLowerCase()
      );
      setPlayerDatas(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDelete = (playerId) => {
    const remove = playerDatas.filter((player) => player.id !== playerId);
    setPlayerDatas(remove);
  };
  const handleEdit = (playerId) => {
    const findId = playerDatas.find((data) => data.id === playerId);
    setEdit(findId);
  };
  const cancelEdit = () => {
    setEdit({});
  };

  return (
    <div className="App">
      <>
        <div className="w-full flex justify-center bg-gradient-to-right">
          <div className="p-5 flex justify-center w-full max-w-[700px] bg-white ">
            <div className="form-control gap-5 w-full ">
              <div className="input-group justify-center">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered w-full max-w-[720px]"
                  onChange={handleSearch}
                />
                <select
                  className="select select-bordered"
                  onChange={handleValue}
                  value={value}
                >
                  <option value={""} disabled>
                    Search by category
                  </option>
                  <option value="userName">username</option>
                  <option value="email">email</option>
                  <option value="experience">experience</option>
                </select>
                <button className="btn btn-square" onClick={searchResult}>
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
              <div className="flex flex-wrap gap-2 justify-center">
                {Children.toArray(
                  playerDatas.map((playerData) =>
                    edit.id === playerData.id ? (
                      <CardEdit
                        cancelEdit={cancelEdit}
                        username={playerData.userName}
                        email={playerData.email}
                        experience={playerData.experience}
                        playerDatas={playerDatas}
                        edit={edit}
                        setEdit={setEdit}
                        setPlayerDatas={setPlayerDatas}
                      />
                    ) : (
                      <PlayerCards
                        username={playerData.userName}
                        email={playerData.email}
                        experience={playerData.experience}
                        handleDelete={() => handleDelete(playerData.id)}
                        handleEdit={() => handleEdit(playerData.id)}
                        // handleEditHandler={showEditHandler(playerData.id)}
                      />
                    )
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
