import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "../ui/input";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

function FormSearch() {
  return (
    <>
      <div className="mt-6 bg-background p-4 shadow-sm inline-flex items-center gap-4 relative w-max z-10">
        <div className="inline-flex gap-3 items-center">
          <AiOutlineSearch />
          <Input
            className="py-8  w-[300px] border-none "
            placeholder="Job Title or keyword"
          />
        </div>
        <div className="inline-flex gap-3 items-center">
          <HiOutlineLocationMarker />
          <Select>
            <SelectTrigger className="w-[300px] border-none outline-none py-8">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button className="py-8 px-10 text-lg " variant="default">
            Search my job
          </Button>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default FormSearch;
