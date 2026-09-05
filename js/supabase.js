const { createClient } = supabase

const SUPABASE_URL = 'https://pzhbrqtulwysgdusqfbz.supabase.co'
const SUPABASE_KEY = 'sb_publishable_s7aEXosDYQp8WxjtVN3pXg_S2Jd6DMs'  // está en Settings > API

const db = createClient(SUPABASE_URL, SUPABASE_KEY)

// Ejemplo de consulta
async function buscarMascotas(tipo) {
    const { data, error } = await db
    .from('mascotas')
    .select('*')
    .eq('tipo', tipo)
    return data
}