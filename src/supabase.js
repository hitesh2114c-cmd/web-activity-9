import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nwsenqhdisbvoojvmdhu.supabase.co";
const supabaseKey = "sb_publishable_Rp15a_JZiReJADO2CnZmRA_YQLqmX__";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
