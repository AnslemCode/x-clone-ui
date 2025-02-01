import Image from "./Image";

const RecommendedAccount = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="relative rounded-full overflow-hidden w-10 h-10">
          <Image
            path="general/avatar.png"
            alt="John Doe"
            w={100}
            h={100}
            tr={true}
          />
        </div>
        <div className="">
          <h1 className="text-md font-bold">John Doe</h1>
          <span className="text-textGray text-sm">@johnDoe</span>
        </div>
      </div>
      <button className="bg-iconBlue px-4 py-1 font-semibold rounded-full">
        Follow
      </button>
    </div>
  );
};

export default RecommendedAccount;
