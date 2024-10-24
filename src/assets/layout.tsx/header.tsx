// import { Avatar } from "@/components/ui/avatar";
// import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

import Avatar from "../../components/avatar";
// import Input from "../../components/input";
// import Link from "../../components/link";
// import Select from "../../components/select";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <header className="flex items-center gap-4 p-3 m-auto max-w-8xl">
      {/* <Select>
        <div className="rounded-full bg-gradient-to-r from-zinc-800 to-zinc-200 size-4"></div>
        <p className="ml-7 mr-9">Alicia Koch</p>
      </Select> */}
      <Select value="alicia">
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="alicia">
            <div className="flex items-center gap-4">
              <div className="rounded-full size-5 bg-gradient-to-r from-zinc-700"></div>
              <p className="line-clamp-1">Alicia Roch</p>
            </div>
          </SelectItem>
          <SelectItem value="mickael">
            <div className="flex items-center gap-4">
              <div className="rounded-full size-5 bg-gradient-to-r from-blue-500"></div>
              <p>Mickael</p>
            </div>
          </SelectItem>
          <SelectItem value="system">
            <div className="flex items-center gap-4">
              <div className="rounded-full size-5 bg-gradient-to-r from-red-500"></div>
              <p>Jean</p>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
      <Tabs value="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* <Link href="#" isCurrent>
        Overview
      </Link>
      <Link href="#">Customers</Link>
      <Link href="#">Products</Link>
      <Link href="#">Settings</Link> */}

      <div className="flex gap-3 ml-auto">
        {/* <Input placeholder="Shearch..." /> */}
        <Button
          variant="outline"
          onClick={() => {
            setOpen(true);
          }}
          className="inline-flex gap-2 text-sm text-muted-foreground"
        >
          <span>Press</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>
          </kbd>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>

        <Avatar />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
