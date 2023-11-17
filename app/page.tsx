"use client";
import Image from "next/image";
import Button from "./button";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap">
        <Button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Add Counter
        </Button>
        <Button>About</Button>
        <Button>Contact</Button>
        <Button className="hidden sm:block">Dashboard</Button>
        <Button className="block sm:hidden">Mashboard</Button>
        <Button>Reports</Button>
        <Button>Finance</Button>
        <Button>Developers</Button>
        <Button>Code</Button>
      </div>
      <div>{counter}</div>
      <div>
        {counter % 2 == 0 ? (
          <div className="text-xl">Salam</div>
        ) : (
          <div className="text-md">Hi</div>
        )}
      </div>
    </div>
  );
}
