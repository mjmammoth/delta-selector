import { Checkbox } from "@/components/ui/checkbox"
// import { SVGProps } from "react"
// import { Switch } from "@/components/ui/switch"

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
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Select</h3>
        {/*
        <Switch aria-label="Invert">
          <FlipVerticalIcon className="mr-2 h-4 w-4" />
          Invert
        </Switch>
        */}
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

// function FlipVerticalIcon(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
//       <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
//       <path d="M4 12H2" />
//       <path d="M10 12H8" />
//       <path d="M16 12h-2" />
//       <path d="M22 12h-2" />
//     </svg>
//   )
// }
