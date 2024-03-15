import sys
import subprocess


# Vérifier si Poetry est installé
def is_poetry_installed() -> bool:
    try:
        subprocess.run(["poetry", "--version"], capture_output=True, check=True)
        return True
    except Exception:
        return False
    # Installer Poetry s'il n'est pas installé
    # subprocess.run(["curl", "-sSL", "https://install.python-poetry.org", "|", "python3"], check=True)

if __name__ == "__main__":
    if not is_poetry_installed():
        # Expliquer comment installer Poetry
        print("\33[31m" + "ERROR:" + "\33[0m" + " Poetry is not installed.")
        print("")
        print("To install poetry execute:")
        print("curl -sSL https://install.python-poetry.org | python3 -")
        sys.exit(1)
    else:
        # Mettre à jour Poetry
        print("\33[93m" + "POETRY:" + "\33[0m" + " Updates Poetry to the latest version.")
        subprocess.run(["poetry", "self", "update"], check=True)

        # Installer les dépendances du projet
        print("\33[93m" + "POETRY:" + "\33[0m" + " Install the project dependencies.")
        subprocess.run(["poetry", "install"], check=True)

        # Mettre à jour les dépendances du projet
        print("\33[93m" + "POETRY:" + "\33[0m" + " Updates the project dependencies.")
        subprocess.run(["poetry", "update"], check=True)