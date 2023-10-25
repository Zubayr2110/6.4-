import "./Products.css"

export default function Products({list, removeItem}) {
  return (
      <div className="itemcontent">
          {list.map((item) => {
              return (
                  <div key={item.id} className="item">
                      <img src={ item.image} className="item_img"/>
                      <h2 className="item_name">{ item.name}</h2>
                      <h2 className="item_price">{item.narx}</h2>
                      <button className="item_remove" onClick={() => removeItem(item.id)}>delete</button>
                  </div>
              )
          })}
    </div>
  )
}
