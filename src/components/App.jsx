// import { Profile } from "components/Profile/Profile";
import { Profile } from "components/Profile/Profile";
import user from "../user.json";

// username, tag, location, avatar, stats 
export const App = () => {
  const {username, tag, location, avatar, stats} = user;
  return (
    <div>
      <Profile 
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
      />
    </div>
  );
};


