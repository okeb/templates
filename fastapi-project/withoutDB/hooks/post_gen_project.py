import subprocess

if __name__ == "__main__":
    # Mettre à jour Poetry
    print("")
    print(
        "\33[93m" 
        + "POETRY: Updates Poetry to the latest version." 
        + "\33[0m"
    )
    subprocess.run(["poetry", "self", "update"], check=True)

    # Installer les dépendances du projet
    print("")
    print(
        "\33[93m"
        + "POETRY: Install the project dependencies." 
        + "\33[0m"
    )
    subprocess.run(["poetry", "install", "--no-root"], check=True)

    # Mettre à jour les dépendances du projet
    print("")
    print(
        "\33[93m"
        + "POETRY: Updates the project dependencies."
        + "\33[0m"
    )
    subprocess.run(["poetry", "update"], check=True)
    
    # and active the shell of poetry
    
    subprocess.run(["poetry", "shell"], check=True)
    