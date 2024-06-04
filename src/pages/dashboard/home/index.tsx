import React, { useContext } from "react";
import { StatisticsCard } from "src/widgets/cards";
import { UserIcon } from "@heroicons/react/24/solid";
import { UserContext } from "src/context/UserContext";

export function HomePage() {
  const { users } = useContext(UserContext);
  return (
    <div className="mt-12 min-h-[calc(100vh-200px)]">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <StatisticsCard
          title={"Total Users"}
          icon={React.createElement(UserIcon, {
            className: "w-6 h-6 text-white",
          })}
          color="gray"
          value={users.length.toString() || "-"}
        />
      </div>
    </div>
  );
}

export default HomePage;
