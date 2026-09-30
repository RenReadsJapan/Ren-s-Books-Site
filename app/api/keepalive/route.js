import { createClient } from '@supabase/supabase-js'

export async function GET(request) {
  if (request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  // TABLE_NAME is a placeholder; we'll fill it in next step
  const { error } = await supabase.from('reviews').select('id').limit(1)
  if (error) return new Response(error.message, { status: 500 })

  return new Response('ok')
}