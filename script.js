let options = [];

function addOption() {
    const input = document.getElementById('userInput');
    const value = input.value.trim();

    if (value) {
        options.push(value);
        displayOptions();
        input.value = ''; // 清空輸入框
    }
}

function removeOption() {
    if (options.length > 0) {
        options.pop();
        displayOptions();
    }
}

function displayOptions() {
    const list = document.getElementById('optionsList');
    list.innerHTML = '';

    options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        list.appendChild(li);
    });
}

function randomSelect() {
    if (options.length > 0) {
        const randomIndex = Math.floor(Math.random() * options.length);
        const selectedOption = options[randomIndex];
        document.getElementById('result').textContent = `隨機選取的結果是：${selectedOption}`;
    } else {
        document.getElementById('result').textContent = '請先添加一些選項！';
    }
}
