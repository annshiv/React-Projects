import React from "react";
import ReactDOM from "react-dom";
import DefaultComment from "./DefaultComment";
import faker from "faker";
import ApprovalCards from "./ApprovalCards";

const App = () => {
  return (
    <div className="ui comments">
      <ApprovalCards>
        <DefaultComment
          author="Annshiv"
          time="10 mins ago"
          msg="hy 1"
          i={faker.image.avatar()}
        />
      </ApprovalCards>
      <ApprovalCards>
        <DefaultComment
          author="nasds"
          time="20 mins ago"
          msg="hy 2"
          i={faker.image.avatar()}
        />
      </ApprovalCards>
      <ApprovalCards>
        <DefaultComment
          author="ausgdjh"
          time="30 mins ago"
          msg="hy 2"
          i={faker.image.avatar()}
        />
      </ApprovalCards>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
