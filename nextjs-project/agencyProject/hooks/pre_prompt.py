import sys
import subprocess
import json
from datetime import datetime
import os

# Fonction pour obtenir la date du jour au format JJ/MM/AAAA
def get_formatted_date():
    today = datetime.now()
    return today.strftime("%d/%m/%Y")

# Fonction pour mettre à jour la date dans le fichier JSON
# def update_date_in_json():
#     try:
#         with open(os.path.join("cookiecutter.json"), 'r', encoding='utf-8') as file:
#             data = json.load(file)
#     except FileNotFoundError:
#         print("Erreur : le fichier data.json n'a pas été trouvé.")
#         sys.exit(1)
#     except json.JSONDecodeError:
#         print("Erreur : le fichier data.json n'est pas un JSON valide.")
#         sys.exit(1)
#     # Mettre à jour la variable date avec la date du jour formatée
#     data["DATE_D_ENTREE_EN_VIGUEUR"] = get_formatted_date()
#     data["DATE_D_ENTREE_EN_VIGUEUR_DES_CG"] = get_formatted_date()
#     data["DATE_DE_MISE_A_JOUR_DE_LA_POLITIQUE_DE_COOKIES"] = get_formatted_date()

def is_node_installed() -> bool:
    try:
        subprocess.run(["node", "-v"], capture_output=True, check=True)
        return True
    except Exception:
        return False

def is_docker_installed() -> bool:
    try:
        subprocess.run(["docker", "--version"], capture_output=True, check=True)
        return True
    except Exception:
        return False

def is_pnpm_installed() -> bool:
    try:
        subprocess.run(["pnpm", "--version"], capture_output=True, check=True)
        return True
    except Exception:
        return False

def is_npm_installed() -> bool:
    try:
        subprocess.run(["npm", "--version"], capture_output=True, check=True)
        return True
    except Exception:
        return False

def is_yarn_installed() -> bool:
    try:
        subprocess.run(["yarn", "--version"], capture_output=True, check=True)
        return True
    except Exception:
        return False


def is_bun_installed() -> bool:
    try:
        subprocess.run(["bun", "--version"], capture_output=True, check=True)
        return True
    except Exception:
        return False


if __name__ == "__main__" and not is_node_installed():
    print("\33[31m" + "ERROR: Node is not installed." + "\33[0m")
    print("")
if not is_bun_installed() and not is_npm_installed and not is_pnpm_installed and not is_yarn_installed:
    print("\33[31m" + "ERROR: pnpm, npm, yarn and bun are not installed." + "\33[0m")
    sys.exit(1)

# update_date_in_json()
print(" Welcome to the OKEB COOKIE COOKER 🎉")
print("")
print("")