import subprocess

if __name__ == "__main__":
    # # Mettre à jour Pnpm
    # print("")
    # print(
    #     "\33[93m" 
    #     + "PNPM: Updates PNPM to the latest version." 
    #     + "\33[0m"
    # )
    # subprocess.run(["pnpm", "add", "-g", "pnpm"], check=True)


    # # Aller dans le dossier créer
    # directory = '{{ cookiecutter.project_slug }}'
    # print("")
    # print(
    #     "\33[93m"
    #     + "CMD: Create the directory."
    #     + "\33[0m"
    # )
    # subprocess.run(["mkdir", directory], check=True)
    # print("")
    # print(
    #     "\33[93m"
    #     + "CMD: Go to the project directory."
    #     + "\33[0m"
    # )
    # subprocess.run(["cd", directory +'/'], check=True)

    # Installer les dépendances du projet
    print("")
    print(
        "\33[93m"
        + "{{ cookiecutter.js_package_manager.upper() }}: Install the project dependencies."
        + "\33[0m"
    )
    subprocess.run(
        ["{{ cookiecutter.js_package_manager }}", "install"], check=True
    )

    # Mettre à jour les dépendances du projet
    print("")
    print(
        "\33[93m"
        + "{{ cookiecutter.js_package_manager.upper() }}: Updates the project dependencies."
        + "\33[0m"
    )
    subprocess.run(
        ["{{ cookiecutter.js_package_manager }}", "update"], check=True
    )
    
    # and run the server
    
    # subprocess.run(["{{ cookiecutter.js_package_manager }}", "dev"], check=True)
    