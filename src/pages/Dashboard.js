import {useState, useEffect } from 'react';
import ItemForm from '../componentes/ItemForm.js';
import ItemList from '../componentes/ItemList .js';
export default function Dashboard(){
  const [items, setItems] = useState([])
  const [editingItem, setEditingItem] = useState (null)

  useEffect(() => {
    setItems([
      {id:1, title:"Item 1", description: "Descrição do item 1"

      }])
  })

  const handleCreate = (newItem) => {
    setItems([...items, {newItem, id: Date.now()}])
  }

  const handleUpdate = (UpdateItem) => {
    setItems (items.map( item => {
      item.id == editingItems.id ? {...updatedItem, id: editingItems.id } : item
    }));
    setEditingItems(null);
  }

  const handleDelete = (id) => {
    setEditingItem (items.filter(item => item.id !== id))
  }
  
  const handleEdit = (item) => {
    setEditingItem(item)
  }

  return (
    <div className="p-8" >
      <h1 className="text-3x1 font-bold mb-8">CRUD</h1>
      <ItemForm onSubmit={editingItems ? handleUpdate : handleCreate}
      initialData = { editingItems} />

    </div>
  )





}