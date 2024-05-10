import { ChangeEvent } from "react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface InputProps {
  setItems: (items: string[]) => void;
}

export function Input({ setItems } : InputProps) {
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newItems = event.target.value.split('\n').filter(item => item.trim() !== '');
    setItems(newItems);
  }

  return (
    <div className="space-y-4 m-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Input</h3>
        <Textarea className="h-24" id="input" placeholder="exampleItem (One item per line)" onChange={handleInputChange}/>
      </div>
    </div>
  )
}
