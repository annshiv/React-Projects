import React from "react";
import CommentDetails from "./CommentDetails";

function App() {
  return (
    <div className="ui container comments">
      <CommentDetails author="Annamalai" timeAgo="Today at 2:00pm" comment="Very nice one" />
      <CommentDetails author="Annshiv" timeAgo="Today at 4:45pm" comment= "Super One"/>
      <CommentDetails author="Kani" timeAgo="Yesterday at 5:00pm" comment="Good. Keep it up!!"/>
    </div>
  );
}

export default App;
