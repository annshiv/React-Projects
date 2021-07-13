import React from "react";
import ApprovalCard from "./ApprovalCard";
import CommentDetails from "./CommentDetails";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="Annamalai"
          timeAgo="Today at 2:00pm"
          comment="Very nice one"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Annshiv"
          timeAgo="Today at 4:45pm"
          comment="Super One"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Kani"
          timeAgo="Yesterday at 5:00pm"
          comment="Good. Keep it up!!"
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
