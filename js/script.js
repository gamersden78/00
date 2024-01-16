<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Gamer's Den</title>
    <style>
        /* Add your CSS styles for the game box here */
        .game-box {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px;
            text-align: center;
        }

        .game-box img {
            max-width: 100%;
            height: auto;
        }

        #addGameButton {
            display: none;
        }
    </style>
</head>
<body>
    <header>
        <!-- Your existing header code -->
    </header>
    <section id="main-content">
        <strong>Trending Now:</strong>
        <div id="Games">
            <!-- Existing game items -->
        </div>
        <button id="addGameButton">Add Game</button>
    </section>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var gamesContainer = document.getElementById('Games');
            var addGameButton = document.getElementById('addGameButton');

            // Prompt for password
            var password = prompt('Enter your password:');
            if (password === 'yourSecretPassword') {
                addGameButton.style.display = 'block'; // Show the button

                addGameButton.addEventListener('click', function () {
                    createGameBox();
                });

                function createGameBox() {
                    var gameBox = document.createElement('div');
                    gameBox.classList.add('game-box');

                    var gameImageInput = document.createElement('input');
                    gameImageInput.setAttribute('type', 'file');
                    gameImageInput.setAttribute('accept', 'image/*');
                    gameImageInput.setAttribute('placeholder', 'Upload Image');
                    gameImageInput.classList.add('game-image-input');

                    var gameNameInput = document.createElement('input');
                    gameNameInput.setAttribute('type', 'text');
                    gameNameInput.setAttribute('placeholder', 'Game Name');
                    gameNameInput.classList.add('game-name-input');

                    gameBox.appendChild(gameImageInput);
                    gameBox.appendChild(document.createElement('br')); // Line break for spacing
                    gameBox.appendChild(gameNameInput);

                    gamesContainer.appendChild(gameBox);
                }
            } else {
                alert('Access denied. Please enter the correct password.');
            }
        });
    </script>
</body>
</html>
