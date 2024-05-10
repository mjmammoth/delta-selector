'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Input } from "../components/input";
import { Select } from "../components/select";
import { Output } from "../components/output";
import { Footer } from "../components/footer";

export default function Home() {
  const [items, setItems] = useState<string[]>(['First Item', 'Second Item']);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <>
      <Header />
      <main className="flex flex-col grow items-center m-10">
        <div className="flex flex-row justify-center flex-wrap">
        <Input setItems={setItems}/>
        <Select items={items} selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
        <Output items={items} selectedItems={selectedItems}/>
        </div>
      </main>
      <Footer />
    </>
  );
}
