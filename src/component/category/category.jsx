const style = {
  list: { display: "flex", alignItems: "center", justifyContent: "center" },
  del: {
    width: 40,
    height: 40,
    borderRadius: 10,
    lineHeight: "40px",
    backgroundColor: "gold"
  }
};


const List = ({name, data, handleDelete}) => {

  return <div>
    {
      data.map((item, key) => {

        if ( item.todoState == name) {
          return <div style={style.list} key={item.id}>
        <p style={{ marginRight: 20 }}>{item.text}</p>

        <span style={style.del} onClick={() => {
          if (name != 'complete') {
            handleDelete(item.id, name)
          }
        }}>

          {name == 'complete' ? '✅' : '➡️' }
        
        </span>
      </div>
        }
        
      })
    }
  
  </div>
}


export const Category = ({name, data, handleDelete}) => {

  return (
  <div>
    <h4> {name} </h4>
  <List name={name} data={data} handleDelete={handleDelete} />
  </div>
  )
}
