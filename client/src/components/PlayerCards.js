import { Children } from "react";
import { MdOutlineEditNote, MdDeleteForever } from "react-icons/md";
const PlayerCards = ({ playerDatas }) => {
  return (
    <div className="flex justify-between  gap-5 flex-wrap">
      {Children.toArray(
        playerDatas.map((player) => {
          return (
            <div className="card  bg-base-100 shadow-xl w-full md:w-80">
              <div className="card-body items-center text-center">
                <div className=" w-full flex justify-end items-center gap-1">
                  <div
                    className="hover:bg-slate-100 rounded-md p-1 tooltip cursor-pointer"
                    data-tip="edit player"
                  >
                    <span className="text-xl text-slate-400">
                      <MdOutlineEditNote />
                    </span>
                  </div>
                  <div
                    className="hover:bg-slate-100 rounded-md p-1 tooltip cursor-pointer"
                    data-tip="delete player"
                  >
                    <span className="text-xl text-slate-400">
                      <MdDeleteForever />
                    </span>
                  </div>
                </div>
                <h2 className="card-title">{player.userName}</h2>
                <p>{player.email}</p>
                <p>{player.experience}</p>
              </div>
              <p className="absolute bottom-2 text-slate-400 text-xs left-4 pt-2">
                created at: created at moment js
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};
export default PlayerCards;
