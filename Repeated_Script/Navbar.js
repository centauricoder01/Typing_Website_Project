export const navigationBar = (token, name) => {
  return `<nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="background-color: #e3f2fd;" >
            <div class="container-fluid" id="navItems">
                <a class="navbar-brand" href="../index.html">Typer</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="../index.html">Home</a>
                        <a class="nav-link" href="../HTML/Pro_Player.html">Pratice</a>
                        <a class="nav-link" href="../HTML/Beginner.html">Test</a>
                        
                    </div>
                </div>
            </div>
        </nav>`;
};
