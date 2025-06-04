// import { useState } from "react";
// import { Link } from "react-router-dom";

// interface Profile {
//   username: string;
//   avatar: string;
// }

// export default function Challenger({ profile }: Profile) {
//   const [showState, setShowState] = useState(false);
//   return (
//     <>
//       <div className="" onClick={() => setShowState(!showState)}>
//         <img src={profile.avatar} alt={`${profile.username}s avatar`} />
//       </div>
//       {showState && (
//         <div>
//           <div>
//             <h3 className="">{profile.username}</h3>
//             <div></div>
//           </div>
//           <div>
//             <Link to="game">Play Remote</Link>
//             <Link to="game">Invite to tournament</Link>
//             <Link to="game">Play Cards Of Doom</Link>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

