<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $selectedOptions = [];
    if (isset($_POST["option1"])) {
        $selectedOptions[] = $_POST["option1"];
    }
    if (isset($_POST["option2"])) {
        $selectedOptions[] = $_POST["option2"];
    }
    if (isset($_POST["option3"])) {
        $selectedOptions[] = $_POST["option3"];
    }

    // You can use the selected options to determine what information to display on the next page.
    // For this example, we'll simply display the selected options.
    echo "<h1>Selected Options:</h1>";
    foreach ($selectedOptions as $option) {
        echo "<p>$option</p>";
    }
}
?>
