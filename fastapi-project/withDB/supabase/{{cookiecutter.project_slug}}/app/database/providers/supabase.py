from supabase import Client, create_client
from app.config import settings

url = settings.supabase_url
key = settings.supabase_key
supabase:  Client = create_client(url, key)

def get_supabase_client():
  """create connexion to spabase database

  Returns:
      SyncClient: client supabase
  """
  return Client