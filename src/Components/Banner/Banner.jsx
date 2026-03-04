import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";

const Banner = ({inProgressTasks}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-14 w-11/12 mx-auto">

      <div className="relative h-[250px] flex flex-col justify-center items-center text-white bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-xl overflow-hidden">
        <img
          src={vector1}
          className="absolute left-0 top-0 h-full object-contain"
        />
        <img
          src={vector2}
          className="absolute right-0 top-0 h-full object-contain"
        />

        <h2 className="text-xl z-10">In-Progress</h2>
        <p className="text-5xl font-bold z-10">{inProgressTasks.length}</p>
      </div>
      <div className="relative h-[250px] flex flex-col justify-center items-center text-white bg-linear-to-br from-[#54CF68] to-[#00827A] rounded-xl overflow-hidden">
        <img
          src={vector1}
          className="absolute left-0 top-0 h-full object-contain"
        />
        <img
          src={vector2}
          className="absolute right-0 top-0 h-full object-contain"
        />

        <h2 className="text-xl z-10">Resolved</h2>
        <p className="text-5xl font-bold z-10">0</p>
      </div>
    </div>
  );
};

export default Banner;