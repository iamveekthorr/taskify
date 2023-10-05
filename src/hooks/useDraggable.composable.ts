import { ref } from 'vue';

export const useDraggable = (items: any) => {
  const draggedItem = ref<any | null>(null);

  const startDrag = (evt: DragEvent, item: any) => {
    if (evt.dataTransfer === null) return;

    evt.dataTransfer.dropEffect = 'move';
    evt.dataTransfer.effectAllowed = 'move';
    evt.dataTransfer.setData('itemID', item.id);

    draggedItem.value = item;

    console.log(items, 'items');
    console.log('stated dragging....', draggedItem.value);
  };

  const onDrop = (evt: DragEvent) => {
    if (evt.dataTransfer === null) return;

    const itemID = evt.dataTransfer.getData('itemID');
    console.log('dropped...', itemID);

    if (!itemID) return;

    console.log(items, 'items');

    const itemIndex = items.findIndex((item: any) => item.id === itemID);

    if (itemIndex !== -1) {
      items.splice(itemIndex, 1);
    }
    draggedItem.value = null;
  };

  return {
    startDrag,
    onDrop,
    draggedItem,
  };
};
