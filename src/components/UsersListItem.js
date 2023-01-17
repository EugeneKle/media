import { GoTrashcan } from "react-icons/go";
import { removeUser } from "../store";
import Button from "./Button";
import useThunk from "../hooks/use-thunk";

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 justify-between item-center cursor-pointer">
        <Button loading={isLoading} onClick={handleClick}>
          <GoTrashcan />
        </Button>
        {error && <div>Error deleting user.</div>}
        {user.name}
      </div>
    </div>
  );
}

export default UsersListItem;
