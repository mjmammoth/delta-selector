import { Checkbox } from "@/components/ui/checkbox"

interface SelectProps {
  items: string[];
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}

export function Select({ items, selectedItems, setSelectedItems } : SelectProps) {
  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  }

  return (
    <div className="space-y-2 m-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Select</h3>
      </div>
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item} className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 dark:bg-gray-800">
            <div className="flex items-center gap-2">
              <Checkbox id={item} onCheckedChange={() => toggleItem(item)} checked={selectedItems.includes(item)} />
              <span>{item}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
