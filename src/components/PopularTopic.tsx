import Image from "./Image";

const PopularTopic = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <span className="text-textGray text-sm">Technology • Trending</span>
        <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
      </div>
      <h2 className="text-textGrayLight font-bold">OpenAI</h2>
      <span className="text-textGray text-sm">20K posts</span>
    </div>
  );
};

export default PopularTopic;
