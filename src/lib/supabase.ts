import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!;

export const supabaseClient = createClient(supabaseUrl, supabaseKey);

export const supabasePublicUrl = (filename: string, bucket: string) => {
  const {
    data: { publicUrl },
  } = supabaseClient.storage.from(bucket).getPublicUrl(`public/${filename}`);

  return publicUrl;
};

export const supabaseUploadFile = async (
  file: File | string,
  bucket: string,
) => {};
