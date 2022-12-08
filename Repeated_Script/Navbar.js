export const navigationBar = (
  token = "Hello world",
  name = "Rajendra patel"
) => {
  return `<nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd;">
            <div class="container-fluid" id="navItems">
                <a class="navbar-brand" href="../index.html">Food Store</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="../index.html">Home</a>
                        <a class="nav-link" href="../HTML/Beginner.html">Beginner</a>
                        <a class="nav-link" href="../HTML/Pro_Player.html">Pro</a>
                        <a style="display:${
                          !token ? "block" : "none"
                        }" class="nav-link" href="./HTML/Login.html">login</a>
                        <li style="display:${
                          token ? "block" : "none"
                        }" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ${name}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="../HTML/Beginner.html">Beginner</a></li>
                            <li><a class="dropdown-item" href="../HTML/Pro_Player.html">Pro</a></li>
                            <li id="logoutBtn" class="dropdown-item">Logout</li>
                        </ul>
                        </li>
                    </div>
                </div>
            </div>
        </nav>`;
};
