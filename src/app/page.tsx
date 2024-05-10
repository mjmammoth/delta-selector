'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Input } from "../components/input";
import { Select } from "../components/select";
import { Output } from "../components/output";

export default function Home() {
  const [items, setItems] = useState<string[]>(['exampleItem']);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <>
      <Header />
      <div className="flex justify-center m-10 flex-wrap">
        <Input setItems={setItems}/>
        <Select items={items} selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
        <Output items={items} selectedItems={selectedItems}/>
      </div>
    </>
  );
}
