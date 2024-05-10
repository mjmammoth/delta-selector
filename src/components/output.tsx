import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface OutputProps {
  items: string[];
  selectedItems: string[];
}

export function Output({items, selectedItems} : OutputProps) {
  const copyToClipboard = async (itemsToCopy: string[]) => {
    try {
      await navigator.clipboard.writeText(itemsToCopy.join(', '));
      alert('Copied the text: ' + itemsToCopy.join(', '));
    } catch (err) {
      alert('Failed to copy!');
    }
  };

  const deselectedItems = items.filter(item => !selectedItems.includes(item));

  return (
    <div className="flex flex-col space-y-4 m-4">
      <div className="flex flex-row">
        <div className="flex flex-col items-center space-y-2 mx-2">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Selected</h3>
            <Textarea
              className="h-24"
              id="selected"
              value={selectedItems.join('\n')}
            />
          </div>
          <Button
            onClick={() => copyToClipboard(selectedItems)}
            className="w-3/4"
          >Copy</Button>
        </div>
        <div className="flex flex-col items-center space-y-2 mx-2">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Deselected</h3>
            <Textarea
              className="h-24"
              id="deselected"
              value={deselectedItems.join('\n')}
            />
          </div>
          <Button
            onClick={() => copyToClipboard(deselectedItems)}
            className="w-3/4"
          >Copy</Button>
        </div>
      </div>

    </div>
  )
}
