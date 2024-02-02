import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import User from "./components/users/User";
import HeadingCard from "./components/Card/headingCard/HeadingCard";
import PostCard from "./components/Card/postCard/PostCard";
import AddNewCard from "./components/Card/addNewCard/AddNewCard";

import heart from "./assets/heart.svg";
import globe from "./assets/globe-2-outline.svg";
import hard from "./assets/Hard.svg";

import user1 from "./assets/User.svg";
import user2 from "./assets/Oval Copy.svg";
import user3 from "./assets/Oval Copy 2.svg";
import user4 from "./assets/Oval Copy 3.svg";
import user5 from "./assets/Oval Copy 4.svg";

import photo1 from "./assets/Photo1.svg";
import photo2 from "./assets/Photo2.svg";
import photo3 from "./assets/Photo3.svg";
import photo4 from "./assets/Photo4.svg";
import photo5 from "./assets/Photo5.svg";
import photo6 from "./assets/Photo6.svg";

function App() {
  return (
    <>
      <Navbar />
      <div className="menu-head">
        <div className="brackets">
          <h1 className="heading">Brackets</h1>
          <div className="bracketsLogo">
            <img src={heart} alt="" /> |
            <img src={globe} alt="" />
            <span className="text-public">Public</span>
            <img src={hard} alt="" /> |
          </div>
        </div>
        <div className="left-menu-head">
          <div className="users-group">
            <User src={user1} />
            <User src={user2} />
            <User src={user3} />
            <User src={user4} />
            <User src={user5} />
          </div>
          <div className="menu-heading">Menu</div>
        </div>
      </div>

      <main>
        <div className="design-container">
          <HeadingCard heading="Design" />
          <PostCard
            heading="Old fashioned recipe for preventing allergies and chemical sensitivities"
            users={[user1]}
            comments="34"
            likes="14"
            attchment="34"
          />
          <PostCard
            heading="Home business advertising ideas"
            text="Successful businesses know the importance of building and maintaining good working."
            users={[user3, user2]}
            comments="23"
            likes="12"
            attchment="43"
          />
          <PostCard
            imageUrl={photo1}
            heading="Old fashioned recipe for preventing allergies and chemical sensitivities"
            users={[user1]}
            comments="34"
            likes="14"
            attchment="34"
          />
          <AddNewCard />
        </div>

        <div className="protip-container">
          <HeadingCard heading="Protip" />
          <PostCard
            heading="Home business advertising ideas"
            text="Successful businesses know the importance of building and maintaining good working."
            users={[user1,user3,user4]}
            comments="76"
            likes="45"
            attchment="12"
          />
          <PostCard
            imageUrl={[photo2]}
            heading="Unmatched toner cartridge quality 20 less than oem price"
            text="Why read motivational sayings? For motivation! You might need a bit, if you can use last year's list of goals this year because it's as good as new."
            users={[user3, user2, user4]}
            comments="76"
            likes="32"
            attchment="66"
          />
          <PostCard
            imageUrl={[photo3]}
            heading="Old fashioned recipe for preventing allergies and chemical sensitivities"
            text="Are you considering buying a compatible inkjet cartridge for your printer?"
            users={[user1]}
            comments="54"
            likes="76"
            attchment="11"
          />
          <AddNewCard />
        </div>

        <div className="trello-container">
          <HeadingCard heading="Trello" />
          <PostCard
            imageUrl={[photo4]}
            heading="Types of paper in catalog printing"
            text="Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article)."
            comments="34"
            likes="23"
            attchment="98"
          />
          <PostCard
            heading="There is no competition"
            text="This article is floated online with an aim to help you find the best dvd printing solution."
            users={[user3, user2]}
            comments="23"
            likes="12"
            attchment="44"
          />
          <AddNewCard />
        </div>

        <div className="test-container">
          <HeadingCard heading="Test" />

          <PostCard
            heading="Linux or windows which is it"
            text="Saving money - is something we would all like."
            users={[user3, user2]}
            comments="55"
            likes="23"
            attchment="19"
          />
          <PostCard
            imageUrl={photo6}
            heading="Be single minded"
            text="“Why does anyone want a vasectomy reversal?” This is a question I hear any time I tell someone what I do for a living."
            users={[user3, user2]}
            comments="12"
            likes="33"
            attchment="66"
          />
          <PostCard
            heading="Linux or windows which is it"
            text="Saving money - is something we would all like."
            users={[user4, user3,user1]}
            comments="55"
            likes="23"
            attchment="19"
          />
          <AddNewCard />
        </div>

        <div className="final-container">
          <HeadingCard heading="Final" />

          <PostCard
            heading="Linux or windows which is it"
            text="Saving money - is something we would all like."
            users={[user3, user2]}
            comments="55"
            likes="23"
            attchment="19"
          />
          <PostCard
            imageUrl={photo6}
            heading="Be single minded"
            text="“Why does anyone want a vasectomy reversal?” This is a question I hear any time I tell someone what I do for a living."
            users={[user3, user1,user4]}
            comments="12"
            likes="33"
            attchment="66"
          />
          <PostCard
            heading="Linux or windows which is it"
            text="Saving money - is something we would all like."
            users={[user3, user2]}
            comments="55"
            likes="23"
            attchment="19"
          />
          <AddNewCard />
        </div>
      </main>
    </>
  );
}
export default App;
