import { MdOutlineEditNote, MdDeleteForever } from "react-icons/md";

const PlayerCards = ({
  username,
  email,
  experience,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className=" card bg-base-100 shadow-xl w-full md:w-80 ">
      <div className="card-body items-center text-center">
        <div className=" w-full flex justify-end items-center gap-1">
          <div
            className="hover:bg-slate-100 rounded-md p-1 tooltip cursor-pointer"
            data-tip="edit player"
            onClick={handleEdit}
          >
            <span className="text-xl text-slate-400">
              <MdOutlineEditNote />
            </span>
          </div>
          <div
            className="hover:bg-slate-100 rounded-md p-1 tooltip cursor-pointer"
            data-tip="delete player"
            onClick={handleDelete}
          >
            <span>
              <MdDeleteForever />
            </span>
          </div>
        </div>
        <h2 className="card-title">{username}</h2>
        <p>{email}</p>
        <p>{experience}</p>
      </div>
      <p className="absolute bottom-2 text-slate-400 text-xs left-4 pt-2">
        created at:
      </p>
    </div>
  );
};
export default PlayerCards;
