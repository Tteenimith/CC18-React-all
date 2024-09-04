import { useContext } from "react";
import UserContext from "./contexts/UserContext";

export default function Avatar() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <img className="h-[80px]" src={user?.image} alt="" />
    </div>
  );
}
