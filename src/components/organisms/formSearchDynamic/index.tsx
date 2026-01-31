import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LOCATION_OPTIONS } from "@/constants";
import { OptionType } from "@/types";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

function FormSearchDynamic() {
  return (
    <>
      <div className="mx-auto w-max">
        <div className="mt-6 bg-background p-4 shadow-sm inline-flex items-center gap-4 relative w-max z-10 text-center">
          <div className="inline-flex gap-3 items-center">
            <AiOutlineSearch />
            <Input
              className="py-5  w-[300px] border-none "
              placeholder="Job Title or keyword"
            />
          </div>
          <div className="inline-flex gap-3 items-center">
            <HiOutlineLocationMarker />
            <Select>
              <SelectTrigger className="w-[350px] border-none outline-none py-5">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                {LOCATION_OPTIONS.map((item: OptionType, i: number) => (
                  <SelectItem key={i} value={item.id}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Button>Search</Button>
          </div>
        </div>
        <div>
          <div className="text-muted-foreground mt-3">
            Popular : UI Desinger, UX Researcher , Android, Admin
          </div>
        </div>
      </div>
    </>
  );
}

export default FormSearchDynamic;
