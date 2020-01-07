import React from "react";

export default function Counter(props) {
  return (
    <div className="space">
      Task completed <span className="badge badge-success">{props.items
                    .filter(item => item.status === true)
                    .length}</span> from{" "}
      <span className="badge badge-danger">{props.items.length}</span>
    </div>
  );
}
