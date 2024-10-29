import ItemCard from "./itemCard";

export default function itemList({items,onDelete,onEdit}){
return(
    <div className="space-y-4">
        {items.map((item) => (
            <itemCard 
            key={item.id}
            item={item}
            onDelete={onDelete}
            onEdit={onEdit}
             />
        ))}
    </div>
)
}