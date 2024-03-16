import subprocess




if __name__ == "__main__":
    print("")
    print(
        "\33[93m"
        + "PNPM: Install dependencies."
        + "\33[0m"
    )
    try:
        subprocess.run(["cd", "{{cookiecutter.project_slug}}"], check=True)
    except Exception:
        print(
            "\33[33m"
            + "ERROR: can go into the {{cookiecutter.project_slug}} folder"
            + "\33[0m"
        )
    
    subprocess.run(["pnpm", "install"], check=True)