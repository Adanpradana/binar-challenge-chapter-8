import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const CardEdit = ({
  cancelEdit,
  username,
  email,
  experience,
  playerDatas,
  edit,
  setEdit,
  setPlayerDatas,
}) => {
  const [userNameEdit, setUserNameEdit] = useState("");
  const [emailEdit, setEmailEdit] = useState("");
  const [expEdit, setExpEdit] = useState(0);

  const editUserName = (e) => {
    setUserNameEdit(e.target.value);
  };
  const editEmail = (e) => {
    setEmailEdit(e.target.value);
  };
  const editExp = (e) => {
    setExpEdit(e.target.value);
  };

  const saveEdit = (event) => {
    event.preventDefault();
    const updatedPlayerDatas = [...playerDatas];
    const index = updatedPlayerDatas.findIndex(
      (playerData) => playerData.id === edit.id
    );
    if (index !== -1) {
      updatedPlayerDatas[index] = {
        ...updatedPlayerDatas[index],
        userName: userNameEdit,
        email: emailEdit,
        experience: expEdit,
      };
      setPlayerDatas(updatedPlayerDatas);
      setEdit({});
    }
  };
  return (
    <div className="card  bg-base-100 shadow-xl w-full md:w-80">
      <form onSubmit={saveEdit}>
        <div className="card-body items-center text-center">
          <div className=" w-full flex justify-end items-center gap-1">
            <div
              className="hover:bg-slate-100 rounded-md p-1 tooltip cursor-pointer"
              data-tip="cancel edit"
              onClick={cancelEdit}
            >
              <span className="text-xl text-slate-400">
                <AiFillCloseSquare />
              </span>
            </div>
          </div>

          <div className="w-full ">
            <input
              onChange={editUserName}
              type="text"
              placeholder={username}
              className="bg-[#F8F1FF] w-full text-center placeholder-violet-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500border px-1"
            />
          </div>
          <div className="w-full ">
            <input
              onChange={editEmail}
              type="text"
              placeholder={email}
              className="bg-[#F8F1FF] w-full text-center placeholder-violet-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500border px-1"
            />
          </div>
          <div className="w-full ">
            <input
              onChange={editExp}
              type="number"
              placeholder={experience}
              className="bg-[#F8F1FF] w-full text-center placeholder-violet-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500border px-1"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Save Edit"
              className="btn btn-xs btn-primary"
            />
          </div>
        </div>
      </form>
      <p className="absolute bottom-2 text-slate-400 text-xs left-4 pt-2">
        created at:
      </p>
    </div>
  );
};

export default CardEdit;
