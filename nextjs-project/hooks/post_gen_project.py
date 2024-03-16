import subprocess




if __name__ == "__main__":
    print("")
    print(
        "\33[93m"
        + "PNPM: Install dependencies."
        + "\33[0m"
    )
    subprocess.run(["cd", "{{cookiecutter.project_slug}}"], check=True)
    subprocess.run(["pnpm", "install"], check=True)