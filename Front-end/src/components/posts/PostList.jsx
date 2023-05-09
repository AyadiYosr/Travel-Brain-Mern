import "./posts.css";
import PostItem from "./PostItem";
import Masonry from 'react-masonry-css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import CreatePost from "../../pages/create-post/CreatePost";
import seif from "../../assets/img/seif.jpg";
import img from "../../assets/img/project-img5.png";
import yosr from "../../assets/img/carte-etudi.png";
import proj from "../../assets/img/project-img6.png";
import proj2 from "../../assets/img/project-img5.png";
import proj3 from "../../assets/img/project-img2.png";
import proj4 from "../../assets/img/project-img1.jpg";
import taha from "../../assets/img/taha.jpg";

const breakpointColumnsObj = {
  default: 1,
  1100: 2,
  700: 1
};



const PostList = ({ posts }) => {
  const [isCreatePostVisible, setIsCreatePostVisible] = useState(false);

  const handleCreatePostClick = () => {
    setIsCreatePostVisible(true);
  }

  const handleCreatePostClose = () => {
    setIsCreatePostVisible(false);
  }
  return (
    <>
      <br></br>
      <hr></hr>
      <div className="post-page-wrapper">
        <div class="follow-list">
          <div class="follow-list-item">
            <img src={yosr} alt="Person 1"></img>
            <span>Ayadi Yosr</span>
            <button className="follow-button">Follow 👍🏽</button>
          </div>
          <div class="follow-list-item">
            <img src={taha} alt="Person 1"></img>
            <span>Taha Bacc</span>
            <button className="follow-button">Follow 👍🏽</button>
          </div>
          <div class="follow-list-item">
            <img src={seif} alt="Person 1"></img>
            <span>Seif Essoui</span>
            <button className="follow-button">Follow 👍🏽</button>
          </div>
          <br>
          </br>
          <h3>Community</h3>
          <hr></hr>
          <div class="follow-list-item desc">
            <img src={img} alt="Person 1"></img>
            <span >Tunsian Designers space  🌷 </span>
          </div>
          <div class="follow-list-item desc">
            <img src={proj3} alt="Person 1"></img>
            <span >Tunsian Programmers space</span>
          </div>
          <div class="follow-list-item desc">
            <img src={proj} alt="Person 1"></img>
            <span >Community Galaxy space  ❄️  </span>
          </div>
          <div class="follow-list-item desc">
            <img src={proj4} alt="Person 1"></img>
            <span >Cyber security communitty</span>
          </div>
          
        </div>

        <div className="post-page-left">
          <div className="create-post-wrapper">
            <img src={seif} class='icon' alt="Icon" />
            <input type="text" placeholder="What's on your mind?" onClick={handleCreatePostClick} />
          </div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="post-list"
            columnClassName="post-list-column"
          >
            {posts.map((item, index) => (
              <div key={item._id} className="post-item-wrapper">
                <PostItem post={item} index={index} />
              </div>
            ))}
          </Masonry>
          {isCreatePostVisible && (
            <div className="create-post-modal">
              <CreatePost onClose={handleCreatePostClose} />
            </div>
          )}
        </div>
        <div className="post-page-right">
          <div className="sidebar">
            <h3 className="title">#Today Trending</h3>
            <ul>
              <li>
                {/* <img src={person1} alt="person 1" /> */}
                <span>Designing </span>

                <button className="mybtn">125 posts</button>
              </li>
              <li>
                {/* <img src={person2} alt="person 2" /> */}
                <span>Galaxy </span>
                <button className="mybtn">320 posts</button>
              </li>
              <li>
                {/* <img src={person3} alt="person 3" /> */}
                <span>Programming</span>
                <button className="mybtn">890 posts</button>
              </li>
              <li>
                {/* <img src={person1} alt="person 1" /> */}
                <span>Designing </span>

                <button className="mybtn">125 posts</button>
              </li>
              <li>
                {/* <img src={person1} alt="person 1" /> */}
                <span>Designing </span>

                <button className="mybtn">125 posts</button>
              </li>
            </ul>

            <ul>

            </ul>
          </div>
          <br>
          </br>
          <br></br>
          <div className="sidebar test">
            <img src={img} />

            <span>New Technologies</span>
            <br></br>
            <div className="left-post">
              <span>1425 members</span>
              <br></br>
              <span>125 post/day</span>
            </div>
            <button className="mybtn1">Join Community</button>

          </div>
        </div>
        <br>
        </br>

      </div>
    </>
  );

};

export default PostList;
