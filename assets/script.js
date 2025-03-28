/* Body Styling */
body {
    margin: 0;
    padding: 0;
    background: pink; /* ပန်းရောင် */
    font-family: Arial, sans-serif;
    overflow: hidden;
}

/* Raining Effect */
body::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('rain.png');
    opacity: 0.2;
    animation: rainEffect 1s linear infinite;
}

/* Rain Animation */
@keyframes rainEffect {
    from { background-position: 0 0; }
    to { background-position: 0 100%; }
}

/* Heading Styling with Nero Gradient */
h1 {
    text-align: center;
    font-size: 36px;
    background: linear-gradient(to right, black, gray);
    -webkit-background-clip: text;
    color: transparent;
}

/* Menu Styling */
.menu {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
}

.menu a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: 0.3s;
}

.menu a:hover {
    color: lightgray;
}

/* Textbox Styling */
.textbox {
    width: 50%;
    margin: 20px auto;
    padding: 20px;
    background: #333;
    border-radius: 10px;
    color: white;
}
