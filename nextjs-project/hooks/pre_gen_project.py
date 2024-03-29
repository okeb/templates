import sys
import subprocess


# Vérifier si Poetry est installé
def is_pnpm_installed() -> bool:
    try:
        subprocess.run(["pnpm", "--version"], capture_output=True, check=True)
        return True
    except Exception:
        return False
    # Installer Poetry s'il n'est pas installé
    # subprocess.run(["curl", "-sSL", "https://install.python-poetry.org", "|", "python3"], check=True)

if __name__ == "__main__":
    if not is_pnpm_installed():
        # Expliquer comment installer pnpm
        print(
            "\33[31m" 
            + "ERROR: Pnpm is not installed." 
            + "\33[0m"
        )
        print("")
        # print("To install p execute:")
        # print("curl -sSL https://install.python-poetry.org | python3 -")
        sys.exit(1)

