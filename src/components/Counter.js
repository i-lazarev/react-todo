import React from 'react'

export default function Counter(props) {
    const items = props.items
    const x = items.filter(item=>item.status===true)
    const y = items.length
    return (
        <div className="space">
            Task completed <span className="done">{x.length}</span>  from <span className="undone">{y}</span>
        </div>
    )
}
