import React from "react";

export default function Counter(props) {
  const items = props.items;
  const x = items.filter(item => item.status === true);
  const y = items.length;
  return (
    <div className="space">
      Task completed <span className="badge badge-success">{x.length}</span> from{" "}
      <span className="badge badge-danger">{y}</span>
    </div>
  );
}
