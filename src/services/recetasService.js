import { supabase } from './supabaseClient'

// Obtener todas las recetas
export async function getRecetas() {
  const { data, error } = await supabase
    .from('recetas')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

// Crear una nueva receta
export async function createReceta(receta) {
  const { data, error } = await supabase
    .from('recetas')
    .insert([receta])
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data[0]
}