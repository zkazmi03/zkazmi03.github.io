/* General styling */
body, html {
    height: 100%;
    margin: 0;
    font-family: Arial, sans-serif;
}

/* Sidebar styling */
nav {
    background-color: #f79f79;
    position: absolute;
    width: 150px;
    height: 100%;
}

nav a {
    padding: 15px;
    display: block;
    font-size: 20pt;
    color: #58355E;
    text-decoration: none;
}

nav a:hover {
    color: #f1f1f1;
}

/* Dropdown styling */
.dropbtn {
    font-size: 20px;
    padding: 10px;
    background-color: #58355E;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 150px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 5px;
}

.dropdown-content a {
    color: blue;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #ddd;
}

.show {
    display: block;
}

/* Content styling */
.content {
    margin-left: 150px;
    padding: 20px;
    background-color: #ffffff;
    height: 100vh;
    padding-left: 25%;
    color: black;
}
