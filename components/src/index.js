// Imports
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

// Components
import ApprovalCard from "./Components/ApprovalCard";
import CommentDetail from "./Components/CommentDetail";

const App = () => {
  return (
    <div>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          name={faker.name.firstName()}
          description={faker.lorem.sentence(4)}
          company={faker.company.companyName()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          name={faker.name.firstName()}
          description={faker.lorem.sentence(4)}
          company={faker.company.companyName()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
