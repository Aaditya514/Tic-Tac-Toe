// import UserCard from "./UserCard";
// import BookCard from "./BookCard";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
//       <h1 className="text-4xl font-bold mb-6 text-blue-700">User Profiles</h1>

//       <UserCard name="Alice" age={25} role="Frontend Developer" />
//       <UserCard name="Bob" age={30} role="Backend Developer" />
//       <UserCard name="Charlie" age={28} role="UI/UX Designer" />
//       <BookCard title="Atomic Habits" author="James Clear" year={2018} />
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
//       <h1 className="text-4xl font-bold mb-6 text-blue-700">Counter App</h1>
//       <p className="text-2xl mb-4">Count: {count}</p>
//       <div className="space-x-4">
//       <button
//         onClick={() => setCount(count + 1)}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => setCount(count - 1)}
//         className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl"
//       >
//         Decrement
//       </button>
//       <button
//         onClick={() => setCount(0)}
//         className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl"
//       >
//         Reset
//       </button>
//       </div>
//     </div>
//   )
// }

// import LikeButton from './LikeButton';
// function App(){
//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//       <LikeButton />
//     </div>
//   );
// }
// export default App;


// import React from 'react';
// import MemeSlotMachine from './MemeSlotMachine';
// function App(){
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-700 to-pink-500 flex items-center justify-center p-4">
//       <MemeSlotMachine />
//     </div>
//   );
// }
// export default App;

import './App.css';
import Board from './TICTACTOE/Board';


function App() {
  return (
    <div className="App">
      <Board/>
    </div>
  );
}

export default App;
