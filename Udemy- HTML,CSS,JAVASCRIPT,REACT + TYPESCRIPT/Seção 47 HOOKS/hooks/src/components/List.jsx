import { useEffect, useState } from "react";

const List = ({getItems}) => {
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        console.log('Buscando os dados no Bd...')
        setMyItems(getItems);
    }, [getItems])
  return (
    <div>
      {myItems.length > 0 && myItems.map((item, i) => <p key={i}>{item}</p>)}
    </div>
  )
}

export default List
