import React from "react";
import RevisionCard from "./RevisionCard";

export default function CardList(props) {
  let newList = props.data.sort((a, b) => b.count - a.count);

  return (
    <div>
      {newList
        .filter((obj) =>
          props.search === "" ? obj : obj.title.includes(props.search) && obj
        )
        .map((object, i) => (
          <RevisionCard
            key={i}
            index={i}
            title={object.title}
            count={object.count}
            upVote={props.upVote}
            downVote={props.downVote}
            delete={props.delete}
          />
        ))}
    </div>
  );
}
