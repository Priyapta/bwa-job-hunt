"use client";
import React from "react";

import { Form, FormField, FormItem } from "../ui/form";

import { CheckboxGroup } from "./CheckBoxForms";
import { filterFormType } from "@/types";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
interface FormFilterDynamic {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void> | undefined;
  filterForms: filterFormType[];
}
function FormFilterDynamic({
  formFilter,
  onSubmitFilter,
  filterForms,
}: FormFilterDynamic) {
  return (
    <Form {...formFilter}>
      <form
        onSubmit={formFilter.handleSubmit(onSubmitFilter)}
        className="space-y-4"
      >
        {filterForms.map((item: filterFormType, i: number) => (
          <CheckboxGroup
            formFilter={formFilter}
            items={item.items}
            label={item.label}
            name={item.name}
          />
        ))}
        <Separator />
        <Button className="mt-5 w-full">Apply Filter</Button>
        <Button variant="outline" className="mt-3 w-full">
          Reset Filter
        </Button>
      </form>
    </Form>
  );
}

export default FormFilterDynamic;
