import { getUserFullName } from "../helpers/user";
import type { User } from "../interfaces/User";

interface Props {
  user: User
}


export default function SingleUser({ user }: Props) {
  const fullName = getUserFullName(user);

  return (
    <div className="user-card">

      <h1>{user.name.first}</h1>

      <img
        className='w-56 h-56 rounded-full'
        src={user?.picture.large}
      />

      <h2>{fullName}</h2>

      <p>From: {user?.location.country}!</p>

    </div>
  );
}