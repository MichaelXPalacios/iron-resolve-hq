import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Video = {
  id: string
  title: string
  description: string
  video_url: string
  thumbnail_url?: string
  video_type: 'youtube' | 'upload'
  created_at: string
  updated_at: string
}