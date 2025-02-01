import Link from "next/link";
import Image from "./Image";
import RecommendedAccount from "./RecommendedAccount";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <RecommendedAccount />
      <RecommendedAccount />
      <RecommendedAccount />
      <Link href="/" className="text-iconBlue text-xs">
        Show More
      </Link>
    </div>
  );
};

export default Recommendations;
