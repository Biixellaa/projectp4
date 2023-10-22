function detectConditionWords() {
    var userInput = document.getElementById("userInput").value;
    var conditionWords = ["ศูนย์คอมพิวเตอร์ (Data Center)","ศูนย์คอมพิวเตอร์","Firewalls","ศูนย์คอมพิวเตอร์สำรอง","เจ้าหน้าที่ผู้เชี่ยวชาญ","สำนักงาน"
    ,"เครื่องคอมพิวเตอร์แม่ข่าย","อุปกรณ์จัดเก็บข้อมูล","ระบบรักษาความปลอดภัยคอมพิวเตอร์ (Firewall)","วงจรสื่อสาร WAN Link"];

    // Initialize an array to store detected condition words
    var detectedConditionWords = [];

    // Iterate through the condition words and check if they are present in the input
    for (var i = 0; i < conditionWords.length; i++) {
        var condition = conditionWords[i];

        // Check if the condition word exists in the input text (case insensitive)
        if (userInput.toLowerCase().includes(condition.toLowerCase())) {
            detectedConditionWords.push(condition);
        }
    }
    // Clear the previous output
    var conditionWordsOutputList = document.getElementById("conditionWordsOutput");
    conditionWordsOutputList.innerHTML = '';

    // Display the detected condition words
    for (var j = 0; j < detectedConditionWords.length; j++) {
        var conditionWord = detectedConditionWords[j];
        var listItem = document.createElement('li');
        listItem.textContent = conditionWord;
        conditionWordsOutputList.appendChild(listItem);
    }
}

function detectEquipmentWords() {
    var userInput = document.getElementById("userInput").value;
    var equipmentWords = ["ศูนย์คอมพิวเตอร์ (Data Center)","ศูนย์คอมพิวเตอร์หลัก","ศูนย์คอมพิวเตอร์สำรอง","สำนักงาน","เครื่องคอมพิวเตอร์แม่ข่าย"
    ,"อุปกรณ์จัดเก็บข้อมูล","ระบบรักษาความปลอดภัยคอมพิวเตอร์ (Firewall)","วงจรสื่อสาร WAN Link"];

    // Initialize an array to store detected condition words
    var detectedEquipmentWords = [];

    // Iterate through the condition words and check if they are present in the input
    for (var i = 0; i < equipmentWords.length; i++) {
        var condition = equipmentWords[i];

        // Check if the condition word exists in the input text (case insensitive)
        if (userInput.toLowerCase().includes(condition.toLowerCase())) {
            detectedEquipmentWords.push(condition);
        }
    }
    // Clear the previous output
    var EquipmentOutputList = document.getElementById("EquipmentOutput");
    EquipmentOutputList.innerHTML = '';

    // Display the detected condition words
    for (var j = 0; j < detectedEquipmentWords.length; j++) {
        var conditionWord = detectedEquipmentWords[j];
        var listItem = document.createElement('li');
        listItem.textContent = conditionWord;
        EquipmentOutputList.appendChild(listItem);
    }
}


        