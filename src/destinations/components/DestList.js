// import React from "react";

// import Card from "../../shared/components/UIElements/Card";
// import DestItem from "./DestItem";
// import "./DestList.css";

// const DestList = (props) => {
//   if (props.items.length === 0) {
//     return (
//       <div className="dest-list center">
//         <Card>
//           <h2>No dests found. Maybe create one?</h2>
//           <button>Share dest</button>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <ul className="dest-list">
//       {props.items.map((dest) => (
//         <DestItem
//           key={dest.id}
//           id={dest.id}
//           image={dest.imageUrl}
//           title={dest.title}
//           description={dest.description}
//           address={dest.address}
//           creatorId={dest.creator}
//           coordinates={dest.location}
//         />
//       ))}
//     </ul>
//   );
// };

// export default DestList;

import React from "react";
import Card from "../../shared/components/UIElements/Card";
import "./DestList.css";
import DestItem from "./DestItem";

const DestList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="dest-list center">
        <Card>
          <h2>No Destinations Found</h2>
          <button>Share Destination</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="dest-list">
      {props.items.map((dest) => (
        <DestItem
          key={dest.id}
          id={dest.id}
          image={dest.imageUrl}
          title={dest.title}
          description={dest.description}
          address={dest.address}
          creatorId={dest.creator}
          coordinates={dest.location}
        />
      ))}
    </ul>
  );
};

export default DestList;
