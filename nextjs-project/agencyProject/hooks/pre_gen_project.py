import sys
import subprocess


# Vérifier si pnpm est installé
def is_pnpm_installed() -> bool:
    try:
        subprocess.run(["pnpm", "--version"], capture_output=True, check=True)
        return True
    except Exception:
        return False
    # Installer pnpm, pnpm, yarn ou bun s'il n'est pas installé
    # subprocess.run(["curl", "-fsSL", "https://get.pnpm.io/install.sh", "|", "sh -"], check=True)

if __name__ == "__main__":
    if not is_pnpm_installed():
        # Expliquer comment installer Pnpm
        print(
            "\33[31m" 
            + "ERROR: pnpm is not installed." 
            + "\33[0m"
        )
        print("")
        print("To install pnpm execute:")
        print("curl -fsSL https://get.pnpm.io/install.sh | sh -")
        sys.exit(1)
    