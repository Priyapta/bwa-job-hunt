import React, { ChangeEvent, useRef, useState } from "react";
import { FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

interface UploadField {
  form: any;
}
function UploadField({ form }: UploadField) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [nameFile, SetNameFile] = useState<string>("Attach Resume / CV");
  const handleSelectFile = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      SetNameFile(e.target.files[0].name);
      form.setValue("resume", e.target.files[0]);
    }
  };
  return (
    <div className="flex flex-row justify-between">
      <div className="font-semibold">{nameFile}</div>
      <div>
        <div>
          <div
            className="text-xs text-primary font-semibold p-3 cursor-pointer text-center border-2 border-dashed"
            onClick={handleSelectFile}
          >
            Attach your resume
          </div>
        </div>
        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormMessage className="mt-2" />
            </FormItem>
          )}
        />
        <Input
          type="file"
          className="hidden"
          accept="Application/pdf"
          ref={inputRef}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

export default UploadField;
