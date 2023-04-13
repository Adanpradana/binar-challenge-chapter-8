const Modal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box ">
          <div className="p-4 flex flex-col gap-4 items-center ">
            <label
              htmlFor="my-modal-6"
              className="btn btn-sm btn-circle bg-[#985ACE] hover:bg-violet-300 border-none absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="text-center">
              <h1>Create New Players</h1>
            </div>
            <div className="w-full  relative ">
              <label
                htmlFor="username"
                className="absolute px-3 text-slate-400"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                className="px-3 pt-6 bg-[#F8F1FF] w-full   placeholder-violet-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="w-full  relative ">
              <label htmlFor="email" className="absolute px-3 text-slate-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="px-3 pt-6 bg-[#F8F1FF] w-full   placeholder-violet-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="w-full  relative ">
              <label
                htmlFor="password"
                className="absolute px-3 text-slate-400"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="px-3 pt-6 bg-[#F8F1FF] w-full   placeholder-violet-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="w-full  relative ">
              <label
                htmlFor="experience"
                className="absolute px-3 text-slate-400"
              >
                Experience
              </label>
              <input
                id="experience"
                type="number"
                className="px-3 pt-6 bg-[#F8F1FF] w-full   placeholder-violet-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="w-full  relative ">
              <label htmlFor="lvl" className="absolute px-3 text-slate-400">
                Lvl
              </label>
              <input
                id="lvl"
                type="number"
                className="px-3 pt-6 bg-[#F8F1FF] w-full   placeholder-violet-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="modal-action w-full">
              <label
                htmlFor="my-modal-6"
                className="btn bg-[#985ACE]  hover:bg-violet-300 hover:border-none border-none w-full"
              >
                Submit
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
