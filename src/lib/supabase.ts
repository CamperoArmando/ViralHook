import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jtajrikvflocyzzohxvb.supabase.co";
const supabaseKey = "sb_publishable_KtfNXw911E-LrpLlaZWGgg_w4UtQUjr";

export const supabase = createClient(supabaseUrl, supabaseKey);