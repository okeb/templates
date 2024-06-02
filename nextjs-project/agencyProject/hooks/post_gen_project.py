import subprocess

if __name__ == "__main__":
    # Mettre à jour Pnpm
    print("")
    print(
        "\33[93m" 
        + "PNPM: Updates PNPM to the latest version." 
        + "\33[0m"
    )
    subprocess.run(["pnpm", "add", "-g", "pnpm"], check=True)

    # Installer les dépendances du projet
    print("")
    print(
        "\33[93m"
        + "PNPM: Install the project dependencies." 
        + "\33[0m"
    )
    subprocess.run(["pnpm", "install"], check=True)

    # Mettre à jour les dépendances du projet
    print("")
    print(
        "\33[93m"
        + "PNPM: Updates the project dependencies."
        + "\33[0m"
    )
    subprocess.run(["pnpm", "update"], check=True)
    
    # and run the server
    
    subprocess.run(["pnpm", "dev"], check=True)
    