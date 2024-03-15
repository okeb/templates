
from app.database.providers.supabase import get_supabase_client 

async def get_database_client():
  client = get_supabase_client()
  return client