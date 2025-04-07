#!/bin/bash

# Join all command line arguments into a single string (project name)
PROJECT_NAME="$*"
ROOT_DIR="$PWD/$PROJECT_NAME"

# Check if project name was provided
if [ -z "$PROJECT_NAME" ]; then
  echo "❌ Please provide a project name."
  echo "Usage: ./create_project.sh \"My Project Name\""
  exit 1
fi

# Create folder with full project name
mkdir -p "$ROOT_DIR"

# Create index.html
cat <<EOF > "$ROOT_DIR/index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$PROJECT_NAME</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">

    </div>

    <script src="./script.js"></script>
</body>
</html>
EOF

# Create style.css
cat <<EOF > "$ROOT_DIR/style.css"
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
EOF

# Create empty script.js
touch "$ROOT_DIR/script.js"

echo "✅ Project '$PROJECT_NAME' created at: $ROOT_DIR"
