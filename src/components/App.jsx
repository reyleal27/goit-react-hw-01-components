import Profile from "./Profile/Profile";
import user from "./data/user.json";
import FriendList from "./FriendList/FriendList";
import friends from "./data/friends.json";
import datas from "./data/data.json";
import StatisticsStats from "./Statistics/StatisticStats";
import TransactionHistory from "./Transaction/Transaction";
import transactions from "./data/transactions.json";

export const App = () => {
  return (
    <div>
      <Profile
        key = {user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} 
        />
      <StatisticsStats
      title="Upload Stats"
      stats={datas}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </div>
  );
};


